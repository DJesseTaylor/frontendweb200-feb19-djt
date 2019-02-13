import { Component, OnInit } from '@angular/core';
import { TodosState } from '../../reducers';
import { Store } from '@ngrx/store';
import { TodoAdded } from '../../actions/todos.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<TodosState>) { }

  ngOnInit() {
  }

  add(descriptionElement: HTMLInputElement) {
    const description = descriptionElement.value;

    this.store.dispatch(new TodoAdded(description));

    descriptionElement.value = '';
    descriptionElement.focus();
  }
}
