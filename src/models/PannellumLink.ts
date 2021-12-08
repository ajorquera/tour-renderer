export default interface PannellumLink {
	readonly id: string;
	readonly pitch: number;
	readonly yaw: number;
	readonly type: string;
	readonly sceneId: string;
	readonly text: string;
	readonly targetPitch: number;
	readonly targetYaw: number;
}
