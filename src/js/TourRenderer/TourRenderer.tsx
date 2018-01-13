declare var pannellum: any;
import '../../less/tour-renderer.less';
import 'pannellum';
import { h, render, Component } from 'preact';
import { generateId } from './helpers';
import Defer from './models/Defer';
import Image from './models/Image';
import Link from './models/Link';
import InfoElement from './models/InfoElement';
import PannellumLink from './models/PannellumLink';
import PannellumOpts from './models/PannellumOpts';
import Hashtable, { Table } from './models/Hashtable';
import PannellumOverlay from './models/PannellumOverlay';
import PannellumPano from './models/PannellumPano';
import Pano from './models/Pano';
import Info from './models/Info';
import POV from './models/POV';
import Tour from './models/Tour';

export default class TourRenderer {
	public static EVENTS: Table<string> = Object.assign({}, InfoElement.EVENTS, {
		CREATE_INFO_ELEMENT: 'CREATE_INFO_ELEMENT',
		CREATE_LINK: 'CREATE_LINK',
		DELETE_LINK: 'DELETE_LINK'
	});

	private readonly _classPrefix: string = 'tr';
	private readonly _tour: any;
	private          _viewer: any;
	private          _dom: Element;
	private          _isLoaded: boolean;

	private          _panos: Hashtable<Pano>;
	private          _name: string;
	private          _description: string;
	private          _first: Pano;
	private          _preview: Image;

	private          _pannellumPanos: Hashtable<PannellumPano>;
	private          _selectPOVDeferred: Defer<POV>;
	private          _isSelectingPOV: boolean;

	get panos(): Hashtable<Pano> {
		return this._panos;
	}

	constructor(tour: any, dom: string | Element) {
		this._tour = tour;
		if (typeof dom === 'string') {
			dom = document.querySelector(dom);
		}

		this._dom = dom;
		this._init();
	}

	public destroy() {
		this._viewer.destroy();
	}

	public selectPOVInViewer(): Promise<POV> {
		if (!this._isLoaded) {
			return Promise.reject(new Error('viewer not loaded'));
		}

		const that = this;

		this._isSelectingPOV = true;
		this._selectPOVDeferred = new Defer();

		this.toggleControls(false);
		this._dom.classList.add(this._createClass('selecting-pov'));
		this._selectPOVDeferred.promise.then(() => {
			this.toggleControls(true);
			this._dom.classList.remove(this._createClass('selecting-pov'));
		});

		return this._selectPOVDeferred.promise;
	}

	public toggleControls(show?: boolean): void {
		this._dom.querySelector('.pnlm-controls-container').classList.toggle(this._createClass('hide'), !show);
		this._dom.querySelector('.pnlm-panorama-info').classList.toggle(this._createClass('hide'), !show);

	}

	public addDOM(elm: HTMLElement) {
		this._dom.appendChild(elm);
	}

	public deleteDOM(elm: HTMLElement) {
		this._dom.removeChild(elm);
	}

	public addOverlay(elm: any, pov: POV) {
		const params: PannellumOverlay = {
			id: generateId(),
			pitch: pov.pitch,
			yaw: pov.yaw,
			type: 'info',
			createTooltipFunc: (divParent) => render(elm, divParent)
		};

		this._viewer.addHotSpot(params);
	}

	public deleteOverlay(item: Info | string | number) {
		let index;

		if (typeof item === 'object') {
			index = item.id;
		} else {
			index = item;
		}

		this._viewer.removeHotSpot(index);
	}

	public forceToRender() {
		this._viewer.setYaw(this._viewer.getYaw());
	}

	public addInfoElement(obj: {id?: string, description?: string, title?: string, POV?: POV, isEdit?: boolean }) {
		let {id, title, description, POV, isEdit} = obj;
		id = id || generateId();
		description = description || 'Description';
		title = title || 'Title';
		isEdit = typeof isEdit === 'boolean' ? isEdit : false;
		const pano = this.getPano();
		const info = {
			id,
			POV,
			title,
			description,
			infoElement: (
				<InfoElement isEdit={isEdit} classPrefix={this._classPrefix} title={title} description={description} id={id} />
			)
		};

		pano.infos.add(info);
		this._addInfo(info);
	}

	public deleteInfoElement(elem: Info | string): void {
		const pano = this.getPano();
		if (typeof elem === 'string') {
			elem = pano.infos.get(elem);
		}

		pano.infos.delete(elem);
		this.deleteOverlay(elem);
	}

	public getPano(id: string = this._viewer.getScene()): Pano | null {
		return this._panos.get(id);
	}

	/**
	 * @deprecated Use get pano
	 */
	public getCurrentPano(): Pano {
		return this.getPano();
	}

	public getPOV(): POV {
		const pov = {
			pitch: 0,
			yaw: 0
		};

		if (this._viewer) {
			pov.yaw = this._viewer.getYaw(),
			pov.pitch = this._viewer.getPitch();
		}

		return pov;
	}

	public deleteLink(link: Link | string): void {
		const pano = this.getPano();

		if(typeof link === 'string') {
			link = pano.links.get(link);
		}

		pano.links.delete(link.id);
		this._viewer.removeHotSpot(link.id);
	}

	public createLinkTo(pano: Pano | string, pov: POV = this.getPOV(), targetPOV: POV = {pitch: 0, yaw:0}): void {
		if (!this._isLoaded) return console.info('Viewer not loaded');

		if (typeof pano !== 'object' ) {
			pano = this.getPano(pano);
		}

		if (!pano) throw new Error('parameter missing: pano');

		const link: Link = {
			POV: pov,
			id: generateId(),
			targetPOV,
			to: pano
		};

		const currentPano = this.getCurrentPano();

		currentPano.links.add(link);
		this._addLink(link);

		const event = new CustomEvent('newLink', {detail: link});
		this._dom.dispatchEvent(event);
	}

	// ----------------------------------- PRIVATE ----------------------------------------------------------------
	private _init(): void {
		this._processTour();
		this._initViewer();
		this._setListeners();
	}

	private _initViewer(): void {
		const params: PannellumOpts = {
			autoLoad: false,
			// zoom level 120, 100 default, 50 most
			default: {
				firstScene: this._first.id,
				pitch: 0,
				sceneFadeDuration: 1000,
				yaw: 0
			},
			hfov: 120,
			scenes: this._pannellumPanos.table,
			showControls: true
		};

		if (this._preview) {
			params.preview = this._preview.url;
		}

		this._viewer = pannellum.viewer(this._dom, params);
	}

	private _createClass(className): string {
		return `${this._classPrefix}-${className}`;
	}

	private _processPanos(): void {

		// check to refactor this part
		this._panos = new Hashtable(this._tour.photoSpheres.map((photoSphere) => {
			return {
				id: photoSphere.id,
				infoElements: new Hashtable(photoSphere.infoElements),
				name: photoSphere.name,
				POV: photoSphere.POV,
				url: photoSphere.link,
			};
		}));

		this._tour.photoSpheres.forEach((photoSphere) => {
			const pano = this._panos.get(photoSphere.id);
			pano.links = new Hashtable(photoSphere.links.map(this._transformToLink.bind(this)));
			pano.infos = new Hashtable(photoSphere.infoElements.map(this._transformToInfo.bind(this)));
		});

		this._pannellumPanos = new Hashtable(this._panos.array.map(this._transformToPannellumPano.bind(this)));
	}

	private _processTour(): void {
		const image = this._tour.images && this._tour.images[0];

		if (image) {
			this._preview = {url: image.link, name: image.name, id: image.id};
		}

		this._name = this._tour.name;
		this._description = this._tour.description;

		this._processPanos();

		if (this._tour.firstPhotoSphereId) {
			this._first = this._panos.get(this._tour.firstPhotoSphereId);
			this._first.POV = this._tour.POV;
		} else {
			this._first = this._panos.get();
			this._first.POV = {
				pitch: 0,
				yaw: 0
			};
		}
	}

	private _setListeners(): void {
		this._viewer.on('load', this._onLoadPano.bind(this));
		this._viewer.on('mousedown', this._onClick.bind(this));
		this._viewer.on('touchstart', this._onClick.bind(this));
		this._dom.addEventListener(InfoElement.EVENTS.TOGGLE_INFO_ELEMENT, this.forceToRender.bind(this));
		this._dom.addEventListener(InfoElement.EVENTS.UPDATE_INFO_ELEMENT, this._updateInfoListener.bind(this));
		this._dom.addEventListener(InfoElement.EVENTS.DELETE_INFO_ELEMENT, this._deleteInfoListener.bind(this));
	}

	private _deleteInfoListener(ev) {
		const data = ev.detail;
		this.deleteInfoElement(data.id);
	}

	private _updateInfoListener(ev) {
		const data = ev.detail;
		const info = this.getPano().infos.get(data.id);
		info.title = data.title;
		info.description = data.title;
	}

	private _onClick(mouseEvent: any): void {

		if (!this._isSelectingPOV) {
			return;
		}

		const event = (mouseEvent.targetTouches && mouseEvent.targetTouches[0]) || mouseEvent;

		const coords = this._viewer.mouseEventToCoords(event);

		const pov = {
			pitch: coords[0],
			yaw: coords[1]
		};

		this._isSelectingPOV = false;
		this._selectPOVDeferred.resolve(pov);
		this._selectPOVDeferred = null;
	}

	private _onLoadPano(id): void {
		this._isLoaded = true;
		this._setLinks();
		this._setInfos();

		// NOTE use CustomEvent to pass data
		const event = new Event('load');

		this._dom.dispatchEvent(event);
	}

	private _setLinks(): void {
		const links = this.getCurrentPano().links;
		links.array.forEach((link) => {
			this._addLink(link);
		});
	}

	private _setInfos(): void {
		const infos = this.getCurrentPano().infos;
		infos.array.forEach((info) => {
			this._addInfo(info);
		});
	}

	private _addInfo(info: Info): void {
		this._viewer.addHotSpot(this._transformToPannellumOverlay(info));
	}
	private _addLink(link: Link): void {
		this._viewer.addHotSpot(this._transformToPannellumLink(link));
	}

	private _transformToLink(link: any): Link {
		const pano = this._panos.get(link.toPhotoSphereId);

		return {
			POV: link.POV,
			id: link.id,
			targetPOV: link.targetPOV,
			to: pano
		};
	}

	private _transformToInfo(infoElement): Info {
		const { POV, id, name, description } = infoElement;

		return {
			title: name,
			description,
			POV,
			id,
			infoElement: (<InfoElement classPrefix={this._classPrefix} id={id} title={name} description={description} />)
		};
	}
	private _transformToPannellumOverlay(info: Info): PannellumOverlay {

		return {
			id: info.id,
			pitch: info.POV.pitch,
			yaw: info.POV.yaw,
			type: 'info',
			cssClass: 'n',
			createTooltipFunc: (divParent: HTMLElement) => render(info.infoElement, divParent)
		};
	}

	private _transformToPannellumLink(link: Link): PannellumLink {
		return {
			id: link.id,
			pitch: link.POV.pitch,
			sceneId: link.to.id,
			targetPitch: link.targetPOV.pitch,
			targetYaw: link.targetPOV.yaw,
			text: link.to.name,
			type: 'scene',
			yaw: link.POV.yaw
		};
	}

	private _transformToPannellumPano(pano: Pano): any {
		const params: any = {
			id: pano.id,
			panorama: pano.url,
			title: pano.name,
			type: 'equirectangular'
		};

		if (pano.POV) {
			params.pitch = pano.POV.pitch;
			params.yaw = pano.POV.yaw;
		}

		// TODO if we initialize the tour with scenes we dont need to use _setLinks
		if (pano.links && pano.links.length) {
			// params.hotSpots = pano.links.array().map(this._transformToPannellumLink);
		}

		return params;
	}
}