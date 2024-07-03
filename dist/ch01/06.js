"use strict";
// 유니언 타입에 타입 별칭 지정
(() => {
    function log(a, b, c) {
        return a + b * c;
    }
    const result = log(2, 4, 3);
    console.log(result);
})();
