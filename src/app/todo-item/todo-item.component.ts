import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  item: { title: string };

  constructor() {}

  ngOnInit(): void {}
}
