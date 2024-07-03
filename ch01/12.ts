// 인터페이스 정의 - 객체의 속성과 메서드, 익명 함수, 선택적 속성, 읽기 전용 속성

(()=>{
  interface ITodo { //충돌나는 방지를 하기 위해 이름 앞에 I를 붙인다
    readonly id: number;
    title: string;
    content: string;
    done?: boolean;
  }

  interface IToggle {
    (todo:ITodo):void
  }

  const todo1:ITodo = {id:1, title:'할일1', content:'인터페이스 사용', done:true};
  todo1.title = '타이틀수정';
  // todo1.id = 2; // id 앞에 readonly를 붙였기 때문에 수정할 수 없다

  const todo2:ITodo = {id:2, title:'할일2', content:'인터페이스 사용2'};

  console.log(todo1, todo2);


  //done 값을 반전시킨다
  //const toggleDone:IToggle = (todo:ITodo):void => {
  const toggleDone:IToggle = (todo:ITodo):void => {
    todo.done = !todo.done;
  } ;
  

  console.log(todo1, todo2)
  toggleDone(todo1);
  toggleDone(todo2);
  console.log(todo1, todo2);
})();
