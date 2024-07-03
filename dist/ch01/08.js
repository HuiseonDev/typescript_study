"use strict";
// 인터섹션 타입(intersection type)
(() => {
    const todo1 = {
        title: '소정님',
        content: '저 뒷구르기를 더 잘해요'
    };
    const todo2 = {
        title: 'bye',
        content: 'hehe',
        id: 12,
        done: true,
    };
    console.log(todo1, todo2);
})();
