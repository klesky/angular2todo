import { Component } from '@angular/core';
import { Todo } from './todo';

const TODOS = [
  new Todo("Todo 1"),
  new Todo("Todo 2"),
  new Todo("Todo 3")
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  todos: Array<Todo>;
  input = "";

  constructor() {
    this.todos = TODOS;
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  addTodo(input){
    this.todos.push(new Todo(input));
    this.input ="";
  }

}
