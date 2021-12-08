import * as tour from '../mockData/multiple-pano.json';
import TourRenderer from '../../../src/TourRenderer';

export default {
	tour,
	name: 'multiple-pano',
	init: (dom) => {
		const viewer = new TourRenderer(<any> tour, '#multiple-pano .viewer');
	}
};
