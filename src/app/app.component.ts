import { Component } from '@angular/core';
//import class so that we can register it as dependency injection token
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  //newTodo: Todo = new Todo(); //now handled by todo-list-header component

  constructor(private todoDataService: TodoDataService){
  }
  //service is now available at this.todoDataSevice

  // addTodo(){
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }  //now handled by TodoListHeaderComponent

  onAddTodo(todo: Todo){
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplete(todo: Todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo: Todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos(){
    return this.todoDataService.getAllTodos();
  }
}
