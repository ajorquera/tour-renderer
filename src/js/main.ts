const fakeTour = require('./mockData/tour.json')
import TourRenderer from './TourRenderer'
import {transformApiTourToPannellum} from './helpers'

window.onload = function() {
  const tour = transformApiTourToPannellum(fakeTour);

  const tourRenderer = new TourRenderer(tour, '#single-pano');
}
