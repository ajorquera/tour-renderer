require('pannellum');
declare const pannellum: any;

import Tour from './models/Tour'
import Pano from './models/Pano'
import Image from './models/Image'
import Link from './models/Link'
import Hashtable, { Table } from './models/Hashtable'

export default class TourRenderer {
  private readonly _tour            : Tour;
  private          _viewer         : any;
  private          _dom            : Element;

  private          _panos          : Hashtable<Pano>;
  private          _links          : Hashtable<Link>
  private          _first          : Pano;
  private          _preview        : Image;

  private          _pannellumPanos : Hashtable<PannellumPano>;
  private          _pannellumLinks : Hashtable<PannellumLink>;

  constructor(tour: Tour, dom: string | Element) {
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

  private _init(): void {
    this._processTour();
    this._initViewer();
    this._setListeners();
  }

  private _initViewer(): void {
    const params: pannellumOpts = {
      title: this._tour.name,
      autoLoad: false,
      preview: this._tour.images[0].link,
      showControls: true,
      scenes: this._pannellumPanos.table,
      default: {
        firstScene: this._tour.firstPanoId ,
        sceneFadeDuration: 1000,
        yaw: 0,
        pitch: 0
      }
    };

    this._viewer = pannellum.viewer(this._dom, params);
  }

  private _processPanos(): void {
    this._pannellumPanos = new Hashtable(this._tour.panos.map(this._transformToPannellumPano.bind(this)));
  }

  private _processLinks(): void {
    this._links = new Hashtable(this._tour.links.map(this._transformToLink.bind(this)));
  }

  private _processTour(): void {
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

  private _onLoadPano(): void {

  }

  private _setLinks(): void {

  }
  private _transformToLink(link: Link): PannellumLink {
    return {
      id: number,
      pitch: number,
      yaw: number,
      type: number,
      sceneId: number,
      text: number,
      targetPitch: number,
       targetYaw: number,
    }
  }

  private _transformToPannellumPano(pano: Pano): PannellumPano {
    let pitch, yaw;

    if(this._tour.firstPanoId === pano.id && this._tour.POV) {
      pitch = this._tour.POV.pitch;
      yaw = this._tour.POV.yaw;
    }

    return {
      id: pano.id,
      title: pano.name,
      type: 'equirectangular',
      panorama: pano.link,
      yaw,
      pitch
    };
  }

  destroy() {
    this._viewer.destroy();
  }
}

interface PannellumPano {
  id: number,
  title: string,
  type: string,
  panorama: string,
  yaw: number,
  pitch: number
}

interface PannellumLink {
  readonly id: number,
  readonly pitch: number,
  readonly yaw: number,
  readonly type: number,
  readonly sceneId: number,
  readonly text: number,
  readonly targetPitch: number,
  readonly targetYaw: number,
}

interface pannellumOpts {
  title: string;
  autoLoad?: boolean;
  preview?: string;
  showControls?: boolean;
  scenes: Table<PannellumPano>,
  default?: {
    firstScene?: number;
    sceneFadeDuration?: number;
    yaw?: number;
    pitch?: number;
  }
}
