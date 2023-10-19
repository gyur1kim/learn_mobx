import { makeObservable, observable, action } from "mobx";

export default class Todo {
  id = Math.random();
  title = "";
  isFinished = false;

  constructor(title) {
    makeObservable(this, {
      title: observable,
      isFinished: observable,
      toggle: action
    });
    this.title = title;
  }

  toggle() {
    this.isFinished = !this.isFinished;
  }
}
