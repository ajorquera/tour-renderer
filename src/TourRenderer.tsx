declare var pannellum: any;
declare var window: any;

import 'pannellum';
import { h, render } from 'preact';
import { generateId } from './helpers';
import Defer from './models/Defer';
import Image from './models/Image';
import Link from './models/Link';
import { InfoElement } from './components';
import PannellumLink from './models/PannellumLink';
import PannellumOpts from './models/PannellumOpts';
import Hashtable, { Table } from './models/Hashtable';
import PannellumOverlay from './models/PannellumOverlay';
import PannellumPano from './models/PannellumPano';
import Pano from './models/Pano';
import Info from './models/Info';
import POV from './models/POV';
import Tour from './models/Tour';
import TourRendererOpts from './models/TourRendererOpts';

export default class TourRenderer {
  public static EVENTS: Table<string> = Object.assign(
    {
      UPDATE_INFO_ELEMENT: 'UPDATE_INFO_ELEMENT',
      TOGGLE_INFO_ELEMENT: 'TOGGLE_INFO_ELEMENT',
      DELETE_INFO_ELEMENT: 'DELETE_INFO_ELEMENT',
    },
    {
      CREATE_INFO_ELEMENT: 'CREATE_INFO_ELEMENT',
      CREATE_LINK: 'CREATE_LINK',
      DELETE_LINK: 'DELETE_LINK',
    }
  );

  public static CLASSES: Table<string> = {
    DOM_ELEMENT: 'dom-element',
  };

  public static ERRORS: Table<string> = {
    INVALID_TOUR: 'The properties of the tour are not valid',
  };
  public static readonly DEFAULTS: object = {
    autoLoad: false,
    autoRotate: undefined,
    showControls: true,
  };

  private readonly _classPrefix: string = 'tr';
  private readonly _tour: any;
  private _viewer: any;
  private _dom: Element;
  private _isLoaded: boolean;
  private _options: TourRendererOpts;

  private _panos: Hashtable<Pano>;
  private _name: string;
  private _description: string;
  private _first: Pano;
  private _preview: Image;

  private _pannellumPanos: Hashtable<PannellumPano>;
  private _selectPOVDeferred: Defer<POV>;
  private _isSelectingPOV: boolean;
  private _onLoad: () => {};
  private _onUpdateInfoListeners: ((info: any) => void)[] = [];
  private _onDeleteInfoListeners: ((info: any) => void)[] = [];

  get panos(): Hashtable<Pano> {
    return this._panos;
  }

  constructor(tour: Tour, dom: string | Element, options: TourRendererOpts = {}) {
    this._tour = tour;
    this._options = Object.assign({}, TourRenderer.DEFAULTS, options);
    if (typeof dom === 'string') {
      dom = document.querySelector(dom);
    }

    this._validateTour();

    this._dom = dom;
    this._onLoad = options.onLoad;
    this._init();
  }

  public destroy() {
    this._viewer.destroy();
  }

  public addInfoUpdateListener(fn) {
    this._onUpdateInfoListeners.push(fn);
  }

  public addInfoDeleteListener(fn) {
    this._onDeleteInfoListeners.push(fn);
  }

  public selectPOVInViewer(): Promise<POV> {
    if (!this._isLoaded) {
      return Promise.reject(new Error('viewer not loaded'));
    }

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
    elm.classList.add(TourRenderer.CLASSES.DOM_ELEMENT);
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
      createTooltipFunc: (divParent) => {
        divParent.appendChild(elm);
      },
    };

    this._viewer.addHotSpot(params);

    return params;
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
    this._viewer.setPitch(this._viewer.getPitch() + 0.1);
  }

  public addInfoElement(obj: { id?: string; description?: string; title?: string; POV?: POV; isEdit?: boolean }) {
    let { id, title, description, POV } = obj;
    id = id || generateId();

    const pano = this.getPano();
    const info = {
      id,
      POV,
      title,
      description,
      infoElement: <InfoElement isEdit={this._options.editMode} title={title} description={description} id={id} />,
    };

    pano.infoElements.add(info);
    this._addInfoToViewer(info);
  }

  public deleteInfoElement(elem: Info | string): void {
    const pano = this.getPano();
    if (typeof elem === 'string') {
      elem = pano.infoElements.get(elem);
    }

    pano.infoElements.delete(elem);
    this.deleteOverlay(elem);
  }

  public getPano(id: string = this._viewer.getScene()): Pano | null {
    return this._panos.get(id);
  }

  public setPano(pano: Pano | string) {
    let id = typeof pano === 'object' ? pano.id : pano;

    return this._viewer.loadScene(id);
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
      yaw: 0,
    };

    if (this._viewer) {
      pov.yaw = this._viewer.getYaw();
      pov.pitch = this._viewer.getPitch();
    }

    return pov;
  }

  public deleteLink(link: Link | string): void {
    const pano = this.getPano();

    if (typeof link === 'string') {
      link = pano.links.get(link);
    }

    pano.links.delete(link.id);
    const isDeleted = this._viewer.removeHotSpot(link.id);

    this.forceToRender();
  }

  public getLink(id) {
    return this.getPano().links.get(id);
  }

  public createLinkTo(
    pano: Pano | string,
    pov: POV = this.getPOV(),
    targetPOV: POV = { pitch: 0, yaw: 0 },
    id: string
  ): Link | void {
    if (!this._isLoaded) return console.info('Viewer not loaded');

    if (typeof pano !== 'object') {
      pano = this.getPano(pano);
    }

    if (!pano) throw new Error('parameter missing: pano');

    const link: Link = {
      POV: pov,
      id: id || generateId(),
      targetPOV,
      to: pano,
    };

    const currentPano = this.getCurrentPano();

    currentPano.links.add(link);
    this._addLink(link);

    const event = new CustomEvent('newLink', { detail: link });
    this._dom.dispatchEvent(event);

    return link;
  }

  public isFirstPano() {
    return this.getCurrentPano() === this._first;
  }

  public setFirstPano(pano: Pano) {
    this._first = pano;
  }

  // ----------------------------------- PRIVATE ----------------------------------------------------------------
  private _init(): void {
    this._processTour();
    this._initViewer();
    this._setListeners();
  }

  private _initViewer(): void {
    const params: PannellumOpts = {
      autoLoad: this._options.autoLoad,
      autoRotate: this._options.autoRotate,
      showControls: this._options.showControls,
      keyboardZoom: this._options.keyboardZoom,
      mouseZoom: this._options.mouseZoom,
      disableKeyboardCtrl: true,

      // zoom level 120, 100 default, 50 most
      default: {
        firstScene: this._first.id,
        pitch: this._first.POV.pitch,
        sceneFadeDuration: 1000,
        yaw: this._first.POV.yaw,
      },
      hfov: 120,
      scenes: this._pannellumPanos.table,
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
    const panos = this._tour.panos || this._tour.photoSpheres;
    // check to refactor this part
    this._panos = new Hashtable(
      panos.map((photoSphere) => {
        return {
          id: photoSphere.id,
          infoElements: new Hashtable(photoSphere.infoElements),
          name: photoSphere.name,
          POV: photoSphere.POV,
          url: photoSphere.link,
        };
      })
    );

    panos.forEach((photoSphere) => {
      const pano = this._panos.get(photoSphere.id);
      photoSphere.links = photoSphere.links || [];
      photoSphere.infoElements = photoSphere.infoElements || [];

      pano.links = new Hashtable(photoSphere.links.map(this._transformToLink.bind(this)));
      pano.infoElements = new Hashtable(photoSphere.infoElements.map(this._transformToInfo.bind(this)));
    });

    this._pannellumPanos = new Hashtable(this._panos.array.map(this._transformToPannellumPano.bind(this)));
  }

  private _validateTour(): void {
    const panos = this._tour && (this._tour.panos || this._tour.photoSpheres);

    if (!panos || !panos.length) {
      throw new Error(TourRenderer.ERRORS.INVALID_TOUR);
    }

    const image = this._tour.images && this._tour.images[0];

    if (image) {
      this._preview = { url: image.link, name: image.name, id: image.id };
    }

    if (!this._tour.POV) {
      this._tour.POV = {
        yaw: 0,
        pitch: 0,
      };
    }
  }

  private _processTour(): void {
    this._name = this._tour.name;
    this._description = this._tour.description;

    this._processPanos();

    if (this._tour.firstPhotoSphereId) {
      this._first = this._panos.get(this._tour.firstPhotoSphereId) || this._panos.get();
    } else {
      this._first = this._panos.get();
    }
  }

  private _setListeners(): void {
    this._viewer.on('load', this._onLoadPano.bind(this));
    this._viewer.on('mousedown', this._onClick.bind(this));
    this._viewer.on('touchstart', this._onClick.bind(this));
    this._dom.addEventListener('TOGGLE_INFO_ELEMENT', this.forceToRender.bind(this));
    this._dom.addEventListener('UPDATE_INFO_ELEMENT', this._updateInfoListener.bind(this));
    this._dom.addEventListener('DELETE_INFO_ELEMENT', this._deleteInfoListener.bind(this));
  }

  private _deleteInfoListener(ev) {
    const data = ev.detail;
    this.deleteInfoElement(data.id);

    this._onDeleteInfoListeners.forEach((fn) => {
      fn(data);
    });
  }

  private _updateInfoListener(ev) {
    const data = ev.detail;
    const info = this.getPano().infoElements.get(data.id);
    info.title = data.title;
    info.description = data.description;

    this._onUpdateInfoListeners.forEach((fn) => {
      fn(info);
    });
  }

  private _onClick(mouseEvent: any): void {
    if (!this._isSelectingPOV) {
      return;
    }

    const event = (mouseEvent.targetTouches && mouseEvent.targetTouches[0]) || mouseEvent;

    const coords = this._viewer.mouseEventToCoords(event);

    const pov = {
      pitch: coords[0],
      yaw: coords[1],
    };

    this._isSelectingPOV = false;
    this._selectPOVDeferred.resolve(pov);
    this._selectPOVDeferred = null;
  }

  private _onLoadPano(id): void {
    this._isLoaded = true;
    if (!this._options.noLinks) {
      this._setLinks();
    }
    this._setInfos();

    // NOTE use CustomEvent to pass data
    const event = new Event('load');

    this._dom.dispatchEvent(event);

    if (typeof this._onLoad === 'function') this._onLoad();
  }

  private _setLinks(): void {
    const links = this.getCurrentPano().links;
    links.array.forEach((link) => {
      this._addLink(link);
    });
  }

  private _setInfos(): void {
    const infos = this.getPano().infoElements;
    infos.array.forEach((info) => {
      this._addInfoToViewer(info);
    });
  }

  private _addInfoToViewer(info: Info): void {
    this._viewer.addHotSpot(this._transformToPannellumOverlay(info));
  }
  private _addLink(link: Link): void {
    this._viewer.removeHotSpot(link.id);
    this._viewer.addHotSpot(this._transformToPannellumLink(link));
  }

  private _transformToLink(link: any): Link {
    const pano = this._panos.get(link.toPhotoSphereId || link.toId);

    return {
      POV: link.POV,
      id: link.id,
      targetPOV: link.targetPOV,
      to: pano,
    };
  }

  private _transformToInfo(infoElement): Info {
    const { POV, id, name, description } = infoElement;

    return {
      title: name,
      description,
      POV,
      id,
      infoElement: <InfoElement isEdit={this._options.editMode} id={id} title={name} description={description} />,
    };
  }
  private _transformToPannellumOverlay(info: Info): PannellumOverlay {
    return {
      id: info.id,
      pitch: info.POV.pitch,
      yaw: info.POV.yaw,
      type: 'info',
      cssClass: 'n',
      createTooltipFunc: (divParent: HTMLElement) => render(info.infoElement, divParent),
    };
  }

  private _transformToPannellumLink(link: Link): PannellumLink {
    return {
      id: link.id,
      pitch: link.POV.pitch,
      sceneId: link.to && link.to.id,
      targetPitch: link.targetPOV.pitch,
      targetYaw: link.targetPOV.yaw,
      text: link.to && link.to.name,
      type: 'scene',
      yaw: link.POV.yaw,
    };
  }

  private _transformToPannellumPano(pano: Pano): any {
    const params: any = {
      id: pano.id,
      panorama: pano.url,
      type: 'equirectangular',
    };

    if (!this._options.noTitle) {
      params.title = pano.name;
    }

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

window.TourRenderer = TourRenderer;
