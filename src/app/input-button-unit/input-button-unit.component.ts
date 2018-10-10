import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() {
    this.title = 'I Love Angular';
  }

  ngOnInit(): void {
    this.changeTitle('My First Angular App');
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
