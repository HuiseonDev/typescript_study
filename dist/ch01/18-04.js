"use strict";
// 상수를 직접 그룹화
// 18-03.ts 복사
(() => {
    //그룹화는 상수끼리 중복되지 않도록 값을 지정하면 된다
    const SubjectName = {
        TYPE_SCRIPT: 0,
        NEXT_JS: 1,
    };
    const TYPE_SCRIPT = 'TypeScript';
    const NEXT_JS = 'Next.js';
    function getSchedule(subject) {
        if (SubjectName.TYPE_SCRIPT === subject) {
            return '타입스크립트 수업은 이론 1주 + 프로젝트 1주 입니다';
        }
        else if (SubjectName.NEXT_JS === subject) {
            return '넥스트 JS수업 이론 2주+ 프로젝트 4주 입니다';
        }
    }
    console.log(getSchedule(SubjectName.TYPE_SCRIPT));
    console.log(getSchedule(SubjectName.NEXT_JS));
})();
