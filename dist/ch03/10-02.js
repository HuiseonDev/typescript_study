"use strict";
// TODO: JS로 작성된 코드를 TS로 리팩토링. 로직은 수정하지 말고 타입만 추가 정의
// 10-01.js 복사
(() => {
    // const todo1:Todo = {};
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
