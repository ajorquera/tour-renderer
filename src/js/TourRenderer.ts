

export default class TourRender {
  constructor() {

  }

  init() {

  }

  setFirst() {

  }

  setPOV() {

  }

  createInfoElem() {

  }

  createLink() {

  }

  removeLink() {

  }

  destroy() {

  }

  private onLoad() {

  }
}

const helpers = {
  arrayToHash: function(array, prop) {
    prop = prop || 'id';

    return array.reduce((obj, item) => {
      obj[item[prop]] = item;
      return obj
    }, {});
  }
}


interface InfoElement {
  readonly id: number;
  title: string;
  content: string;
}

interface POV {
  readonly id: number;
  pitch: number;
  yaw: number;
}

interface Link {
  readonly id: number;
  readonly toId: number;
  readonly panoId: number;
}

interface Image {
  readonly id: number;
  link: Url;
  name: string;
}

interface Tour {
  readonly id: number;
  firstPanoId: number;
  name: string;
  description: string;
  images: Image[];
  panos: Pano[]
}

interface Pano extends Image {
  infoElements: InfoElement[];
  links: Link[]
}

class Url {

}
