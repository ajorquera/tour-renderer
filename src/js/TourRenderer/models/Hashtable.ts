export interface Table<T> {
	[index: string]: T;
}

export default class HashTable<T> {
	public  readonly table: Table<T>;
	private readonly _array: T[];
	private readonly _prop: string;

	constructor(array: T[] = [], prop: string = 'id') {
		this._prop = prop;
		this._array = array;
		this.table = this._arrayToDict(this._array);
	}

	public add(item: T): HashTable<T> {
		this._array.push(item);
		this.table[item[this._prop]] = item;

		return this;
	}

	public delete(item: string | number | T ) {
		if (typeof item === 'string' || typeof item === 'number') {
			item = this.get(item);
		}

		if (item) {
			this._array.forEach((arrayItem, i) => {
				if (arrayItem[this._prop] === item[this._prop]) {
					this._array.splice(i, 1);
				}
			});

			return delete this.table[item[this._prop]];
		}

		return false;
	}

	public get(index: string | number = 0): T {
		return index ? this.table[index] : this._array[index];
	}

	get length(): number {
		return this._array.length;
	}

	get array(): T[] {
		return this._array;
	}

	private _arrayToDict(array: T[]): Table<T> {
		return array.reduce((obj, item) => {
			obj[item[this._prop]] = item;
			return obj;
		}, {});
	}
}
