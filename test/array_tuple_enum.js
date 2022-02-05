var arr;
arr = ['as', 'fdf', 'sdf'];
// let arr2: Array<number>
// let arr2: number[]
var arr2;
arr2 = [123, 454, 5, 7, 2, 65];
// 固定长度的数组为元组
var t;
t = ['123', 123];
// 枚举
var enu;
(function (enu) {
    enu[enu["male"] = 0] = "male";
    enu[enu["female"] = 1] = "female";
})(enu || (enu = {}));
var objj = {
    name: 'zs',
    sex: enu.male
};
console.log(enu.male === objj.sex);
