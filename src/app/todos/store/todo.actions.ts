import { Action } from '@ngrx/store';

export enum ActionTypes {
  Add = '[Todos] Add',
  Update = '[Todos] Update',
  List = '[Todos] List',
  Delete = '[Todos] Delete'
}

export class Add implements Action {
  readonly type = ActionTypes.Add;
  constructor(public payload: { description: string; done: boolean }) {}
}

export class Update implements Action {
  readonly type = ActionTypes.Update;
  constructor(public payload: { description: string; done: boolean }) {}
}

export class List implements Action {
  readonly type = ActionTypes.List;
}

export class Delete implements Action {
  readonly type = ActionTypes.Delete;
  constructor(public payload: { index: number }) {}
}

export type TodosActions = Add | Update | List | Delete;
