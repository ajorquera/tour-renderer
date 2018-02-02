import TourRenderer from '../src/js/TourRenderer/TourRenderer.tsx'

describe('single tour', () => {
	let tour;
	let domElement;
	const domId = 'viewer';

	beforeEach(() => {
		domElement = document.createElement('DIV');
		domElement.setAttribute('id', domId);

		tour = {
			id: 1,
			name: 'Here is the title of the tour',
			description: 'Here goes the description',
			photoSpheres: [{
				id: 1,
				name: 'First panorama',
				link: 'url'
			}]
		}
	});

	it('should crear a tour with it\'s a css selector', () => {
		document.body.appendChild(domElement);
		const viewer = new TourRenderer(tour, `#${domId}`);

		expect(viewer instanceof TourRenderer).toBe(true);

	});

	it('should crear a tour with the dom object', () => {
		const viewer = new TourRenderer(tour, domElement);

		expect(viewer instanceof TourRenderer).toBe(true);

	});

	it('should manage when there is no panoramas', () => {
		const noProperty = function() {
			delete tour.photoSpheres;
			const viewer = new TourRenderer(tour, domElement);
		};

		const propertyNull = function() {
			tour.photoSpheres = null;
			const viewer = new TourRenderer(tour, domElement);
		};

		const propertyEmpty = function() {
			tour.photoSpheres = [];
			const viewer = new TourRenderer(tour, domElement);
		};

		expect(noProperty).toThrowError(TourRenderer.ERRORS.INVALID_TOUR);
		expect(propertyNull).toThrowError(TourRenderer.ERRORS.INVALID_TOUR);
		expect(propertyEmpty).toThrowError(TourRenderer.ERRORS.INVALID_TOUR);
	});

	it('should throw an error when there is no name', () => {
		expect(function() {
			delete tour.name;
			const viewer = new TourRenderer(tour, domElement);
		}).toThrowError(TourRenderer.ERRORS.INVALID_TOUR);
	});
});