const tours = require('./mockData/tours.json')
import TourRenderer from './TourRenderer'
require('../less/style.less');

window.onload = function() {
  const singlePano = new TourRenderer(tours.singlePano, '#single-pano');
  const multiplePano = new TourRenderer(tours.multiplePano, '#multiple-pano');
}
