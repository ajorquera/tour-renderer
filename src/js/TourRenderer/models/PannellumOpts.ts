import PannellumPano from './PannellumPano';
import {Table} from './Hashtable';

export default interface PannellumOpts {
	title?: string;
	autoLoad?: boolean;
	autoRotate?: number;
	preview?: string;
	showControls?: boolean;
	showZoomCtrl?: boolean;
	keyboardZoom?: boolean;
	mouseZoom?: boolean;
	hfov?: number;
	scenes: Table<PannellumPano>;
	default?: {
		firstScene?: number;
		sceneFadeDuration?: number;
		yaw?: number;
		pitch?: number;
	};
}
