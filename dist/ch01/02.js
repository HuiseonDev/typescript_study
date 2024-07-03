"use strict";
// 기본 타입
(() => {
    // let str ='hello';
    // 타입을 지정해주지 않아도 문자열이 적여있기 때문에 타입추론으로 인해 string으로 자동선언 되어 있음
    // 명확하게 타입 지정이 되는 요소들은 타입추론이 되므로 변수를 만들 때 마다 타입지정을 해주지 않아도 된다. 단, 타입추론의 적절한 근거가 있을 시에만!
    // 함수와 객체 만들때는 주로 타입을 선언하는것이 좋다.
    let str = 'hello';
    let age = 30;
    let done;
    done = true;
    // 선언 될 때 타입지정을 해주면 done는 boolean이 된다
    let done2; // 타입추론 할수있는 근거가 없기 때문에 타입은 자동으로 any가 된다
    done2 = false;
    done2 = 1000; // done2를 선언할때 타입지정을 하지 않았ㅣㅣ;;고 타입추론의 근거가 없기때문에 any가 되어 done2 는 뭐든 들어간다
    let todo = { title: '도시락 싸오기', done: true };
    let todoList = ['도시락싸오기', '프로젝터밝기조절'];
    //배열안에 있는 요소의 타입을 지정하고 싶다면 array<> 꺽쇠 안에 타입지정을 해준다. 그러면 배열 안 요소들의 타입 지정이 됨
    let items = ['용쌤', 39];
    // 이는 tuple타입 형식인데 배열안에 각각의 타입속성을 지정해주기 위한 형식이다
    let userName = '이일구';
    userName = 219;
    //any 타입이라 어떤 타입의 값이 와도 문제가 발생되지 않는다
    let nullVal = null;
    let emptyVal = undefined;
})();
