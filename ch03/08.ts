// 함수의 타입 추론

(() => {
  //매개변수 타입을 지정하지 않으면 num은 추론하지 못하므로 any타입으로 추론한다.
  function add10(num) {
    return num + 10;
  }

  function add20(num = 20) {
    //기본값 매개변수
    return num + 10;
  }

  //리턴할 수 있는 모든 케이스를 다 계산해서 최대한 좁은 범위의 타입으로 추론한다
  // 좁은 범위의 타입과 넓은 범위의 타입이 같이 있을 경우 서로 호환된다면 넓은 범위의 타입에 포함된다.
  function checkNumber(x: number, y: number): string | undefined {
    //
    let z;
    if (x === 10) {
      return 'x는 10';
    } else if (x > y) {
      return '큰수' + x; //return타입을 따로 지정해주지 않아도 문자와 x,y type numver가 선언도이ㅓ 있기 때문에 return은 문자와 숫자의 조합이 된다 따라서 return 값은 string이 추론되는것이다
    } else if (x > 5) {
      return '5';
    }
  }
  const returnValue = checkNumber(10, 20);
  console.log(returnValue);

  const result = add10(100.12345);
  const result2 = add20(100.12345); //기본값 매개변수를 사용했기 때문에 타입추론이 number로 된다
  const result3 = add20();

  console.log(result, result2, result3);
})();
