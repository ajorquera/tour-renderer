import Image from './Image'
import Pano from './Pano'
import POV from './POV'

export default interface Tour {
  readonly id: number;
  firstPanoId?: number;
  name: string;
  description: string;
  POV?: POV;
  images?: Image[];
  panos?: Pano[]
}
