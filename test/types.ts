// 字面量
let agul: 'asd'
agul = 'asd'

let qwe: 123 | 'asd'
qwe = 123
qwe = 'asd'

// any 表示任意类型
let d: any
d = 'asd'
d = 123
d = false

let e    // 相当于 let e: any
e = 'gfdg'
e = 123

// unknown 表示未知类型的
let f: unknown
f = 123
f = false
f = 'string'

let g: string
g = e
// g = f // 不能将类型“unknown”分配给类型“string"
if (typeof f === 'string') {
    g = f
}
// 先行断言  两种方式
g = f as string
g = <string>f


