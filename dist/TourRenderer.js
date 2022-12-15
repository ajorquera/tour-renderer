'use strict';

var jsxRuntime = require('react/jsx-runtime');
require('pannellum');
var preact = require('preact');
var hooks = require('preact/hooks');

const generateId = () => {
  return new Date().valueOf().toString();
};

class Defer {
  constructor() {
    const promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    this.promise = promise;
  }
}

const useToggle = (initVal) => {
  const [val, setVal] = hooks.useState(initVal);
  const toggleFn = hooks.useCallback((force) => {
    if (typeof force === "boolean") {
      setVal(force);
    } else {
      setVal(!val);
    }
  }, []);
  return [val, toggleFn];
};

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const styles = {
  container: {
    borderRadius: "5%",
    backgroundColor: "rgba(0,0,0,.7)",
    color: "white",
    padding: "5px 10px",
    margin: 0,
    maxWidth: 400
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    margin: 0,
    overflow: "hidden"
  },
  description: {
    margin: 0,
    marginTop: 10
  },
  button: {
    backgroundColor: "transparent",
    color: "white",
    borderRadius: "15%",
    borderStyle: "outset",
    padding: "2px 5px"
  },
  editContainer: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center"
  }
};
const InfoElement = ({ title, description, isEdit, sanitized, id }) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const elementRef = hooks.useRef(null);
  const onClickContainer = hooks.useCallback(() => {
    if (isOpen === false) {
      toggleIsOpen(true);
      dispatchEvent("TOGGLE_INFO_ELEMENT");
    }
  }, []);
  const contentProps = hooks.useMemo(() => {
    let props;
    if (sanitized) {
      props = {
        dangerouslySetInnerHTML: { __html: description }
      };
    } else {
      props = { children: description };
    }
    return props;
  }, [sanitized, description]);
  const dispatchEvent = hooks.useCallback((eventName, data) => {
    const event = new CustomEvent(eventName, { bubbles: true, detail: __spreadValues({ id }, data) });
    elementRef.current.dispatchEvent(event);
  }, [elementRef.current, id]);
  const onClickClose = hooks.useCallback((e) => {
    e.stopPropagation();
    toggleIsOpen(false);
    dispatchEvent("TOGGLE_INFO_ELEMENT");
  }, []);
  const saveElement = hooks.useCallback((e) => {
    e.stopPropagation();
    const container = elementRef.current;
    const title2 = container.querySelector("h4").textContent;
    const description2 = container.querySelector("p").textContent;
    toggleIsOpen(false);
    dispatchEvent("UPDATE_INFO_ELEMENT", { title: title2, description: description2 });
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref: elementRef, style: styles.container, onClick: onClickContainer, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { style: styles.titleContainer, children: [
      /* @__PURE__ */ jsxRuntime.jsx("h4", { contentEditable: isOpen && isEdit, style: styles.title, children: title }),
      isOpen && /* @__PURE__ */ jsxRuntime.jsx("button", { style: styles.button, onClick: onClickClose, children: "X" })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("p", __spreadValues({ contentEditable: isEdit, style: __spreadProps(__spreadValues({}, styles.description), { display: isOpen ? "block" : "none" }) }, contentProps)),
    isEdit && isOpen && /* @__PURE__ */ jsxRuntime.jsxs("div", { style: styles.editContainer, children: [
      /* @__PURE__ */ jsxRuntime.jsx("button", { onClick: saveElement, style: styles.button, children: "Guardar" }),
      "\xA0",
      /* @__PURE__ */ jsxRuntime.jsx("button", { onClick: () => dispatchEvent("DELETE_INFO_ELEMENT"), style: styles.button, children: "Borrar" })
    ] })
  ] });
};

class HashTable {
  constructor(array = [], prop = "id") {
    this._prop = prop;
    this._array = array;
    this.table = this._arrayToDict(this._array);
  }
  add(item) {
    this._array.push(item);
    this.table[item[this._prop]] = item;
    return this;
  }
  delete(item) {
    if (typeof item === "string" || typeof item === "number") {
      item = this.get(item);
    }
    if (item) {
      this._array.forEach((arrayItem, i) => {
        if (arrayItem[this._prop] === item[this._prop]) {
          this._array.splice(i, 1);
        }
      });
      return delete this.table[item[this._prop]];
    }
    return false;
  }
  get(index = 0) {
    return index ? this.table[index] : this._array[index];
  }
  get length() {
    return this._array.length;
  }
  get array() {
    return this._array;
  }
  _arrayToDict(array) {
    return array.reduce((obj, item) => {
      obj[item[this._prop]] = item;
      return obj;
    }, {});
  }
}

const _TourRenderer = class {
  constructor(tour, dom, options = {}) {
    this._classPrefix = "tr";
    this._onUpdateInfoListeners = [];
    this._onDeleteInfoListeners = [];
    this._tour = tour;
    this._options = Object.assign({}, _TourRenderer.DEFAULTS, options);
    if (typeof dom === "string") {
      dom = document.querySelector(dom);
    }
    this._validateTour();
    this._dom = dom;
    this._onLoad = options.onLoad;
    this._init();
  }
  get panos() {
    return this._panos;
  }
  destroy() {
    this._viewer.destroy();
  }
  addInfoUpdateListener(fn) {
    this._onUpdateInfoListeners.push(fn);
  }
  addInfoDeleteListener(fn) {
    this._onDeleteInfoListeners.push(fn);
  }
  selectPOVInViewer() {
    if (!this._isLoaded) {
      return Promise.reject(new Error("viewer not loaded"));
    }
    this._isSelectingPOV = true;
    this._selectPOVDeferred = new Defer();
    this.toggleControls(false);
    this._dom.classList.add(this._createClass("selecting-pov"));
    this._selectPOVDeferred.promise.then(() => {
      this.toggleControls(true);
      this._dom.classList.remove(this._createClass("selecting-pov"));
    });
    return this._selectPOVDeferred.promise;
  }
  toggleControls(show) {
    this._dom.querySelector(".pnlm-controls-container").classList.toggle(this._createClass("hide"), !show);
    this._dom.querySelector(".pnlm-panorama-info").classList.toggle(this._createClass("hide"), !show);
  }
  addDOM(elm) {
    elm.classList.add(_TourRenderer.CLASSES.DOM_ELEMENT);
    this._dom.appendChild(elm);
  }
  deleteDOM(elm) {
    this._dom.removeChild(elm);
  }
  addOverlay(elm, pov) {
    const params = {
      id: generateId(),
      pitch: pov.pitch,
      yaw: pov.yaw,
      type: "info",
      createTooltipFunc: (divParent) => {
        divParent.appendChild(elm);
      }
    };
    this._viewer.addHotSpot(params);
    return params;
  }
  deleteOverlay(item) {
    let index;
    if (typeof item === "object") {
      index = item.id;
    } else {
      index = item;
    }
    this._viewer.removeHotSpot(index);
  }
  forceToRender() {
    this._viewer.setPitch(this._viewer.getPitch() + 0.1);
  }
  addInfoElement(obj) {
    let { id, title, description, POV: POV2 } = obj;
    id = id || generateId();
    const pano = this.getPano();
    const info = {
      id,
      POV: POV2,
      title,
      description,
      infoElement: /* @__PURE__ */ jsxRuntime.jsx(InfoElement, { isEdit: this._options.editMode, title, description, id })
    };
    pano.infoElements.add(info);
    this._addInfoToViewer(info);
  }
  deleteInfoElement(elem) {
    const pano = this.getPano();
    if (typeof elem === "string") {
      elem = pano.infoElements.get(elem);
    }
    pano.infoElements.delete(elem);
    this.deleteOverlay(elem);
  }
  getPano(id = this._viewer.getScene()) {
    return this._panos.get(id);
  }
  setPano(pano) {
    let id = typeof pano === "object" ? pano.id : pano;
    return this._viewer.loadScene(id);
  }
  getCurrentPano() {
    return this.getPano();
  }
  getPOV() {
    const pov = {
      pitch: 0,
      yaw: 0
    };
    if (this._viewer) {
      pov.yaw = this._viewer.getYaw();
      pov.pitch = this._viewer.getPitch();
    }
    return pov;
  }
  deleteLink(link) {
    const pano = this.getPano();
    if (typeof link === "string") {
      link = pano.links.get(link);
    }
    pano.links.delete(link.id);
    this._viewer.removeHotSpot(link.id);
    this.forceToRender();
  }
  getLink(id) {
    return this.getPano().links.get(id);
  }
  createLinkTo(pano, pov = this.getPOV(), targetPOV = { pitch: 0, yaw: 0 }, id) {
    if (!this._isLoaded)
      return console.info("Viewer not loaded");
    if (typeof pano !== "object") {
      pano = this.getPano(pano);
    }
    if (!pano)
      throw new Error("parameter missing: pano");
    const link = {
      POV: pov,
      id: id || generateId(),
      targetPOV,
      to: pano
    };
    const currentPano = this.getCurrentPano();
    currentPano.links.add(link);
    this._addLink(link);
    const event = new CustomEvent("newLink", { detail: link });
    this._dom.dispatchEvent(event);
    return link;
  }
  isFirstPano() {
    return this.getCurrentPano() === this._first;
  }
  setFirstPano(pano) {
    this._first = pano;
  }
  _init() {
    this._processTour();
    this._initViewer();
    this._setListeners();
  }
  _initViewer() {
    const params = {
      autoLoad: this._options.autoLoad,
      autoRotate: this._options.autoRotate,
      showControls: this._options.showControls,
      keyboardZoom: this._options.keyboardZoom,
      mouseZoom: this._options.mouseZoom,
      disableKeyboardCtrl: true,
      default: {
        firstScene: this._first.id,
        pitch: this._first.POV.pitch,
        sceneFadeDuration: 1e3,
        yaw: this._first.POV.yaw
      },
      hfov: 120,
      scenes: this._pannellumPanos.table
    };
    if (this._preview) {
      params.preview = this._preview.url;
    }
    this._viewer = pannellum.viewer(this._dom, params);
  }
  _createClass(className) {
    return `${this._classPrefix}-${className}`;
  }
  _processPanos() {
    const panos = this._tour.panos || this._tour.photoSpheres;
    this._panos = new HashTable(panos.map((photoSphere) => {
      return {
        id: photoSphere.id,
        infoElements: new HashTable(photoSphere.infoElements),
        name: photoSphere.name,
        POV: photoSphere.POV,
        url: photoSphere.link
      };
    }));
    panos.forEach((photoSphere) => {
      const pano = this._panos.get(photoSphere.id);
      photoSphere.links = photoSphere.links || [];
      photoSphere.infoElements = photoSphere.infoElements || [];
      pano.links = new HashTable(photoSphere.links.map(this._transformToLink.bind(this)));
      pano.infoElements = new HashTable(photoSphere.infoElements.map(this._transformToInfo.bind(this)));
    });
    this._pannellumPanos = new HashTable(this._panos.array.map(this._transformToPannellumPano.bind(this)));
  }
  _validateTour() {
    const panos = this._tour && (this._tour.panos || this._tour.photoSpheres);
    if (!panos || !panos.length) {
      throw new Error(_TourRenderer.ERRORS.INVALID_TOUR);
    }
    const image = this._tour.images && this._tour.images[0];
    if (image) {
      this._preview = { url: image.link, name: image.name, id: image.id };
    }
    if (!this._tour.POV) {
      this._tour.POV = {
        yaw: 0,
        pitch: 0
      };
    }
  }
  _processTour() {
    this._name = this._tour.name;
    this._description = this._tour.description;
    this._processPanos();
    if (this._tour.firstPhotoSphereId) {
      this._first = this._panos.get(this._tour.firstPhotoSphereId);
    } else {
      this._first = this._panos.get();
    }
    this._first.POV = this._tour.POV;
  }
  _setListeners() {
    this._viewer.on("load", this._onLoadPano.bind(this));
    this._viewer.on("mousedown", this._onClick.bind(this));
    this._viewer.on("touchstart", this._onClick.bind(this));
    this._dom.addEventListener("TOGGLE_INFO_ELEMENT", this.forceToRender.bind(this));
    this._dom.addEventListener("UPDATE_INFO_ELEMENT", this._updateInfoListener.bind(this));
    this._dom.addEventListener("DELETE_INFO_ELEMENT", this._deleteInfoListener.bind(this));
  }
  _deleteInfoListener(ev) {
    const data = ev.detail;
    this.deleteInfoElement(data.id);
    this._onDeleteInfoListeners.forEach((fn) => {
      fn(data);
    });
  }
  _updateInfoListener(ev) {
    const data = ev.detail;
    const info = this.getPano().infoElements.get(data.id);
    info.title = data.title;
    info.description = data.description;
    this._onUpdateInfoListeners.forEach((fn) => {
      fn(info);
    });
  }
  _onClick(mouseEvent) {
    if (!this._isSelectingPOV) {
      return;
    }
    const event = mouseEvent.targetTouches && mouseEvent.targetTouches[0] || mouseEvent;
    const coords = this._viewer.mouseEventToCoords(event);
    const pov = {
      pitch: coords[0],
      yaw: coords[1]
    };
    this._isSelectingPOV = false;
    this._selectPOVDeferred.resolve(pov);
    this._selectPOVDeferred = null;
  }
  _onLoadPano(id) {
    this._isLoaded = true;
    if (!this._options.noLinks) {
      this._setLinks();
    }
    this._setInfos();
    const event = new Event("load");
    this._dom.dispatchEvent(event);
    if (typeof this._onLoad === "function")
      this._onLoad();
  }
  _setLinks() {
    const links = this.getCurrentPano().links;
    links.array.forEach((link) => {
      this._addLink(link);
    });
  }
  _setInfos() {
    const infos = this.getPano().infoElements;
    infos.array.forEach((info) => {
      this._addInfoToViewer(info);
    });
  }
  _addInfoToViewer(info) {
    this._viewer.addHotSpot(this._transformToPannellumOverlay(info));
  }
  _addLink(link) {
    this._viewer.removeHotSpot(link.id);
    this._viewer.addHotSpot(this._transformToPannellumLink(link));
  }
  _transformToLink(link) {
    const pano = this._panos.get(link.toPhotoSphereId || link.toId);
    return {
      POV: link.POV,
      id: link.id,
      targetPOV: link.targetPOV,
      to: pano
    };
  }
  _transformToInfo(infoElement) {
    const { POV: POV2, id, name, description } = infoElement;
    return {
      title: name,
      description,
      POV: POV2,
      id,
      infoElement: /* @__PURE__ */ jsxRuntime.jsx(InfoElement, { isEdit: this._options.editMode, id, title: name, description })
    };
  }
  _transformToPannellumOverlay(info) {
    return {
      id: info.id,
      pitch: info.POV.pitch,
      yaw: info.POV.yaw,
      type: "info",
      cssClass: "n",
      createTooltipFunc: (divParent) => preact.render(info.infoElement, divParent)
    };
  }
  _transformToPannellumLink(link) {
    return {
      id: link.id,
      pitch: link.POV.pitch,
      sceneId: link.to && link.to.id,
      targetPitch: link.targetPOV.pitch,
      targetYaw: link.targetPOV.yaw,
      text: link.to && link.to.name,
      type: "scene",
      yaw: link.POV.yaw
    };
  }
  _transformToPannellumPano(pano) {
    const params = {
      id: pano.id,
      panorama: pano.url,
      type: "equirectangular"
    };
    if (!this._options.noTitle) {
      params.title = pano.name;
    }
    if (pano.POV) {
      params.pitch = pano.POV.pitch;
      params.yaw = pano.POV.yaw;
    }
    if (pano.links && pano.links.length) ;
    return params;
  }
};
let TourRenderer = _TourRenderer;
TourRenderer.EVENTS = Object.assign({
  UPDATE_INFO_ELEMENT: "UPDATE_INFO_ELEMENT",
  TOGGLE_INFO_ELEMENT: "TOGGLE_INFO_ELEMENT",
  DELETE_INFO_ELEMENT: "DELETE_INFO_ELEMENT"
}, {
  CREATE_INFO_ELEMENT: "CREATE_INFO_ELEMENT",
  CREATE_LINK: "CREATE_LINK",
  DELETE_LINK: "DELETE_LINK"
});
TourRenderer.CLASSES = {
  DOM_ELEMENT: "dom-element"
};
TourRenderer.ERRORS = {
  INVALID_TOUR: "The properties of the tour are not valid"
};
TourRenderer.DEFAULTS = {
  autoLoad: false,
  autoRotate: void 0,
  showControls: true
};
window.TourRenderer = TourRenderer;

module.exports = TourRenderer;
//# sourceMappingURL=TourRenderer.js.map
