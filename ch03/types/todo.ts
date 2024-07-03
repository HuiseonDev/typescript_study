export interface Todo {
  id: number;
  title: string;
  content: string;
  done: boolean;
  createAt: Date;
  updateAt: Date;
}

export type TodoInfo = Omit<Todo, 'createAt'>;
export type TodoList = Omit<TodoInfo, 'content'>;
export type TodoRegist = Pick<Todo, 'title' | 'content'>;
