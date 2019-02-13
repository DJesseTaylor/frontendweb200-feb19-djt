import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as actions from '../actions/todos.actions';


@Injectable()
export class TodosEffects {

  @Effect({ dispatch: false }) logThemAll$ = this.action$
    .pipe(
      ofType(actions.ADD_TODO),
      map(a => a as actions.TodoAdded),
      switchMap(action => this.http.post('http://localhost:3000/todos', action.payload))
    );

  constructor(private action$: Actions, private http: HttpClient) {

  }
}
