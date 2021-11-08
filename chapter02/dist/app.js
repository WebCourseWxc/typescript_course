"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m_js_1 = require("./m.js");
var a = 10;
console.log(m_js_1.hi);
console.log(a);
function fn(a, b) {
    return a + b;
}
function fn2() {
    alert(this);
}
var box1 = document.getElementById('box1');
box1 === null || box1 === void 0 ? void 0 : box1.addEventListener('click', function () {
    alert('hello');
});
