import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoItemWithChanges } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoListService.addItem({ title });
  }

  removeItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
  }

  updateItem(itemWithChanges: TodoItemWithChanges): void {
    this.todoListService.updateItem(
      itemWithChanges.item,
      itemWithChanges.changes
    );
  }
}
