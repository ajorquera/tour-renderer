import Image from './Image';
import Pano from './Pano';
import POV from './POV';

export default interface Tour {
	readonly id: number;
	readonly name: string;
	readonly description: string;
	readonly firstPhotoSphereId?: number | string;
	readonly POV?: {pitch: number, yaw: number};
	readonly photoSpheres: object[];
	readonly images: object[];
}
