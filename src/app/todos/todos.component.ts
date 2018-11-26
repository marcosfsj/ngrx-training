import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodosService } from './todos.service';
import { Observable, Subscription } from 'rxjs';
import { Todo } from './store/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  todos: Todo[];
  todosSubscription: Subscription;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosSubscription = this.todosService.getTodos().subscribe(
      (todosStore) => { this.todos = todosStore['todos']; });
  }

  ngOnDestroy() {
    this.todosSubscription.unsubscribe();
  }

}
