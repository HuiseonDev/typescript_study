// Map - 제네릭 클래스
// 07-02.ts 복사

(() => {
  interface IMap {
    set(key: string, value: string): void; //데이터 추가
    get(key: string): string; //데이터 조회
    delete(key: string): void; //데이터 삭제
    has(key: string): boolean; //데이터 존재 유무 확인
    clear(): void; //통째로 날릴거라 key, value 값 부여 해 주지 않아도 됨
  }

  class MyMap implements IMap {
    private items: { [Key: string]: string } = {}; //인덱스 시그니처 활용, private로 직접 접근을 못하도록 제약을 걸어둠

    set(key: string, value: string): void {
      this.items[key] = value;
    } //데이터 추가
    get(key: string): string {
      return this.items[key];
    } //데이터 조회
    delete(key: string): void {
      delete this.items[key];
    } //데이터 삭제
    has(key: string): boolean {
      return this.items[key] !== undefined;
    } //데이터 존재 유무 확인
    clear(): void {
      this.items = {};
    } //통째로 날릴거라 key, value 값 부여 해 주지 않아도 됨
  }

  //Map 생성
  const mymap: IMap = new MyMap();

  //데이터 추가
  mymap.set('hello', 'world');
  mymap.set('js', 'JavaScript');
  mymap.set('ts', 'TypeScript');

  //데이터 조회
  console.log(mymap.get('js'));
  console.log(mymap.get('hello'));

  //데이터 삭제
  mymap.delete('hello');

  //데이터 존재 확인
  console.log(mymap.has('hello'));

  console.log(mymap);

  //데이터 초기화
  console.log(mymap.clear());
  console.log(mymap);
})();
