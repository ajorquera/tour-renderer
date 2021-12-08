import Image from './Image';
import Pano from './Pano';
import POV from './POV';

export default interface Tour {
	readonly id: string;
	readonly name: string;
	readonly description: string;
	readonly firstPhotoSphereId?: number | string;
	readonly POV?: POV;
	readonly photoSpheres: any[];
	readonly images: Image[];
}
