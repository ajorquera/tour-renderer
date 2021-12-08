import tour from '../mockData/single-pano.json'
import TourRenderer from '../../../src/TourRenderer'

export default {
	tour: tour,
	name: 'single-pano',
	init: function() {
		let viewer = new TourRenderer(tour, '#single-pano .viewer');
	}
}