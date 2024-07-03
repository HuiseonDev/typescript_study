const data = { a: 10, b: 20 };

//named export를 불러올 때는 구조분해 할당 사용
// import { sum, stastract } from './math.js';
// console.timeLog(1, sum(data), stastract(data));

// import MyMath from './math.js';
// console.log(2, MyMath.sum(data), MyMath.divide(data));

//같은 이름으로 호출했을 때 as를 붙여서 이름을 바꿀 수 있다
import MyMath, { sum as total, substract, divide } from './math.js';
console.log(2, MyMath.sum(data), substract(data), divide(data), total(data));
