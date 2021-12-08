import TourRenderer from '../../../src';
import * as tour from '../mockData/create-info-elements.json';
import { buildList } from '../helpers';

let domViewer: HTMLElement;
let DOM: HTMLElement;
let createButton: HTMLElement;
let infoList: HTMLElement;
let viewer: TourRenderer;

export default {
	init: (dom: HTMLElement) => {
		DOM = dom;
		getDomElement();
		viewer = new TourRenderer(tour, domViewer, {autoLoad: true});
		setListeners();
		createListInfoElements();
	},
	name: 'create-info-elements'
};

const getDomElement = () => {
	domViewer = DOM.querySelector('.viewer');
	createButton = DOM.querySelector('button');
	infoList = DOM.querySelector('ul');
};

const setListeners = () => {
	createButton.addEventListener('click', (event) => {
		viewer.selectPOVInViewer().then((POV) => {
			viewer.addInfoElement({POV, isEdit: true});
			createListInfoElements();
		}).catch((err) => { });
	});

	DOM.addEventListener(TourRenderer.EVENTS.UPDATE_INFO_ELEMENT, () => {
		createListInfoElements();
	});

	DOM.addEventListener(TourRenderer.EVENTS.DELETE_INFO_ELEMENT, () => {
		createListInfoElements();
	});
};

const onClickDeleteInfo = (event, info) => {
	viewer.deleteInfoElement(info);
	createListInfoElements();

};

const createListInfoElements = () => {
	buildList(infoList, viewer.getPano().infos.array, onClickDeleteInfo);
};
