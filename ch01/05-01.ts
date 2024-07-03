// 유니언 타입(union type)

(()=>{
  // function log(msg: string){
  //   console.log(msg);
  // }

  // const msg1: string='hello';
  // const msg2: number, 123;

  // console.log(log(msg1));
  // console.log(log(msg2));

  function log(msg: number | string){
    console.log(msg);
  }

  const msg3:string = 'world';
  const msg4:number = 123;

  log(msg3);
  log(msg4);
})();