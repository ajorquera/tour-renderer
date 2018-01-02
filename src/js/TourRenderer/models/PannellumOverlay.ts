export default interface PannellumOverlay {
	readonly id: string;
	readonly pitch: number;
	readonly yaw: number;
	readonly type: string;
	readonly cssClass: string;
	readonly createTooltipFunc: (divParent: HTMLElement) => void;
}
