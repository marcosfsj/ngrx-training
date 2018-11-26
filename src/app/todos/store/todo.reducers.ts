import * as Todos from './todo.actions';
import { Todo } from './todo.model';

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: [
    new Todo('Finish this project', false),
    new Todo('Finish this project', false),
    new Todo('Finish this project', false),
    new Todo('Finish this project', false)
  ]
};

export function todosReducer(state = initialState, action: Todos.TodosActions) {
  switch (action.type) {
    case Todos.ActionTypes.Add: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
