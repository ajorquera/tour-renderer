export interface Table<T> {
  [index: string]: T
}

export default class HashTable<T> {
  readonly table: Table<T>;
  private readonly _array: T[];

  constructor(array: T[] = [], prop: string = 'id') {
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
  get(index: string | number): T {
    return this.table[index] || null;
  }

  length(): number {
    return this._array.length;
  }

  array(): T[] {
    return this._array;
  }
}
