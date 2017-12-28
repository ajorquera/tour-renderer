import singlePano from './single-pano'
import createLinks from './create-links'
import multiplePano from './multiple-pano'

const uniqFilter = function(value, index, self) {
	return self.indexOf(value) === index;
}

const mergeModules = function(...args: any[]) {
	const argsArr = Array.prototype.slice.call(args);
	return Array.prototype.concat.apply([], argsArr).filter(uniqFilter);
}

const modules = (function() {
	const modules = {
		'single-pano'  : [singlePano],
		'create-links' : [createLinks],
		'multiple-pano': [multiplePano]
	}

	modules['all'] = mergeModules(
		modules['single-pano'], 
		modules['multiple-pano'],
		modules['create-links']
	);

	return modules;
})();

export default modules;