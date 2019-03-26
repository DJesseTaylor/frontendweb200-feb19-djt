import * as actions from '../actions/book.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface State extends EntityState<BookEntity> {

}

const initialState: State = {
  ids: ['1'],
  entities: {
    1: { id: '1', title: 'The Fellowship of The Ring', author: 'JR Tolken', format: 'paperback' }
  }
};

export const adapter = createEntityAdapter<BookEntity>();

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.ADD_BOOK: {
      return adapter.addOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
