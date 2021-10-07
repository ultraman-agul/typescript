let arr: string[]
arr = ['as', 'fdf', 'sdf']
let arr2: Array<number>
arr2 = [123, 454, 5, 7, 2, 65]

// 固定长度的数组为元组
let t: [string, number]
t = ['123', 123]

// 枚举
enum enu { male, female }
let objj = {
    name: 'zs',
    sex: enu.male
}

console.log(enu.male === objj.sex)
