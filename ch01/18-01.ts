// 상수가 필요한 경우

(() => {
  function getSchedule(subject: string) {
    if ('TypeScript' === subject) {
      return '타입스크립트 수업은 이론 1주 + 프로젝트 1주 입니다';
    } else if ('Next.js' === subject) {
      return '넥스트 JS수업 이론 2주+ 프로젝트 4주 입니다';
    }
  }
  console.log(getSchedule('TypeScript'));
  console.log(getSchedule('Next.js'));
})();
