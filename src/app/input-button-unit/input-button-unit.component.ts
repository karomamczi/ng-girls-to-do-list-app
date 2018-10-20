import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input class="todo-input" #inputElementRef [value]="title" (keyup.enter)="submitValue($event.target.value)">
    <button class="btn" type="button" (click)="submitValue(inputElementRef.value)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent {
  @Output()
  submit: EventEmitter<string> = new EventEmitter<string>();
  title = 'Hello World';

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
