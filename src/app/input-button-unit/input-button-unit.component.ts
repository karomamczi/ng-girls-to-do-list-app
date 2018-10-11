import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef [value]="title" (keyup.enter)="changeTitle(inputElementRef.value)">
    <button (click)="changeTitle(inputElementRef.value)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() {}

  ngOnInit(): void {}

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
