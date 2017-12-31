import POV from './POV'
import Pano from './Pano'

export default interface Link {
  readonly id: number;
  readonly to: Pano;
  readonly POV: POV;
  readonly targetPOV: POV
}
