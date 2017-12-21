require('pannellum');
declare const pannellum: any;

import Tour from './models/Tour'
import Pano from './models/Pano'
import Image from './models/Image'
import PannellumPano from './models/PannellumPano'
import PannellumLink from './models/PannellumLink'
import PannellumOpts from './models/PannellumOpts'
import Link from './models/Link'
import Hashtable, { Table } from './models/Hashtable'

export default class TourRenderer {
  private readonly _tour           : any;
  private          _viewer         : any;
  private          _dom            : Element;

  private          _panos          : Hashtable<Pano>;
  private          _first          : Pano;
  private          _preview        : Image;

  private          _pannellumPanos : Hashtable<PannellumPano>;
  private          _pannellumLinks : Hashtable<PannellumLink[]>;

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

  getCurrentPano(): string {
      return this._viewer && this._viewer.getScene();
  }

  private _init(): void {
    this._processTour();
    this._initViewer();
    this._setListeners();
  }

  private _initViewer(): void {
    const params: PannellumOpts = {
      title: this._tour.name,
      autoLoad: false,
      preview: this._preview.url,
      showControls: true,
      scenes: this._pannellumPanos.table,
      default: {
        firstScene: this._first.id,
        sceneFadeDuration: 1000,
        yaw: 0,
        pitch: 0
      }
    };

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

    this._first = this._panos.get(this._tour.firstPhotoSphereId);
    this._first.POV = this._tour.POV;

    this._pannellumPanos = new Hashtable(this._panos.array().map(this._transformToPannellumPano.bind(this)));
  }

  private _processLinks(): void {
    this._pannellumLinks = new Hashtable<PannellumLink[]>();

    this._panos.array().forEach((pano) => {
      this._pannellumLinks.add(pano.id, pano.links.array().map(this._transformToPannellumLink.bind(this)));
    })
  }

  private _processTour(): void {
    const image = this._tour.images && this._tour.images[0];
    this._preview = {url: image.link, name: image.name, id: image.id};

    this._processPanos();
    this._processLinks();
  }

  private _setListeners(): void {
    this._viewer.on('load', this._onLoadPano.bind(this));
    this._viewer.on('mousedown', this._onClick.bind(this));
    this._viewer.on('touchstart', this._onClick.bind(this));
  }

  private _onClick(): void {

  }

  private _onLoadPano(id): void {
    this._setLinks();
  }

  private _setLinks(): void {
    const id = this.getCurrentPano();

    const links = this._pannellumLinks.get(id);
    links.forEach((link) => {
      this._viewer.addHotSpot(link);
    });
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
