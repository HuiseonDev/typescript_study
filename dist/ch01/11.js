"use strict";
// 인터페이스 사용 - 클래스의 타입 지정
(() => {
    // class HighSchool {
    //   constructor(kor, eng){
    //     this.kor = kor;
    //     this.eng = eng;
    //   }
    //   sum(){
    //     return this.kor + this.eng;
    //   }
    class HighSchool {
        constructor(kor, eng) {
            this.kor = kor; //this.kor은 new HighSchool로 인해 생성된 빈 객체의 속성값이다. =kor은 100
            this.eng = eng;
        }
        sum() {
            return this.kor + this.eng;
        }
        avg() {
            return this.sum() / 2;
        }
    }
    const muzi = new HighSchool(100, 90);
    console.log(muzi.sum(), muzi.avg());
})();
