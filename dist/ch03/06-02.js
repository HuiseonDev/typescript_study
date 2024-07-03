"use strict";
// Mapped 타입 - 객체 타입을 기반으로 객체 타입 생성(in keyof)
(() => {
    // type UserField = 'id' | 'name' | 'adress' | 'phone';
    const ryan = {
        id: '1',
        name: '라이언',
        adress: '성남시',
        phone: '010-123-4567', // 주석처리하면 phone은 필수값이기 때문에 에러발생
    };
    console.log(ryan);
})();
