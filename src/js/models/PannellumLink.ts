export default interface PannellumLink {
  readonly id: number;
  readonly pitch: number;
  readonly yaw: number;
  readonly type: string;
  readonly sceneId: number;
  readonly text: string;
  readonly targetPitch: number;
  readonly targetYaw: number;
}
