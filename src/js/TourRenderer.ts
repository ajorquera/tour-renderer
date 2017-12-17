require('pannellum');
declare const pannellum: any;

import Tour from './models/Tour'
import Pano from './models/Pano'

export default class TourRenderer {
  private _tour: Tour;
  private _viewer: any;
  private _dom: Element;
  private _pannellumPanos: PannellumPano[];

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

    this._pannellumPanos = this._tour.panos.map(this._transformToPano);

    const params: pannellumOpts = {
      title: this._tour.name,
      autoLoad: false,
      preview: true,
      showControls: true,
      scenes: this._pannellumPanos,
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

  private _transformToPano(pano: Pano): PannellumPano {
    return {
      id: pano.id,
      title: pano.name,
      type: 'equirectangular',
      panorama: pano.url.href
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
  preview?: boolean;
  showControls?: boolean;
  scenes: PannellumPano[],
  default?: {
    firstScene?: number;
    sceneFadeDuration?: number;
    yaw?: number;
    pitch?: number;
  }
}
