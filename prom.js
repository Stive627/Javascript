const sum = (arr, ms) =>  new Promise((resolve, reject) =>{
    setTimeout(() => {
        const sumEven = arr.filter(elt => elt%2 === 0).reduce((acc, curr, indx) => acc + curr)
    if(sumEven < 10){
        return reject('The even sum have to be greater than 10')
    }
    return resolve(`Congratulation, ${sumEven}`)
    }, ms);
})

const check = async() => await sum([12, 53, 95, 24, 93, 1023], 3000)

console.log('Before promise')
console.log(check())