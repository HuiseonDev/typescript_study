"use strict";
// echo 함수 - 제네릭 타입 제약
// 05-02.ts 복사
(() => {
    // 제네릭에도 유니언 타입을 적용 할 수 있다.
    function echo(msg) {
        return msg;
    }
    console.log(echo('HELLO'));
    console.log(echo(200));
    // console.log(echo<boolean>(true));
    const str = echo('WORLD');
    const num = echo(123.3456);
    console.log(str.toLowerCase(), num.toFixed(2));
    // 제네릭에 extends로 상속받을 값의 타입을 지정해준다. 여기서는 객체를 상속받을 것이고 length라는 속성이 number로 정의된 것을 상속받을것
    function echo2(msg) {
        console.log('msg.length', msg.length);
        return msg;
    }
    //결국 echo2는 length라는 속성이 있는것을 상속받았다는 뜻이다.
    //따라서 length속성을 가진 인수들만 전달 가능하다.
    echo2('hello');
    echo2([100, 200]);
    //echo2(100); //length 속성이 없기때문에 에러가 난다.
})();
