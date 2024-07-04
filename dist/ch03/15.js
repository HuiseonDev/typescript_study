"use strict";
// 속성 값으로 체크
(() => {
    const User1 = {
        name: '무지',
        age: 30,
        admin: false,
    };
    const User2 = {
        name: '라이언',
        admin: true,
        level: 2,
    };
    function helloUser(user) {
        if (user.admin === true) {
            console.log(`안녕하세요. 레벨${user.level} 관리자님`);
        }
        else {
            console.log(`안녕하세요. ${user.name} 회원님`);
            return;
        }
    }
    helloUser(User1);
    helloUser(User2);
})();
