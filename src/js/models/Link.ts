import POV from './POV'

export default interface Link {
  readonly id: number;
  readonly toId: number;
  readonly panoId: number;
  readonly POV: POV;
  readonly targetPOV: POV
}
