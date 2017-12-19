require('pannellum');
declare const pannellum: any;

import Tour from './models/Tour'
import Pano from './models/Pano'
import Hashtable, { Table } from './models/Hashtable'

export default class TourRenderer {
  private _tour: Tour;
  private _viewer: any;
  private _dom: Element;
  private _pannellumPanos: Hashtable<PannellumPano>;

  constructor(tour: Tour, dom: string | Element) {
    this._tour = tour;

    if(typeof dom === 'string') {
      dom = document.querySelector(dom);
    }

    this._dom = dom;
    this._init();
  }

  getPano(id: number): Pano | null {
    let panoToReturn = null;
    const panos = this._tour.panos;
    for(let i = 0; i < panos.length; i++) {
      const pano = panos[i];
      if(pano.id === id) {
        panoToReturn = pano;
        break;
      }
    }
    return panoToReturn;
  }

  private _init(): void {

    this._pannellumPanos = new Hashtable(this._tour.panos.map(this._transformToPannellumPano));

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
    this._setListeners();
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

  private _transformToPannellumPano(pano: Pano): PannellumPano {
    return {
      id: pano.id,
      title: pano.name,
      type: 'equirectangular',
      panorama: pano.link
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
  panorama: string
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
