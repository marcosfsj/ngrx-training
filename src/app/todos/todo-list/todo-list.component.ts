import { TodosService } from './../todos.service';
import { Subscription, Observable } from 'rxjs';
import { Todo } from './../store/todo.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todosStore: Observable<{ todos: Todo[] }>;
  todosSubscription: Subscription;

  constructor(
    private todosService: TodosService,
    private store: Store<{ todos: { todos: Todo[] } }>
  ) {}

  ngOnInit() {
    this.todosStore = this.store.select('todos');
  }

  ngOnDestroy() {
    this.todosSubscription.unsubscribe();
  }
}
