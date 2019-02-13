import { Action } from '@ngrx/store';
import { TodoEntity } from '../reducers/todos.reducer';

let id = 10;
export const ADD_TODO = '[todosFeature] add todo';
export class TodoAdded implements Action {
  readonly type = ADD_TODO;
  payload: TodoEntity;
  constructor(description: string) {
    this.payload = {
      id: 'T' + (id++),
      description
    };
  }
}

// Discriminated Union Type http://www.typescriptlang.org/docs/handbook/advanced-types.html
export type All = TodoAdded;
