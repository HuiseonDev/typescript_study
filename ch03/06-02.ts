// Mapped 타입 - 객체 타입을 기반으로 객체 타입 생성(in keyof)

(() => {
  // type UserField = 'id' | 'name' | 'adress' | 'phone';

  // type User = {
  //   [Prop in UserField]: string;
  // };

  type User = {
    id: string;
    name: string;
    adress: string;
    phone?: string;
  };

  type UserField = keyof User;
  //key값만 꺼내오는 속성 keyof
  //keyof: 객체로 정의된 모든 속성을 유니언 타입으로 만들어서 반환해준다
  //User type의 key값만 꺼내라 라는 뜻임!
  //'id' | 'name' | 'adress' | 'phone'

  type OptilnalUser = {
    readonly [Prop in UserField]-?: string | undefined;
  };

  const ryan: OptilnalUser = {
    id: '1',
    name: '라이언',
    adress: '성남시',
    phone: '010-123-4567', // 주석처리하면 phone은 필수값이기 때문에 에러발생
  };

  console.log(ryan);
})();
