"use strict";
// 타입 가드 함수 작성
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
    const User3 = {
        name: '게스트',
        age: 0,
    };
    function helloUser(user) {
        if (isAdmin(user)) {
            console.log(`안녕하세요. ${user.level} ${user.name} 관리자님`);
        }
        else {
            //isAdmin을 사용함으로써 위의 if 가 true라면 (user: User | AdminUser | GuestUser) AdminUser를 제외한 user를 판별하여 반환된다
            console.log(`안녕하세요. ${user.name} 회원님`);
            return;
        }
    }
    //타입가드 구문이 복잡하거나 혹은 여러번 이 로직을 사용 해야 할 경우 타입가드 함수 작성하여 사용한다
    //user is AdminUser라고 작성한것은 if ('admin' in user && user.admin) 판별했을 때 true 라면 AdminUser가 반환되는것이고 그게 아닌 else의 경우  User | AdminUser | GuestUser 이 중 하나다 라는 뜻!
    //user is AdminUser: true를 리턴할경우 user의 타입이 AdminUser가 확정됨
    //user is AdminUser를 지워도 출력되는데 이를 지우면 타입가드 역할이 아닌 그냥 일반 함수다!
    function isAdmin(user) {
        return 'admin' in user && user.admin;
    } //앞에값이 true면 admin속성이 있어서 AdminUser 혹은 일반 User 반환
    helloUser(User1);
    helloUser(User2);
    helloUser(User3);
})();
