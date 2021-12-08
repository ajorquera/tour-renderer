export default class Defer<T> {
	resolve: (T) => void;
	reject: (any) => void;
	promise: Promise<T>;

	constructor() {
		const promise = new Promise((resolve, reject) => {
			this.resolve = resolve;
			this.reject = reject;
		});

		this.promise = <Promise<T>>promise;    
	}
}