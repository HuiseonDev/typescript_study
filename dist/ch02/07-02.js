"use strict";
// Queue - 제네릭 클래스
// 07-01.ts 복사
(() => {
    // interface StringQueue {
    //   data: string[];
    //   push(item: string): void;
    //   pop(): string | undefined;
    // }
    // interface NumQueue {
    //   data: number[];
    //   push(item: number): void;
    //   pop(): number | undefined;
    // }
    class MyQueue {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    const sq = new MyQueue();
    sq.push('hello');
    sq.push('typescript');
    sq.push('world');
    const s1 = sq.pop();
    const s2 = sq.pop();
    const s3 = sq.pop();
    console.log(s1, s2?.toUpperCase(), s3);
    const nq = new MyQueue();
    nq.push(10);
    nq.push(20.123456);
    nq.push(300);
    const n1 = nq.pop();
    const n2 = nq.pop();
    const n3 = nq.pop();
    console.log(n1, n2?.toFixed(3), n3);
})();
