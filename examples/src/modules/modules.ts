import singlePano from './single-pano';
import createLinks from './create-links';
import multiplePano from './multiple-pano';
import createInfoElements from './create-info-elements';
import usingQueryParams from './using-query-params';

const uniqFilter = (value, index, self) => {
	return self.indexOf(value) === index;
};

const mergeModules = (...args: any[]) => {
	const argsArr = Array.prototype.slice.call(args);
	return Array.prototype.concat.apply([], argsArr).filter(uniqFilter);
};

const modules = (() => {
	const modules = {
		'single-pano'  : [singlePano],
		'create-links' : [createLinks],
		'create-info-elements' : [createInfoElements],
		'using-query-params' : [usingQueryParams],
		'multiple-pano': [multiplePano]
	};

	modules['all'] = mergeModules(
	//	modules['single-pano'],
	//	modules['multiple-pano'],
		modules['create-info-elements'],
	//	modules['using-query-params'],
		modules['create-links']
	);

	return modules;
})();

export default modules;
