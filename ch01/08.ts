// 인터섹션 타입(intersection type)

(()=>{
  type Todo = {
    title: string;
    content:string;
  };

  type TodoInfo = Todo &{
    id: number,
    done: boolean,
  };

  const todo1:Todo = {
    title:'소정님',
    content:'저 뒷구르기를 더 잘해요'
  };
  const todo2:TodoInfo={
    title:'bye',
    content:'hehe',
    id:12,
    done:true,
  };
  
  console.log(todo1,todo2);
})();