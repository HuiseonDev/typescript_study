"use strict";
// 클래스 정의 - private 접근 지정자
// 점수는 수정 불가하고 평균은 avg() 메서드만 사용
// 02-01.ts 복사
(() => {
    class HighSchool {
        // class는 조금 다르게 상속을 받더라고 들어가야 하는 요소들은 다시 명시를 하고 사용 해 주어야 한다
        constructor(kor, eng) {
            this.kor = kor;
            this.eng = eng;
        }
        sum() {
            return this.kor + this.eng;
        }
        //위에서 명시를 해 주었기 대문에 return type설정은 생략해도 된다
        avg() {
            return this.sum() / 2;
        }
    }
    const s1 = new HighSchool(100, 91);
    // s1.eng = 99
    console.log('평균', s1.avg() / 2);
})();
