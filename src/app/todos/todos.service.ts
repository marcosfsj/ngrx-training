/* Libraries */
import { OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

/* Store */
import { State } from './store/todo.reducers';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private store: Store<State>) { }

  getTodos() {
    return this.store.select('todos');
  }

}
