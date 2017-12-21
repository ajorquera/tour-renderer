import Image from './Image'
import Pano from './Pano'
import POV from './POV'

export default interface Tour {
  readonly id           : number;
  readonly name         : string;
  readonly description  : string;
  readonly firstPano    : Pano;
  readonly preview?     : Image;
  readonly panos?       : Pano[];
}
