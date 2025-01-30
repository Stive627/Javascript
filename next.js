// const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))

// async function typewriter(){
//     const sentence = 'stive sera intelligent un jour. promis'
//     let write = ''
//     for(var i = 0; i < sentence.length; i ++){
//         await delay(3000)
//         console.log(write + sentence[i])
//         write += sentence[i]
//     }
// }


// const smileyArray = [':)', ';}', ';-D', ';(', ':}', ':]']

// const isValidSmiley = (elt) => /[:;][-~]?[)D]/.test(elt)

// function countSmileys(arr){
//     return console.log(arr.filter(isValidSmiley).length)
// }

// countSmileys(smileyArray)

// const prom = () => { return new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         const done = true
//         if(done){
//             resolve('done is true')
//         }
//         else{
//             reject('done is false')
//         }
//     }, 2000)
// })}

// prom()
// .then((value) => console.log(value))
// .catch((error) => console.log(error))

// const factorial = (n) => {
//     if(n < 0) return 'The number have to be greater than 0'
//     if(n === 0) return 1
//     return n*factorial(n-1)
// }

// console.log(factorial(-4))

// const median = (arr) => {
//     const len = arr.length
//     const mid = Math.floor(len /2)
//     if(len % 2 === 1) return arr[mid]
//     return (arr[mid - 1] + arr[mid])/2
// }
// console.log(median([27000, 36000, 42000]))

// const today = new Date()
// console.log(today.getFullYear())
// console.log(today.getMonth())

// const date = new Intl.DateTimeFormat('en-US', {dateStyle:"full"}).format(today)

// console.log(date.split('').filter(elt => elt !== ',' ).join('').split(" "))

// const numberYear = () =>{
//     let currentCash = 100000
//     let year = 0
//     while(currentCash < 1000000){
//         currentCash = currentCash + 0.1 * currentCash * (1 - 0.4)
//         year ++
//     }
//     return console.log(year)
// }

// numberYear()

// const challenge = (word) => {
//     const pairLetter = word.split('').filter((elt, indx)=>indx%2 ===0)
//     return [...[...(new Set(word.split(''))).difference(new Set(pairLetter))], ...pairLetter]
// }
// console.log(challenge('stive'))

// const number = [1, 1, 1, 4, 1, ,1, 1]

// const  detect = (arr) => arr.filter(elt=> arr.indexOf(elt) === arr.lastIndexOf(elt))[0]

// console.log(detect(number))

// console.log(new Intl.DateTimeFormat('fr-CM', {'dateStyle':'full'}).format(new Date()).split(' '))

// const userList = [
//     {name: 'John', safe: true},
//     {name: 'Joe', safe: false},
//     {name: 'Jack', safe: true},
// ]
// console.log(userList.every(({safe})=>safe))
// const date = new Intl.DateTimeFormat('en-us', {'dateStyle':'medium'}).format(new Date())
// const day = new Intl.DateTimeFormat('en-us', {'weekday':'long'}).format(new Date())

const practice = require('./newLearning')
const prac = practice()