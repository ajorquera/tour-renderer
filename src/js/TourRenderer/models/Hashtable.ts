export interface Table<T> {
  [index: string]: T
}

export default class HashTable<T> {
  readonly table: Table<T>;
  private readonly _array: T[];
  private readonly _prop: string;

  constructor(array: T[] = [], prop: string = 'id') {
	this._prop = prop;
    this._array = array;
    this.table = array.reduce((obj, item) => {
      obj[item[prop]] = item;
      return obj
    }, {});
  }

  add(index: string | number, item: T): HashTable<T> {
    this._array.push(item);
    this.table[index] = item;

    return this;
  }

  delete(index: number) {
	const item = this.get(index);

	if(item) {
		this._array.forEach((arrayItem, i) => {
			if(arrayItem[this._prop]) {
				this._array.splice(i,1);
			}
		});

		return delete this.table[index];
	}
	
	return false;
  }

  get(index: string | number = 0): T {
    let item;
    return index ? this.table[index] : this._array[index];
  }

  length(): number {
    return this._array.length;
  }

  array(): T[] {
    return this._array;
  }
}
