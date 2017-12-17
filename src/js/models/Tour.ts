import Image from './Image'
import Pano from './Pano'

export default interface Tour {
  readonly id: number;
  firstPanoId: number;
  name: string;
  description: string;
  images: Image[];
  panos: Pano[]
}
