"use strict";
// 타입 단언
(() => {
    // return type : any => 매개변수의 타입과 return 타입이 지정되지 않았기 때문
    // 좋은 방법이 아님! 차라리 제네릭 문법을 사용하는 것이 좋다
    // function getMsg(msg) {
    //   return msg;
    // }
    function getMsg(msg) {
        return msg;
    }
    const msg1 = getMsg(123.456);
    console.log(msg1.toFixed(2));
    const msg2 = getMsg('hello');
    console.log(msg2.toUpperCase());
})();
