const tours = require('./mockData/tours.json')
import TourRenderer from './TourRenderer'
require('../less/style.less');

window.onload = function() {
  let viewer;
  viewer = new TourRenderer(tours.singlePano, '#single-pano');
  viewer = new TourRenderer(tours.multiplePanos, '#multiple-pano');
  viewer = new TourRenderer(tours.linkManipulation, '#link-manipulation');

  document.querySelector('#create-link').addEventListener('click', (ev) => {
    const panoToLink = viewer.panos[1717];
    viewer.setLinkTo(panoToLink);
  });
}
