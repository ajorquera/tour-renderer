export interface Table<T> {
  [index: string]: T
}

export default class HashTable<T> {
  readonly table: Table<T>;

  constructor(array: T[], prop: string = 'id') {
    this.table = array.reduce((obj, item) => {
      obj[item[prop]] = item;
      return obj
    }, {});
  }

  get(index: string): T {
    return this.table[index];
  }

  length(): number {
    return Object.keys(this.table).length;
  }

  getFirst(): T {
    return this.table[Object.keys(this.table)[0]];
  }
}
