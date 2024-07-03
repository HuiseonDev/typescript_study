// 유니언 타입에 타입 별칭 지정

(() => {
  type Message = number;

  function log(a: Message, b: Message, c: Message) {
    return a + b * c;
  }

  const result = log(2, 4, 3);

  console.log(result);
})();
