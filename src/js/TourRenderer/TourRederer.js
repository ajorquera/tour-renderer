require('pannellum')

const helpers = {
    arrayToHash: function(array, prop) {
        prop = prop || 'id';

        return array.reduce((obj, item) => {
            obj[item[prop]] = item;
            return obj
        }, {});
    }
};

/**
* @class
*/
class TourRenderer {
    constructor(opts) {
        opts = opts || {};

        this._setDefaultValues(opts);

        if(opts.panos) this.setPanos(opts.panos);

        this.setFirst(opts.firstPano);
    }

    setFirst(id, POV) {
        if(this._panos[id]) {
            this._firstPano = id.toString();
        } else {
            this._firstPano = this.getPano();
        }

        this._firstPanoPOV = POV || this.getPOV();
    }

    init(DOMElement) {
        if(DOMElement instanceof Element === false) {
            throw new Error('You must provide a dom element to initialize');
        }

        this._DOMElement = DOMElement;

        let params = {
            default: {
                firstScene: this.getFirstPano(),
                sceneFadeDuration: 1000,
                yaw: this._firstPanoPOV.yaw,
                pitch: this._firstPanoPOV.pitch,
            },
            showControls: this._showControls,
            autoLoad: true,
            scenes: this._panos,
            autoLoad: this._autoLoad,
            preview: this._preview
        };

        const firstPano = this._panos[this.getFirstPano()];

        //check for multiresolution
        if(firstPano && firstPano.config) {
            params = Object.assign(params, {
                "type": "multires",
                "multiRes": {
                    "basePath": firstPano.panorama,
                    "path": "%l/%s%y_%x",
                    "fallbackPath": "/fallback/%s",
                    "extension": "jpg",
                    "tileResolution": firstPano.config.tileResolution,
                    "maxLevel": firstPano.config.zoomLevel,
                    "cubeResolution": firstPano.config.cubeResolution
                }
            });
        }

        this._panorama = pannellum.viewer(this._DOMElement, params);

        this._setListeners();
    }

    getFirstPano() {
        return this._firstPano || Object.keys(this._panos)[0];
    }

    getPOV() {
        let POV = {
            pitch: 0,
            yaw: 0
        };

        if(this._panorama) {
            POV.yaw = this._panorama.getYaw(),
            POV.pitch = this._panorama.getPitch()
        }

        return POV;
    }

    isFirstPano() {
        return this.getPano() === this.getFirstPano();
    }

    addDOM(domElement) {
        if(domElement instanceof Element === false) {
            throw new Error('Parameter must be  dom element');
        }

        this._DOMElement.appendChild(domElement);
    }

    removeDOM(domElement) {
        if(domElement instanceof Element === false) {
            throw new Error('Parameter must be  dom element');
        }

        this._DOMElement.removeChild(domElement);
    }

    setPanos(panos) {
        const that = this;

        panos = Array.isArray(panos) ? panos : [panos];

        //transform array into a hash table
        this._panos = panos.reduce((obj, item) => {
            obj[item.id] = that._transformToPano(item, panos);
            return obj
        },{});

        //TODO maybe find a better solution
        panos.forEach(pano => {
            const links = pano.links ? pano.links.map(that._transformToLink.bind(that)) : [];
            that._links[pano.id] = helpers.arrayToHash(links);
        })
    }

    addOverlay(overlayToChange) {
        this.removeOverlay();
        const overlay = TourRenderer.transformToOverlay(overlayToChange);

        this._panorama.addHotSpot(overlay);

        //we dont want objects keys like 'undefined'
        this._overlays[this.getPano()][overlay.id || ''] = overlay;
    }

    updateOverlay(idToFind, overlay) {
        const overlayFound = this._overlays[this.getPano()][idToFind];

        if(!overlayFound) {
            return ;
        }
        overlayFound.name = overlay.name || overlayFound.name

        if(overlay.POV) {
            const {yaw, pitch} = overlay.POV;

            overlayFound.yaw = yaw;
            overlayFound.pitch = pitch;
        }
    }

    getLink(id, isToId) {
        let link;
        const links = this._links[this.getPano()];

        if(isToId) {
            Object.keys(links).forEach(linkId => {
                if(links[linkId].sceneId === id) {
                    link = links[linkId];
                }
            });
        } else {
            link = links[id];
        }

        return link && {
            id: link.id,
            toId: link.sceneId,
            name: link.text
        }
    }

    getOverlays() {
        const overlays = this._overlays[this.getPano()] || {};
        return Object.keys(overlays).filter(key => !!key).map(key => {
            const {pitch, yaw, name, id} = overlays[key];
            return {
                id,
                name,
                POV: {
                    pitch,
                    yaw
                }
            }
        });
    }

    addLink(linkToAdd) {
        const link = this._transformToLink(linkToAdd);

        this._panorama.addHotSpot(link);
        this._links[this.getPano()][link.id] = link;
    }

    removeLink(id) {
        this._panorama.removeHotSpot(id);
        delete this._links[this.getPano()][id];
    }

    removeOverlay(id) {
        this._panorama.removeHotSpot(id);
        delete this._overlays[this.getPano()][id];
    }

    getDomElement() {
        return this._DOMElement;
    }

    forceToRender() {
        this._panorama.setYaw(this._panorama.getYaw());
    }

    setPano(panoId) {
        this._panorama.loadScene(panoId);
    }

    getPano() {
        return this._panorama && this._panorama.getScene().toString();
    }

    destroy() {
        this._panorama.destroy();
        this.domElement = null;
        this._panorama = null;
        this._firstPanoPOV = null;
        this._links = null;
        this._panos = null;
        this._overlays = null;

        this.onClick = null;
        this.onLoad = null;
    }

    _setDefaultValues(opts) {
        this._links = {};
        this._panos = {};
        this._overlays = {};
        this._firstPanoPOV = {}
        this._showTitle = typeof opts.showTitle === 'boolean' ? opts.showTitle : true;
        this._showControls = typeof opts.showControls === 'boolean' ? opts.showControls : true;
        this._autoLoad = typeof opts.autoLoad === 'boolean' ? opts.autoLoad : true;
        this._preview = opts.preview;

        this.onClick = opts.onClick;
        this.onLoad = opts.onLoad;
    }

    _onLoad() {
        if(!this._panorama) return;

        const that = this;
        const links = this._links[this._panorama.getScene()];
        const overlays = this._overlays[this._panorama.getScene()];

        [links, overlays].forEach(hotSpot => {
            Object.keys(hotSpot).forEach(id => {
                that._panorama.addHotSpot(hotSpot[id]);
            });
        });

        this.onLoad && this.onLoad();
    }

    _onClick(mouseEvent) {
        const event = (mouseEvent.targetTouches && mouseEvent.targetTouches[0]) || mouseEvent

        const coords = this._panorama.mouseEventToCoords(event)

        const POV = {
            pitch: coords[0],
            yaw: coords[1]
        }

        this.onClick && this.onClick(POV, mouseEvent);
    }

    _setListeners() {
        this._panorama.on('load', this._onLoad.bind(this));
        this._panorama.on('mousedown', this._onClick.bind(this));
        this._panorama.on('touchstart', this._onClick.bind(this));
    }

    _transformToPano(pano, panos) {
        const {id, name, imgUrl, config} = pano

        if(!name || !id || !imgUrl) {
            throw new Error(`name, id and imageUrl are required parameters for panos`);
        }

        const overlays = pano.overlays ? pano.overlays.map(TourRenderer.transformToOverlay) : [];

        this._overlays[pano.id] = helpers.arrayToHash(overlays);

        return {
            "id": id,
            "title": this._showTitle ? name : '',
            "type": "equirectangular",
            "panorama": imgUrl,
            config
        }
    }

    _transformToLink(link) {
        const {POV, toId, id} = link
        let targetPOV = link.targetPOV || {};

        if(!POV || !toId) {
            throw new Error(`POV and toId are required parameters for links in panos`);
        }

        let title = this._showTitle ? this._panos[toId] && this._panos[toId].title : undefined;
        title = title || '';

        return {
            id,
            pitch: POV.pitch,
            yaw: POV.yaw,
            type: 'scene',
            sceneId: toId,
            text: title,
            targetPitch: targetPOV.pitch,
            targetYaw: targetPOV.yaw
        }
    }
}

TourRenderer.transformToOverlay = function(overlay) {
    const {POV, id, div, name} = overlay

    return {
        id,
        name,
        type: 'info',
        pitch: POV.pitch,
        yaw: POV.yaw,
        cssClass: 'panorama-container',
        createTooltipFunc: (divParent) => divParent.appendChild(div)
    }
};

export default TourRenderer;
