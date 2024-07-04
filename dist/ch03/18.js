"use strict";
// 함수 오버로딩 - 동일한 이름의 함수를 중복으로 정의
(() => {
    const todo1 = {
        title: '할일 1',
        content: '등록에 사용',
    };
    const todo2 = {
        title: '목록',
        id: 2,
        done: false,
        content: '목록에 사용',
    };
    function toString(todo) {
        let str = '';
        if ('id' in todo) {
            str = `[TodoList] id: ${todo.id}, title: ${todo.title}, done:{todo.done}, content: ${todo.content}`;
        }
        else {
            str = `[TodoRegist] title: ${todo.title}, content: ${todo.content}`;
        }
        return str;
    }
    console.log(toString(todo1));
    console.log(toString(todo2));
})();
