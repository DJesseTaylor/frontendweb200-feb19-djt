import { Component, OnInit, Input } from '@angular/core';
import { BookListItem } from '../../model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() list: BookListItem[];

  constructor() { }

  ngOnInit() {
  }

}
