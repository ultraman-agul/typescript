function sum(a, b) {
    return a + b;
}
sum(1, 2);
// sum(1, 'asd') //报错
function afn(a, b) {
    console.log(231);
    return undefined;
}
function bfn(a, b) {
    throw new Error('报错');
}
