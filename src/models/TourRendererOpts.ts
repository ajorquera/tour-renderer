export default interface TourREndererOpts {
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
