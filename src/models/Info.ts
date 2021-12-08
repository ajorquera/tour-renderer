import InfoElement from './InfoElement';
import POV from './POV';

export default interface Info {
	POV: POV;
	id: string;
	title: string;
	description: string;
	infoElement: any;
}
