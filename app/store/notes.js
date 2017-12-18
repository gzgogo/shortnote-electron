import { observable, action, runInAction } from 'mobx';
import shortid from 'shortid';

export default class Notes {
  @observable notes = [];

  @action.bound
  add() {
    var createdTime = new Date();

    this.notes = [{
      id: shortid.generate(),
      header: createdTime.toDateString(),
      body: '',
      createdTime: createdTime.getTime(),
    }];

    // this.notes.push({
    //   id: shortid.generate(),
    //   header: createdTime.toDateString(),
    //   body: '',
    //   createdTime: createdTime.getTime(),
    // });
  }

  @action.bound
  remove(note) {
    this.notes = this.notes.filter(item => {
      item.id !== note.id
    });
  }

  @action.bound
  update(note) {
    this.notes = this.notes.filter(item => {
      item.id !== note.id
    });
  }

  @action.bound
  load() {
  }
}
