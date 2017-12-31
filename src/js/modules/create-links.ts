import TourRenderer from '../tourRenderer/TourRenderer'
const tour = require('../mockData/create-links.json')

let name = 'create-links';
let viewer: any;
let panoId: string;
let DOM: Element;
let select: Element;
let viewerDOM: Element;
let linkList: Element;
let createLinkButton: Element;
let createLocationLinkButton: Element;

export const init = function(dom: Element) {
	DOM = dom;
	
	getElemts();
	createSelect();
	addListeners();

	viewer = new TourRenderer(tour, viewerDOM);
}

const getElemts = function() {
	viewerDOM                = DOM.querySelector('.viewer');
	select                   = DOM.querySelector('select');
	linkList                 = DOM.querySelector('ul');
	createLinkButton         = DOM.querySelector('#create-link');
	createLocationLinkButton = DOM.querySelector('#create-link-location');
}

const addListeners = function() {
	createLinkButton.addEventListener('click', (ev) => {
		if (!panoId) return console.info('No pano selected');
		viewer.createLinkTo(panoId);
	});

	createLocationLinkButton.addEventListener('click', (ev) => {
		if (!panoId) return console.info('No pano selected');
		viewer.selectPOVInViewer().then((POV) => {
			viewer.createLinkTo(panoId, POV);
		});
	});

	select.addEventListener('change', (evt) => {
		panoId = (<any>evt.target).value;
	});

	viewerDOM.addEventListener('load', (evt) => {
		buildLinksHTML();
	});

	viewerDOM.addEventListener('newLink', (evt) => {
		buildLinksHTML();
	});
}

const createSelect = function(): void {
	const options = createSelectOptions(select, tour.photoSpheres.map((pano)=> {
		return {
			label: pano.name,
			value: pano.id
		}
	}))
}

interface Option {
	label: string;
	value: string;
}

const createSelectOptions = function(select: Element, options: Option[]): Element {
	
	options.forEach((option) => {
		const optionElem = createDOM('option');
		optionElem.setAttribute('value', option.value);
		optionElem.innerHTML = option.label;
		select.appendChild(optionElem);
	});
	
	return select;
}


const createDOM = function(tagName: string): Element {
	return document.createElement(tagName);
};

const buildLinksHTML = function() {
	linkList.innerHTML = '';

	const links = viewer.getCurrentPano().links;
	links.array().forEach((link) => {
		const li = createDOM('li');
		li.innerHTML = `${link.to.name} <span class="blue underline pointer">unlink</span>`

		li.querySelector('.pointer').addEventListener('click', function() {
			linkList.removeChild(this.parentNode);
			viewer.deleteLink(link);
		});

		linkList.appendChild(li);
	});
};


export default {
	init,
	name,
	tour
}