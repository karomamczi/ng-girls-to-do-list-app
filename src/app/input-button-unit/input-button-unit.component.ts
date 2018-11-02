import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
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
