import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input [value]="generateTitle()">
    <p>{{ generateTitle() }}</p>
    <p>{{title}}</p>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);
  }

  generateTitle(): string {
    return 'This title was generated by a method.';
  }
}
