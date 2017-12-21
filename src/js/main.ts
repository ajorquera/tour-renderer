const fakeTour = require('./mockData/tour.json')
import TourRenderer from './TourRenderer'
require('../less/style.less');

window.onload = function() {
  const tourRenderer = new TourRenderer(fakeTour, '#single-pano');
}
