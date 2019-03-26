import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookListItem } from './model';
import { BooksState, selectBookList } from './reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookList$: Observable<BookListItem[]>;

  constructor(private store: Store<BooksState>) { }

  ngOnInit() {
    this.bookList$ = this.store.select(selectBookList);
  }

}
