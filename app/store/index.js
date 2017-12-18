import { observable, action, runInAction } from 'mobx';
import Notes from './notes';

class Store {
  constructor() {
    this.notes = new Notes(this);
    this.counter = new Counter(this);
  }
}

class Counter {
  @observable count = 1;

  @action.bound
  increment() {
    this.count++;
  }

  @action.bound
  decrement() {
    this.count--;
  }

  @action.bound
  incrementIfOdd() {
    if (this.count % 2 === 0) {
      this.count++;
    }
  }

  @action.bound
  incrementAsync() {
    setTimeout(() => {
      runInAction('async add count', () => {
        this.count++;
      });
    }, 1000);
  }
}

const store = new Store();

export default store;
