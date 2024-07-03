// Pick 유틸리티 타입

// import { User } from './types/index';
// import { Todo } from './types/todo';

import { User, Todo } from './types/index';

// export interface Todo {
//   id: number;
//   title: string;
//   content: string;
//   done: boolean;
//   createAt: Date;
//   updateAt: Date;
// }

(() => {
  type TodoRegist = Pick<Todo, 'title' | 'content'>;
  type TodoList = Pick<Todo, 'id' | 'title' | 'done' | 'updateAt'>;

  const todo1: TodoRegist = {
    title: '할일 1',
    content: '등록에 사용',
  };
  const todo2: TodoList = {
    title: '목록',
    id: 2,
    done: false,
    updateAt: new Date(),
  };

  const user: User = {
    id: 1,
    name: '무지',
  };

  console.log(user);
})();
