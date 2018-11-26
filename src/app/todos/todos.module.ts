/* libs */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

/* Store */
import { todosReducer } from './store/todo.reducers';

/* Service */
import { TodosService } from './todos.service';

/* Components */
import { TodosComponent } from './todos.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodoEditComponent,
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [CommonModule, StoreModule.forFeature('todos', todosReducer)],
  providers: [],
  exports: [TodosComponent]
})
export class TodosModule {}
