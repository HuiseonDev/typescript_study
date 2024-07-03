// Pick 유틸리티 타입
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
    const user = {
        id: 1,
        name: '무지',
    };
    console.log(user);
})();
export {};
