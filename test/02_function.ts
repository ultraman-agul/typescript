function sum(a: number, b: number): number {
    return a + b
}

sum(1, 2)
// sum(1, 'asd') //报错

function afn(a: number, b: string): void {  // 返回值可以是undefined  null
    console.log(231)
    return undefined
}

function bfn(a: string, b: string): never { // 无返回值
    throw new Error('报错')
}