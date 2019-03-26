import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';
import { BookListItem } from '../model';


export interface BooksState {
  book: fromBook.State;
}

export const reducers = {
  book: fromBook.reducer,
};

const selectBookFeature = createFeatureSelector<BooksState>('bookFeature');

const selectBook = createSelector(selectBookFeature, b => b.book);

const { selectAll: selectBooksEntityArray } = fromBook.adapter.getSelectors(selectBook);

export const selectBookList = createSelector(selectBooksEntityArray, b => b.map(x => x as BookListItem));

