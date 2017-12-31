require('pannellum');
declare const pannellum: any;

import Tour from './models/Tour'
import Pano from './models/Pano'
import Image from './models/Image'
import PannellumPano from './models/PannellumPano'
import PannellumLink from './models/PannellumLink'
import PannellumOpts from './models/PannellumOpts'
import Link from './models/Link'
import Defer from './models/Defer'
import POV from './models/POV'
import Hashtable, { Table } from './models/Hashtable'

export default class TourRenderer {
	private readonly _classPrefix       : string = 'tr'
	private readonly _tour              : any;
	private          _viewer            : any;
	private          _dom               : Element;
	private          _loaded            : boolean;
	
	private          _panos             : Hashtable<Pano>;
	private          _name              : string;
	private          _description       : string;
	private          _first             : Pano;
	private          _preview           : Image;
	
	private          _pannellumPanos    : Hashtable<PannellumPano>;
	private          _selectPOVDeferred : Defer<POV>;
	private          _isSelectingPOV    : boolean;
	
	get panos(): Table<Pano> {
		return this._panos.table;
	}
	
	constructor(tour: any, dom: string | Element) {
		this._tour = tour;
		
		if(typeof dom === 'string') {
			dom = document.querySelector(dom); 
		}
		
		this._dom = dom;
		this._init();
	}
	
	selectPOVInViewer(): Promise<POV> {
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

	toggleControls(show?: boolean): void {
		this._dom.querySelector('.pnlm-controls-container').classList.toggle(this._createClass('hide'), !show);
		this._dom.querySelector('.pnlm-panorama-info').classList.toggle(this._createClass('hide'), !show);

	}

	getPano(id: number = this._viewer.getScene()): Pano | null {
		return this._panos.get(id);
	}
	
	/**
	 * @deprecated Use get pano
	 */
	getCurrentPano(): Pano {
		return this.getPano();
	}
	
	getPOV(): POV {
		const POV = {
			yaw: 0,
			pitch: 0
		};
		
		if(this._viewer) {
			POV.yaw = this._viewer.getYaw(),
			POV.pitch = this._viewer.getPitch()
		}
		
		return POV;
	}
	
	deleteLink(link: Link | number): void {
		const pano = this.getPano();
		
		if(typeof link === 'number') {
			link = pano.links.get(link);
		}

		pano.links.delete(link.id);
		this._viewer.removeHotSpot(link.id)
	}	

	createLinkTo(pano: Pano | number, POV: POV = this.getPOV(), targetPOV: POV = {pitch: 0, yaw:0}): void {
		if(!this._loaded) return console.info('Viewer not loaded');
		
		if(typeof pano !== 'object' ) {
			pano = this.getPano(pano);
		}

		if(!pano) throw new Error('parameter missing: pano');

		const link: Link = {
			id: Math.random() * (new Date()).valueOf(),
			to: pano,
			POV,
			targetPOV
		}
		
		const currentPano = this.getCurrentPano();
		
		currentPano.links.add(link.id, link);
		this._addLink(link);

		const event = new CustomEvent('newLink', {detail: link});
		this._dom.dispatchEvent(event);
	}
	
	// ---------------------------------------- PRIVATE ----------------------------------------------------------------------------
	private _init(): void {
		this._processTour();
		this._initViewer();
		this._setListeners();
	}
	
	private _initViewer(): void {
		const params: PannellumOpts = {    
			autoLoad: false,
			//zoom level 120, 100 default, 50 most
			hfov: 120,
			showControls: true,
			scenes: this._pannellumPanos.table,
			default: {
				firstScene: this._first.id,
				sceneFadeDuration: 1000,
				yaw: 0,
				pitch: 0
			}
		};
		
		if(this._preview) {
			params.preview = this._preview.url;
		}
		
		this._viewer = pannellum.viewer(this._dom, params);
	}
	_createClass(className): string {
		return `${this._classPrefix}-${className}`;
	}
	private _processPanos(): void {

		// check to refactor this part
		this._panos = new Hashtable(this._tour.photoSpheres.map((photoSphere) => {
			return {
				id: photoSphere.id,
				name: photoSphere.name,
				url: photoSphere.link,
				POV: photoSphere.POV,
				infoElements: new Hashtable(photoSphere.infoElements)
			}
		}));
		
		this._tour.photoSpheres.forEach((photoSphere) => {
			this._panos.get(photoSphere.id).links = new Hashtable(photoSphere.links.map(this._transformToLink.bind(this)))
		});
		
		if(this._tour.firstPhotoSphereId) {
			this._first = this._panos.get(this._tour.firstPhotoSphereId);
			this._first.POV = this._tour.POV;
		} else {
			this._first = this._panos.get();
			this._first.POV = {
				yaw: 0,
				pitch: 0
			}
		}
		
		this._pannellumPanos = new Hashtable(this._panos.array().map(this._transformToPannellumPano.bind(this)));
	}
	
	private _processTour(): void {
		const image = this._tour.images && this._tour.images[0];
		
		if(image) {
			this._preview = {url: image.link, name: image.name, id: image.id};
		}
		
		this._name = this._tour.name;
		this._description = this._tour.description;
		
		this._processPanos();
	}
	
	private _setListeners(): void {
		this._viewer.on('load', this._onLoadPano.bind(this));
		this._viewer.on('mousedown', this._onClick.bind(this));
		this._viewer.on('touchstart', this._onClick.bind(this));
	}
	
	private _onClick(mouseEvent: any): void {

		if (!this._isSelectingPOV) {
			return;
		}

		const event = (mouseEvent.targetTouches && mouseEvent.targetTouches[0]) || mouseEvent
		
		const coords = this._viewer.mouseEventToCoords(event)

		const POV = {
			pitch: coords[0],
			yaw: coords[1]
		}

		this._isSelectingPOV = false;
		this._selectPOVDeferred.resolve(POV);
		this._selectPOVDeferred = null;
	}
	
	private _onLoadPano(id): void {
		this._loaded = true;
		this._setLinks();

		// NOTE use CustomEvent to pass data
		const event = new Event('load');

		this._dom.dispatchEvent(event);
	}
	
	private _setLinks(): void {
		const links = this.getCurrentPano().links;
		links.array().forEach((link) => {
			this._addLink(link);
		});
	}
	
	private _addLink(link: Link): void {
		this._viewer.addHotSpot(this._transformToPannellumLink(link));
	}
	
	private _transformToLink(link: any): Link {
		const pano = this._panos.get(link.toPhotoSphereId);

		return {
			id: link.id,
			POV: link.POV,
			to: pano,
			targetPOV: link.targetPOV
		}
	}
	
	private _transformToPannellumLink(link: Link): PannellumLink {
		return {
			id: link.id,
			pitch: link.POV.pitch,
			yaw: link.POV.yaw,
			type: 'scene',
			sceneId: link.to.id,
			text: link.to.name,
			targetPitch: link.targetPOV.pitch,
			targetYaw: link.targetPOV.yaw,
		}
	}
	
	private _transformToPannellumPano(pano: Pano): any {
		let pitch, yaw;
		let params:any = {
			id: pano.id,
			title: pano.name,
			type: 'equirectangular',
			panorama: pano.url
		};

		if(pano.POV) {
			params.pitch = pano.POV.pitch;
			params.yaw = pano.POV.yaw;
		}
		
		// TODO if we initialize the tour with scenes we dont need to use _setLinks 
		if(pano.links && pano.links.length()) {
			// params.hotSpots = pano.links.array().map(this._transformToPannellumLink);
		}

		return params;
	}
	
	destroy() {
		this._viewer.destroy();
	}
}
