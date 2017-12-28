import modules from './modules/modules'
require('../less/style.less');

const MODULE_NAME = 'all';

window.onload = function() {
	document.querySelectorAll('section').forEach((section) => {
		section.setAttribute('class', 'hide');
	});
	
	
	modules[MODULE_NAME].forEach((module) => {
		const element = document.querySelector('#' + module.name);

		if (!element) {
			throw new Error('module id not found in DOM: ' + module.name);
		}

		element.setAttribute('class', '');
		module.init();
	});
	
}

