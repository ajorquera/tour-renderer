import Pano from './Pano';
import POV from './POV';

export default interface Link {
	readonly id: string;
	readonly to: Pano;
	readonly POV: POV;
	readonly targetPOV: POV;
}
