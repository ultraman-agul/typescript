// 字面量
var agul;
agul = 'asd';
var qwe;
qwe = 123;
qwe = 'asd';
// any 表示任意类型
var d;
d = 'asd';
d = 123;
d = false;
var e; // 相当于 let e: any
e = 'gfdg';
e = 123;
// unknown 表示未知类型的
var f;
f = 123;
f = false;
f = 'string';
var g;
g = e;
// g = f // 不能将类型“unknown”分配给类型“string"
if (typeof f === 'string') {
    g = f;
}
// 先行断言  两种方式
g = f;
g = f;
