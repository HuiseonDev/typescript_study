"use strict";
// Map - 제네릭 클래스
// 07-03.ts 복사
(() => {
    class MyMap {
        constructor() {
            this.items = {}; //인덱스 시그니처 활용, private로 직접 접근을 못하도록 제약을 걸어둠
        }
        set(key, value) {
            this.items[key] = value;
        } //데이터 추가
        get(key) {
            return this.items[key];
        } //데이터 조회
        delete(key) {
            delete this.items[key];
        } //데이터 삭제
        has(key) {
            return this.items[key] !== undefined;
        } //데이터 존재 유무 확인
        clear() {
            this.items = {};
        } //통째로 날릴거라 key, value 값 부여 해 주지 않아도 됨
    }
    //Map 생성
    // const mymap= new MyMap<string,string>();
    // 여기서의 Map는 Jacascript에 내장되어 있는 class <key, value> 자리에 <string,string> 타입 지정한것임
    const mymap = new Map();
    //데이터 추가
    mymap.set('hello', 'world');
    mymap.set('js', 'JavaScript');
    mymap.set('ts', 'TypeScript');
    mymap.set('next', 123.456);
    //데이터 조회
    const m1 = mymap.get('js');
    if (typeof m1 === 'string') {
        //타입가드
        console.log(m1.toUpperCase());
    }
    else if (typeof m1 === 'number') {
        console.log(m1.toFixed(2));
    }
    //데이터 삭제
    mymap.delete('hello');
    //데이터 존재 확인
    console.log(mymap.has('hello'));
    console.log(mymap);
    //데이터 초기화
    console.log(mymap.clear());
    console.log(mymap);
})();
