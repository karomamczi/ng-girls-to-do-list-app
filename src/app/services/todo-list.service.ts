import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable()
export class TodoListService {
  private todoList: TodoItem[] = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' }
  ];

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  addItem(item: TodoItem): void {
    this.todoList.push(item);
  }
}
