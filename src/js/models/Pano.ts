import Image from './Image'
import Link from './Link'
import POV from './POV'
import InfoElement from './InfoElement'

export default interface Pano extends Image {
  infoElements: InfoElement[];
  links: Link[]
  POV: POV;
}
