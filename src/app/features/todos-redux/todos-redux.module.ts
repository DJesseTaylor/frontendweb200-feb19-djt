import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodosReduxComponent } from './todos-redux.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './effects/todos.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodosReduxComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todosFeature', reducers),
    EffectsModule.forFeature([TodosEffects]),
    HttpClientModule
  ],
  exports: [TodosReduxComponent]
})
export class TodosReduxModule { }
