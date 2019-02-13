import * as fromMessage from './messages.reducer';
import * as fromTodos from './todos.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoListItem } from '../model';

export interface TodosState {
  message: fromMessage.State;
  todos: fromTodos.State;
}

export const reducers = {
  message: fromMessage.reducer,
  todos: fromTodos.reducer
};

// 1. Create a feature selector
const selectTodosFeature = createFeatureSelector<TodosState>('todosFeature');

// 2. Create a selector for each branch of the feature
const selectMessage = createSelector(selectTodosFeature, f => f.message);
const selectTodos = createSelector(selectTodosFeature, f => f.todos);
// 3. Create any "helpers" you might need (optional)
const { selectAll: selectTodosEntityArray } = fromTodos.adapter.getSelectors(selectTodos);

// 4. Create a selector for what the component needs
export const selectHeaderMessage = createSelector(selectMessage, m => m.heading);
export const selectGreetingMessage = createSelector(selectMessage, m => m.greeting);

// TodoEntity[] => TodoListItem[]
export const selectTodosListItems = createSelector(selectTodosEntityArray, t => t.map(x => x as TodoListItem));
