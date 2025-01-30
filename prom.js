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

// console.log('Before promise')
// console.log(check())

const permut = (arr) =>{
 [arr[0], arr[1]] = [arr[1], arr[0]]
 return arr
}
console.log(permut(['stive', 'arnaud']))

const date = new Date('09-19-2026')

const IC = new Intl.DateTimeFormat('fr-CM', {'dateStyle':'full'}).format(new Date())
const [day, number, month, year] = IC.split(' ')
console.log(IC)