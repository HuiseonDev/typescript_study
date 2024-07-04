// 타입 단언이 필요한 JS 코드

(() => {
  const todo1 = {};
  todo1.title = '할일1';

  const todo2 = { title: '할일2' };
  todo2.content = 'typescript 책보기';

  const todo3 = {
    title: '할일3',
    content: 'javascript 다시보기',
  };

  const todo4 = {
    title: '할일 4',
    content: ' react 복습',
  };

  console.log(todo1, todo2, todo3, todo4);
})();
