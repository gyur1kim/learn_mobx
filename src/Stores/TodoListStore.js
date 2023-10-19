import { makeObservable, observable, computed } from "mobx";

export default class TodoList {
	todos = [];

	get unfinishedTodoCount() {
		return this.todos.filter(todo => !todo.isFinished).length;
	}

	constructor(todos) {
		makeObservable(this, {
			todos: observable,
			unfinishedTodoCount: computed
		});
		this.todos = todos;
	}
}