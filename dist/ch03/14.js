// export interface Todo {
//   id: number;
//   title: string;
//   content: string;
//   done: boolean;
//   createAt: Date;
//   updateAt: Date;
// }
(() => {
    const todo1 = {
        title: '할일 1',
        content: '등록에 사용',
    };
    const todo2 = {
        title: '목록',
        id: 2,
        done: false,
        updateAt: new Date(),
    };
    function toString(todo) {
        let str = '';
        if ('id' in todo) {
            str = `[TodoList] id: ${todo.id} title: ${todo.title} done:{todo.done} updateAt: ${todo.updateAt.toLocaleString()}`;
        }
        else {
            str = `[TodoRegist] title: ${todo.title} content: ${todo.content}`;
        }
        return str;
    }
    console.log(toString(todo1));
    console.log(toString(todo2));
})();
export {};
