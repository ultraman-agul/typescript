let objs: object
objs = { name: '失望了' }
objs = { age: 1234 }
let obj1: { name: string }
obj1 = {
    name: 'asd',
    // age:123
}

let obj2: {
    name: string,
    [propName: string]: string
}

obj2 = {
    name: 'agul',
    // age: 123
    sex: 'male',
}

let fna: (a: number, b: number) => number
fna = function (c, d) {
    return 1231
}