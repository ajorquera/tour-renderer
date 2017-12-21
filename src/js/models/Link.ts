import POV from './POV'

export default interface Link {
  readonly id: number;
  readonly name: string;
  readonly toId: number;
  readonly POV: POV;
  readonly targetPOV: POV
}
