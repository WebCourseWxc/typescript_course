import { hi } from './m1';
function sum(a, b) {
    return a + b;
}
var obj = { name: "孙悟空", age: 33 };
console.log(obj);
obj.age = 18;
console.log(obj);
console.log(sum(123, 456));
console.log(hi);
let fn = (a, b) => a + b;
fn(123, 456);
fn(77, 22);
