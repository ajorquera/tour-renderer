import Tour from './models/Tour'

export const arrayToHash = function(array: object[], prop: string = 'id'): object {
  return array.reduce((obj, item) => {
    obj[item[prop]] = item;
    return obj
  }, {});
};

export const transformApiTourToPannellum = function(tour: any): Tour {
  tour.firstPanoId = tour.firstPhotoSphereId;
  tour.panos = tour.photoSpheres;
  tour.panos.forEach((pano) => {
    pano.url = new URL(pano.link);
  });
  return tour;
}

export default {
  arrayToHash
}
