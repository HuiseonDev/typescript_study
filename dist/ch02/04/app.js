const data = { a: 10, b: 20 };
import MyMath, { sum as total, substract, divide } from './math.js';
console.log(2, MyMath.sum(data), substract(data), divide(data), total(data));
