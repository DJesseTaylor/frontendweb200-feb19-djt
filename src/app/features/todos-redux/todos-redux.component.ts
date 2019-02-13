import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosState, selectHeaderMessage, selectGreetingMessage, selectTodosListItems } from './reducers';
import { Store } from '@ngrx/store';
import { TodoListItem } from './model';

@Component({
  selector: 'app-todos-redux',
  templateUrl: './todos-redux.component.html',
  styleUrls: ['./todos-redux.component.css']
})
export class TodosReduxComponent implements OnInit {
  message$: Observable<string>;
  greeting$: Observable<string>;
  todo$: Observable<TodoListItem[]>;

  constructor(private store: Store<TodosState>) { }

  ngOnInit() {
    this.message$ = this.store.select(selectHeaderMessage);
    this.greeting$ = this.store.select(selectGreetingMessage);
    this.todo$ = this.store.select(selectTodosListItems);
  }

  doneClicked() {
    this.store.dispatch({ type: 'Clicked' });
  }
}
