import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef [value]="title" (keyup.enter)="submitValue(inputElementRef.value)">
    <button (click)="submitValue(inputElementRef.value)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output()
  submit: EventEmitter<string> = new EventEmitter<string>();
  title = 'Hello World';

  constructor() {}

  ngOnInit(): void {}

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
