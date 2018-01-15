import * as tour from '../mockData/multiple-pano.json';
import TourRenderer from '../tourRenderer/TourRenderer';
import { Url } from 'url';

let isAutoLoad: boolean;
let isAutoRotate: boolean;
let isShowControls: boolean;
let DOM: Element;
let viewerDOM: Element;
let autoLoadButton: Element;
let autoRotateButton: Element;
let showControlsButton: Element;
let viewer: TourRenderer;

export default {
	tour,
	name: 'using-query-params',
	init: (dom) => {

		DOM = dom;

		getElemts();
		addListeners();

		viewer = new TourRenderer(tour, viewerDOM, {
			autoLoad: isAutoLoad,
			autoRotate: isAutoRotate ? 10 : undefined,
			showControls: isShowControls
		});
	}
};

const getElemts = () => {
	viewerDOM = DOM.querySelector(`.viewer`);
	autoLoadButton = DOM.querySelector('#auto-load-button');
	autoRotateButton = DOM.querySelector('#auto-rotate-button');
	showControlsButton = DOM.querySelector('#show-controls-button');

	isAutoLoad = getParameterByName('autoLoad') === 'true';
	isAutoRotate = getParameterByName('autoRotate') === 'true';
	isShowControls = getParameterByName('showControls') === 'true';

};
const addListeners = () => {
	autoLoadButton.addEventListener('click', setParam.bind(null, 'autoLoad', !isAutoLoad));
	autoRotateButton.addEventListener('click', setParam.bind(null, 'autoRotate', !isAutoRotate));
	showControlsButton.addEventListener('click', setParam.bind(null, 'showControls', !isShowControls));
};

const setParam = (name, value, evt) => {
	const searchParams = new URLSearchParams(window.location.search);
	searchParams.set(name, (value).toString());
	window.location.search = searchParams.toString();
};

/**
 * ref: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 */
const getParameterByName = (name: string, url?: string) => {
	if (!url) url = window.location.href;

	name = name.replace(/[\[\]]/g, '\\$&');
	const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	const results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
