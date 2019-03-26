import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookEntryComponent } from './components/book-entry/book-entry.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookEntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookFeature', reducers),
    FormsModule
  ]
})
export class BooksModule { }
