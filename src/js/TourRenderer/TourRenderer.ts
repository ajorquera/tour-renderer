require('pannellum');
declare const pannellum: any;

import Tour from './models/Tour'
import Pano from './models/Pano'
import Image from './models/Image'
import PannellumPano from './models/PannellumPano'
import PannellumLink from './models/PannellumLink'
import PannellumOpts from './models/PannellumOpts'
import Link from './models/Link'
import POV from './models/POV'
import Hashtable, { Table } from './models/Hashtable'

export default class TourRenderer {
  private readonly _tour           : any;
  private          _viewer         : any;
  private          _dom            : Element;
  private          _loaded         : boolean;
  
  private          _panos           : Hashtable<Pano>;
  private          _name           : string;
  private          _description    : string;
  private          _first          : Pano;
  private          _preview        : Image;
  
  private          _pannellumPanos : Hashtable<PannellumPano>;

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

  getPano(id: number): Pano | null {
    return this._panos.get(id);
  }

  getPanos

  getCurrentPano(): Pano {
    if(!this._viewer) {
      return null;
    }
      const panoId = this._viewer.getScene();
      return this._panos.get(panoId);
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

  setLinkTo(pano: Pano, POV: POV = this.getPOV(), targetPOV: POV = {pitch: 0, yaw:0}): void {
    if(!this._loaded) return console.info('Viewer not loaded');
    if(!pano) throw new Error('parameter missing: pano');

    const link: Link = {
      id: null,
      name: pano.name,
      toId: pano.id,
      POV,
      targetPOV
    }

    const currentPano = this.getCurrentPano();
    
    currentPano.links.add(link.id, link);
    this._addLink(link);
  }

// ---------------------------------------- PRIVATE ----------------------------------------------------------------------------
  private _init(): void {
    this._processTour();
    this._initViewer();
    this._setListeners();
  }

  private _initViewer(): void {
    const params: PannellumOpts = {
      title: this._tour.name,
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

  private _processPanos(): void {
    this._panos = new Hashtable(this._tour.photoSpheres.map((photoSphere) => {
      return {
        id: photoSphere.id,
        name: photoSphere.name,
        links: new Hashtable(photoSphere.links.map(this._transformToLink.bind(this))),
        url: photoSphere.link,
        POV: photoSphere.POV,
        infoElements: new Hashtable(photoSphere.infoElements)
      }
    }));

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

  private _onClick(): void {

  }

  private _onLoadPano(id): void {
    console.log('sceneId: ', this.getCurrentPano());
    this._loaded = true;
    this._setLinks();
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
    return {
      id: link.id,
      POV: link.POV,
      toId: link.toPhotoSphereId,
      name: link.name,
      targetPOV: link.targetPOV
    }
  }

  private _transformToPannellumLink(link: Link): PannellumLink {
    return {
      id: link.id,
      pitch: link.POV.pitch,
      yaw: link.POV.yaw,
      type: 'scene',
      sceneId: link.toId,
      text: link.name,
      targetPitch: link.targetPOV.pitch,
      targetYaw: link.targetPOV.yaw,
    }
  }

  private _transformToPannellumPano(pano: Pano): PannellumPano {
    let pitch, yaw;

    if(pano.POV) {
      pitch = pano.POV.pitch;
      yaw = pano.POV.yaw;
    }

    return {
      id: pano.id,
      title: pano.name,
      type: 'equirectangular',
      panorama: pano.url,
      yaw,
      pitch
    };
  }

  destroy() {
    this._viewer.destroy();
  }
}
