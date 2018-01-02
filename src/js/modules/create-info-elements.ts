import TourRenderer from '../tourRenderer/TourRenderer'
import * as tour from '../mockData/create-info-elements.json'

let domViewer: HTMLElement;
let DOM: HTMLElement;
let createButton: HTMLElement;
let infoList: HTMLElement;
let viewer: TourRenderer;

export default {
	init: (dom: HTMLElement) => {
		DOM = dom;
		getDomElement();
		viewer = new TourRenderer(tour, domViewer);
		setListeners();
	},
	name: 'create-info-elements'
}

const getDomElement = () => {
	domViewer = DOM.querySelector('.viewer');
	createButton = DOM.querySelector('button');
};

const setListeners = () => {
	createButton.addEventListener('click', (event) => {
		viewer.selectPOVInViewer().then((POV) => {
			viewer.addInfoElement(POV);
		}).catch((err) => {
			console.log(err);
		});
	});
};

const createListInfoElements = () => {
	infoList.innerHTML = '';
};
