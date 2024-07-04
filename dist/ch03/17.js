// 함수 호환
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
    // function toString(todo: TodoRegist) {
    //   const str = `[TodoRegist] title: ${todo.title} content: ${todo.content}`;
    // title과 contet를 포함하고 있는 객체라면 호환이 된다! (같은 속성을 포함하고 있다면 어떤 타입이든 호환 가능!)
    // TodoList도 이 속성을 가지고 있기 때문에 호환이 되지만 호환되는 함수에서는 포함되지 않는 속성을 가진 id와 done는 호출할 수 없다!
    //   return str;
    // }
    function toString(todo) {
        const str = `[TodoList] title: ${todo.title} content: ${todo.content} done: ${todo.done}`;
        return str;
    }
    // console.log(toString(todo1)); //TodoRegist에는 done과 id 속성이 없기때문에 에러 발생
    console.log(toString(todo2));
    console.log(toString({
        title: '목록3',
        id: 4,
        done: false,
        content: '목록에 사용333',
        // name: '무지',
        // age: 30,
    }));
})();
export {};
