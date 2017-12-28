import TourRenderer from '../tourRenderer/TourRenderer'
const tour = require('../mockData/create-links.json')

export default {
	name: 'create-links',
	tour,
	init: function() {
		const viewer = new TourRenderer(tour, '#link-manipulation');
	
		
		let panoIdToCreate;
		const createLinkElem = document.querySelector('#create-link')
		
		createLinkElem.addEventListener('click', (ev) => {
			const panoToLink = viewer.panos[panoIdToCreate];
			viewer.setLinkTo(panoIdToCreate);
		});
		
		createLinkElem.parentNode.insertBefore(createDOM('BR'), createLinkElem.parentNode.firstChild)
		createLinkElem.parentNode.insertBefore(createDOM('BR'), createLinkElem.parentNode.firstChild)
		
		
		const selectElm = createSelect(tour.photoSpheres.map((pano)=> {
			return {
				label: pano.name,
				value: pano.id
			}
		}))
		
		
		selectElm.addEventListener('change', (evt) => {
			panoIdToCreate = (<Element>evt.target).getAttribute('value');
		});
		
		createLinkElem.parentNode.insertBefore(selectElm, createLinkElem.parentNode.firstChild);
	}
}

const createSelect = function(options: Option[]): Element {
	const select = createDOM('select');
	
	options.forEach((option) => {
		const optionElem = createDOM('option');
		optionElem.setAttribute('value', option.value);
		optionElem.innerHTML = option.label;
		select.appendChild(optionElem);
	});
	
	return select;
}

interface Option {
	label: string;
	value: string;
}

const createDOM = function(tagName: string): Element {
	return document.createElement(tagName);
}

	
