function check(){ 
    const jail = [[[[[[['💆🏿']]]]]]] 
    let interior = []
    let deep = 1
    while(typeof interior[0] !== 'string'){
        interior = jail.flat(deep)
        deep = deep + 1
    }
    return deep
}
console.log(check())