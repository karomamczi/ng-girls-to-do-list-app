export interface TodoItem {
  title: string;
  completed?: boolean;
}

export interface Changes {
  completed: boolean;
}

export interface TodoItemWithChanges {
  item: TodoItem;
  changes: Changes;
}
