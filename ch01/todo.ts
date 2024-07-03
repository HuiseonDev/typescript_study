(() => {
  // TODO: 에러나 경고가 발생하는 부분에 적절한 타입 선언

  let todoItems: TodoItem[];

  // api
  function fetchTodoItems() {
    // :TodoItem[] => return값 type 지정
    const todos: TodoItem[] = [
      { id: 1, title: '안녕', done: false },
      { id: 2, title: '타입', done: false },
      { id: 3, title: '스크립트', done: false },
    ];
    return todos;
  }

  // TODO: Todo Type 지정
  type TodoItem = {
    id: number;
    title: string;
    done: boolean;
  };

  // crud methods
  // 할일 목록 조회
  function fetchTodos(): TodoItem[] {
    const todos = fetchTodoItems();
    return todos;
  }

  //할일 등록
  function addTodo(todo: TodoItem) {
    todoItems.push(todo);
  }

  //할일 삭제
  function deleteTodo(index: number) {
    todoItems.splice(index, 1);
  }

  function completeTodo(index: number, todo: TodoItem) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
  }

  // business logic
  function logFirstTodo() {
    return todoItems[0];
  }

  function showCompleted() {
    return todoItems.filter(item => item.done);
  }

  function addTwoTodoItems() {
    // TODO: addTodo() 함수를 두 번 호출하여 todoItems에 할일 2개 추가
    addTodo({ id: 4, title: '4번', done: false });
    addTodo({ id: 5, title: '5번', done: true });
  }

  // 1. Todo 목록을 가져온다.
  todoItems = fetchTodos();
  // 2. 2개의 Todo를 등록한다.
  addTwoTodoItems();

  deleteTodo(1); //삭제처리
  completeTodo(0, todoItems[0]); //완료처리
  completeTodo(2, todoItems[2]);

  console.log(logFirstTodo());
  console.log(showCompleted());

  console.log(todoItems);
})();
