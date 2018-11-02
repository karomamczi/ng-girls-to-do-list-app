import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem, TodoItemWithChanges } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  item: TodoItem;
  @Output()
  remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output()
  update: EventEmitter<TodoItemWithChanges> = new EventEmitter<
    TodoItemWithChanges
  >();

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }
}
