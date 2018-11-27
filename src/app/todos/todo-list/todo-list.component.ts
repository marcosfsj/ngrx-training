import { TodosService } from './../todos.service';
import { Subscription } from 'rxjs';
import { Todo } from './../store/todo.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[];
  todosSubscription: Subscription;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todosSubscription = this.todosService
      .getTodos()
      .subscribe(todosStore => {
        this.todos = todosStore['todos'];
      });
  }

  ngOnDestroy() {
    this.todosSubscription.unsubscribe();
  }
}
