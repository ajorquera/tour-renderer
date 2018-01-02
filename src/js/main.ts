import modules from './modules/modules';
import '../less/style.less';

/**
 * Modules: single-pano, multiple-pano, create-links, create-info-elements all
 */
const MODULE_NAME = 'create-info-elements';

window.onload = () => {
	document.querySelectorAll('section').forEach((section) => {
		section.classList.add('dn');
	});

	modules[MODULE_NAME].forEach((module) => {
		const element = <HTMLElement> document.querySelector('#' + module.name);

		if (!element) {
			throw new Error('module id not found in DOM: ' + module.name);
		}

		element.classList.remove('dn');
		module.init(element);
	});

};
