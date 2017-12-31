import modules from './modules/modules'
require('../less/style.less');

/**
 * Modules: single-pano, multiple-pano, create-links, all
 */ 
const MODULE_NAME = 'all';

window.onload = function() {
	document.querySelectorAll('section').forEach((section) => {
		section.classList.add('dn');
	});
	
	
	modules[MODULE_NAME].forEach((module) => {
		const element = document.querySelector('#' + module.name);

		if (!element) {
			throw new Error('module id not found in DOM: ' + module.name);
		}

		element.classList.remove('dn');
		module.init(element);
	});
	
}

