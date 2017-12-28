const tour = require('../mockData/multiple-pano.json')
import TourRenderer from '../tourRenderer/TourRenderer'

export default {
	tour: tour,
	name: 'multiple-pano',
	init: function() {
		let viewer = new TourRenderer(tour, '#multiple-pano .viewer');
	}
}