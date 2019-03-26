import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksState } from '../../reducers';
import { BookAdded } from '../../actions/book.actions';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {
  @ViewChild('f') titleFocusElement: ElementRef;
  constructor(private store: Store<BooksState>) { }

  ngOnInit() {
  }

  add(titleElement: HTMLInputElement, authorElement: HTMLInputElement, formatElement: HTMLSelectElement, bookInput: any) {
    const title = titleElement.value;
    const author = authorElement.value;
    const format = formatElement.value;

    this.store.dispatch(new BookAdded(title, author, format));

    bookInput.resetForm();
    this.titleFocusElement.nativeElement.focus();
  }

}
