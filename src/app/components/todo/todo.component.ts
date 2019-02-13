import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from './models';
import { TodoDateService } from './todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  stuffToDo: Observable<TodoList>;

  constructor(private service: TodoDateService) {
    this.stuffToDo = service.getListAsObservable();
  }

  ngOnInit() {
  }

  addNewItem(description: string) {
    this.service.addTodoItem(description);
  }

}
