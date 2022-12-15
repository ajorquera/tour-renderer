interface Image {
    readonly id: string;
    readonly url?: string;
    readonly name?: string;
}

interface POV$1 {
    pitch: number;
    yaw: number;
}

interface Table<T> {
    [index: string]: T;
}
declare class HashTable<T> {
    readonly table: Table<T>;
    private readonly _array;
    private readonly _prop;
    constructor(array?: T[], prop?: string);
    add(item: T): HashTable<T>;
    delete(item: string | number | T): boolean;
    get(index?: string | number): T;
    get length(): number;
    get array(): T[];
    private _arrayToDict;
}

interface Info {
    POV: POV$1;
    id: string;
    title: string;
    description: string;
    infoElement: any;
}

interface Pano extends Image {
    infoElements?: HashTable<Info>;
    links?: HashTable<Link>;
    POV?: POV$1;
}

interface Link {
    readonly id: string;
    readonly to: Pano;
    readonly POV: POV$1;
    readonly targetPOV: POV$1;
}

interface PannellumOverlay {
    readonly id: string;
    readonly pitch: number;
    readonly yaw: number;
    readonly type: string;
    readonly cssClass?: string;
    readonly createTooltipFunc: (divParent: HTMLElement) => void;
}

interface Tour {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly firstPhotoSphereId?: number | string;
    readonly POV?: POV$1;
    readonly photoSpheres: any[];
    readonly images: Image[];
}

interface TourREndererOpts {
    autoLoad?: boolean;
    autoRotate?: number;
    showControls?: boolean;
    keyboardZoom?: boolean;
    mouseZoom?: boolean;
    noTitle?: boolean;
    editMode?: boolean;
    noLinks?: boolean;
    onLoad?: () => {};
}

declare class TourRenderer {
    static EVENTS: Table<string>;
    static CLASSES: Table<string>;
    static ERRORS: Table<string>;
    static readonly DEFAULTS: object;
    private readonly _classPrefix;
    private readonly _tour;
    private _viewer;
    private _dom;
    private _isLoaded;
    private _options;
    private _panos;
    private _name;
    private _description;
    private _first;
    private _preview;
    private _pannellumPanos;
    private _selectPOVDeferred;
    private _isSelectingPOV;
    private _onLoad;
    private _onUpdateInfoListeners;
    private _onDeleteInfoListeners;
    get panos(): HashTable<Pano>;
    constructor(tour: Tour, dom: string | Element, options?: TourREndererOpts);
    destroy(): void;
    addInfoUpdateListener(fn: any): void;
    addInfoDeleteListener(fn: any): void;
    selectPOVInViewer(): Promise<POV$1>;
    toggleControls(show?: boolean): void;
    addDOM(elm: HTMLElement): void;
    deleteDOM(elm: HTMLElement): void;
    addOverlay(elm: any, pov: POV$1): PannellumOverlay;
    deleteOverlay(item: Info | string | number): void;
    forceToRender(): void;
    addInfoElement(obj: {
        id?: string;
        description?: string;
        title?: string;
        POV?: POV$1;
        isEdit?: boolean;
    }): void;
    deleteInfoElement(elem: Info | string): void;
    getPano(id?: string): Pano | null;
    setPano(pano: Pano | string): any;
    /**
     * @deprecated Use get pano
     */
    getCurrentPano(): Pano;
    getPOV(): POV$1;
    deleteLink(link: Link | string): void;
    getLink(id: any): Link;
    createLinkTo(pano: Pano | string, pov: POV$1, targetPOV: POV$1, id: string): Link | void;
    isFirstPano(): boolean;
    setFirstPano(pano: Pano): void;
    private _init;
    private _initViewer;
    private _createClass;
    private _processPanos;
    private _validateTour;
    private _processTour;
    private _setListeners;
    private _deleteInfoListener;
    private _updateInfoListener;
    private _onClick;
    private _onLoadPano;
    private _setLinks;
    private _setInfos;
    private _addInfoToViewer;
    private _addLink;
    private _transformToLink;
    private _transformToInfo;
    private _transformToPannellumOverlay;
    private _transformToPannellumLink;
    private _transformToPannellumPano;
}

type Industry = '3d-design' | 'personal' | 'real-state' | 'other' | 'hospitality';
interface FirestoreUser {
    id: string;
    country: string;
    email: string;
    industry: Industry;
    lastUpdate: string;
    registerDate: string;
    tourCount: number;
    name: string;
    planId: string;
    acceptNotifications: boolean;
    stripeCustomerId: string;
}
interface Plan {
    id: string;
    benefits: string[];
    icon: string;
    label: string;
    maxTourCount: number;
    stripePriceCodeMonth: string;
    stripePriceCodeYear: string;
    monthlyPrice: number;
    yearlyPrice: number;
}
interface Panorama {
    fileUrl: string;
    id: string;
    name: string;
    links: {
        POV: POV;
        targetPOV: POV & {
            toId: string;
        };
    }[];
}
interface POV {
    pich: number;
    yaw: number;
}
interface FirestoreTour {
    coverPicUrl: string;
    dateCreated: string;
    dateUpdated: string;
    description: string;
    hotness: number;
    likes: number;
    views: number;
    ownerId: string;
    panoramas: Panorama[];
    startPanorama: {
        POV: POV;
    };
}

export { FirestoreTour, FirestoreUser, Industry, Panorama, Plan, TourRenderer as default };
