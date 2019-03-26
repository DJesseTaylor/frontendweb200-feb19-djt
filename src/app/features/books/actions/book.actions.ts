import { Action } from '@ngrx/store';
import { BookEntity } from '../reducers/book.reducer';

let id = 2;
export const ADD_BOOK = '[bookFeature] add book';
export class BookAdded implements Action {
  readonly type = ADD_BOOK;
  payload: BookEntity;
  constructor(title: string, author: string, format: string) {
    this.payload = {
      id: 'T' + (id++),
      title,
      author,
      format
    };
  }
}

// Discriminated Union Type http://www.typescriptlang.org/docs/handbook/advanced-types.html
export type All = BookAdded;
