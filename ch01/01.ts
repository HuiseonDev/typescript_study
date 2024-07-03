// 개발 환경 확인

(()=>{ //지역함수로 사용하기 위해 계속 이렇게 가둬서 쓸거임!
  function hello(name: string){
    return 'Hello' + name;
  }
  console.log(hello('타입스크립트'));
})();