import Image from './Image';
import Link from './Link';
import POV from './POV';
import Hashtable from './Hashtable';
import InfoElement from './Info';

export default interface Pano extends Image {
	infos?: Hashtable<InfoElement>;
	links?: Hashtable<Link>;
	POV?: POV;
}
