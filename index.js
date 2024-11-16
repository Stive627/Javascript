//CLASSES
                            



















                                //Challenges

// challenge1
function Greeting(){
    let arr
     arr = [4, "John", 24, true, 25, 3]
    return arr.filter(data =>Number.isInteger(data)).reduce((a, b) => a+b)
    
}

// challenge2
const number = 348597
function reverse(){ 
    return String(number).split('').reverse().map(Number)

    }



const names = "sti"
function checkContainsNumber(){
    const list1 = names.toString().split('').map(Number)
    const arrNumber = list1.filter(Number.isFinite)
    if(arrNumber.length ===0){
        return true
    }
    else{
        return false
    }
    
}

const namdf = ['bonjour', 'maman', 'stive']

function checkcontains(){
    if(namdf.includes("stive")){
        return true
    }
    else{
        return false
    }

}

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'satursday', 'sunday']
const specifiedday = ['monday', 'friday']

function checklistoneinlisttwo(){
    return days.filter(day =>!specifiedday.includes(day))
}


const title =  "arnaud34"
function checNumberfast(){
    if(title.includes(Number.isFinite)){
        return true
    }
    else{
        return false
    }

}



// challenge 3
const smileArray =[';(', ':}', ':D']

function ValideSmile(){
    return smileArray.filter(smile => smile.includes(':') || smile.includes(';')).filter(smile => smile.includes(')') || smile.includes('D')).length
}

function isValideSmiley(isstring){
    return /^[:;][-~]?[)D]?[1-9]$/.test(isstring)
}


const data = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]
  function TakeStockeData(){
    
    const data = data.filter(da =>da.stocked ==true)
    return data
     
  }

// challenge 3
  const smileArra =[';(', ':}', ':D', ':)', ';-D']
  const second =[';(', ':}', ':]']

  function constsmilearray(smile){
    return /^[;:][~-]?[)(D)]$/.test(smile)
  }

  function isvalidsmiley(){
   return second.reduce((a, b) => a += constsmilearray(b),0)
  }
  const arer = [2,4,6,1, 45, 2,134]
  function maxim(){
   return arer.reduce((a, b)=>Math.max(a,b))

  }



// challenge 4

function GetRandomNumber(max, min){
    return Math.floor(Math.random() * (max -min) + min)
}

function GetRandomColor(){
    const [r, g, b] = Array.from({length:3}, color => GetRandomNumber(0, 256))
    return `RGB(${r}, ${g}, ${b})`
}

const arr_indexed =[ 'Monday', 'TUESDAY', 'FRIDAY', 'SATURSDAY', 'Monday', 'SUNDAY', 'Monday', 'WEDNESDAY', 'SUNDAY', 'THURSDAY', 'Monday', 'SATURSDAY', 'SATURSDAY', 'SATURSDAY', 'TUESDAY', 'TUESDAY', 'TUESDAY', 'FRIDAY']

function Noredundancy(){
    const rendered = []
    for(i = 0; i < arr_indexed.length; i++){
        if(rendered.includes(arr_indexed[i])){
            //pass
        }
        else{
            rendered.push(arr_indexed[i])
        }
    }
    return rendered
}
const timetable =[{'lundi':5, 'mardi':7}, {'lundi':34, 'mardi':29}]





// Challenge 5

const incomeList =[
    {
        name:'John', income:'32500'
    },
    {
        name:'Joe', income:'54000'
    },
    {
        name:'James', income:'42000'
    }
]

function CalcAverage(){
    var sum =0
    var i =0
    for(i = 0; i <incomeList.length; i++){
        sum = parseInt(incomeList[i]['income']) + sum
    }
    return Math.floor(sum/incomeList.length)
}

function shortcurt(){
    return ~~(incomeList.map(({income}) => +income).reduce((a, b) => a+b)/incomeList.length)
    
}



//challenge 5
const seconde = 60

const secondTominute = () =>{
    return (Math.floor(seconde / 60) + ":" + seconde % 60)
    
}

//challenge 6

const factorial = (n) => {
    return n == 0 || n == 1 ? 1 : ( n * factorial(n-1) )
}

//challenge 8
const dataset = ['Twix', 'Bounty', 'Butter', 'Sniker', 'Marks', 'Twix', 'Butter']

function WeightLoss(list) {
    return [...new Set(list)]
}



// challenge 9

const salary = [27000, 32000, 36000, 40000]

function getMedianSalary() {
    const len = Math.floor(salary.length/2)
    return len % 2 ? salary[len] : (salary[len - 1] + salary[len])/2 
}


// challenge 10

const arr = [1, 1000, 2, 2000]
let arr1 = [190, 5, 4200, 2, 776]
const smallest = []
const sumTwoSmallestNumber = (num) => {
    let min
    let index
    let newArray
    for (i = 0; i < 2; i++) {
        min = Math.min(...arr1)
        index = arr1.indexOf(min)
        newArray = arr1.filter(el => arr1.indexOf(el) !== index)
        smallest.push(min)
        arr1 = newArray
    }  
    
    return smallest.reduce((acc, n) => acc + n)

}



function shortcurt(num) {
    const [a, b] = num.sort((a, b) =>  a - b)
    return a + b
}

const date1 = new Date('2024-10-14')
const date2 = new Date('2024-10-15')
const diff = date2 - date1
const hour =  new Date().toLocaleString().slice(11, 19)


// const time1 = '11:25'
// console.log(time1.split(':').map(t => +t))

// challenge11

const char = ['one sport', 'three', 'seven', 'eleven', 'twelve']
const char1 = ['Telescope', 'glass', 'eye']
const obj = [ { 'a': 2}]
const sortStringAscendignItemList = (itemList) => {
    var newChar = []
    var id = 0
    var answer = []
    itemList.forEach(character => {

        newChar = [...newChar, {id:id, length:character.length, value:character}]
        id ++
    });
    const sortNewChar = newChar.sort((a, b) => a.length - b.length)
    sortNewChar.forEach(element => {
        answer = [...answer, element.value]
    });
    return answer
}

const short = (itemList) => {
    return itemList.sort((a, b) => a.length - b.length)
}


function checkDate() {
    const datee1 = new Date('2024-09-12T18:05:52.608Z') 
    const datee2 = new Date('2025-09-12T18:04:52.608Z')
    
    return datee2.getDate()
}

const pettyCash = [1, 1 / 4, 1 / 7, 1 / 10, 1 / 13, 1 / 16]
const sample = [1, 1 / 2, 1 / 2]

function dispalyPettyCash(item) {
    const res = item.reduce((a, b) => a + b)
    return String(res).indexOf('.') == -1 ? res : parseFloat(res.toFixed(2))
}

const priceList = [1, 4, 5, 19, 21, 2]
const teste = [1, 2, 3]

function MinMax(arr) {
    return [arr.sort((a,b) => a-b)[0], arr.sort((a, b) => a-b).slice(-1)[0]]
}
function shortMinMax() {
    const datae = [1970, 0, 1]
    return new Date(...datae).toString()
}
const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'satursday', 'sunday']

const obje = [
    { id: 1, name: 'arnaud', age: 22 },
    { id: 3, name: 'stive', age: 40 },
    { id: 7, name: 'loic', age: 50 },
    { id: 2, name: 'arnaud',  age: 16 },
    { id: 14, name: 'arnaud', age: 25 },
    { id: 8, name: 'loic', age: 21 },
    { id: 45, name: 'stive', age: 87 }
]
const display = []
let  unique = []
obje.forEach(e => {
    unique.push(e.name)
})
unique = [...new Set(unique)]
unique.forEach(a => {
    display.push((obje.filter(e => e.name == a)).sort((a, b) => a.id - b.id).reverse())
})

const numb = [':)', ';}', ';-D', ';(', ':}', 'a']

function smilley(el) {
    return /^[:;][-~]?[)D]$/.test(el)
}

const de = new Date('2024-09-15T16:29:09.942Z')
const de2 = new Date('2024-12')
// console.log(numb.filter(n => smilley(n)))

let titles
const date = 'Mon'
const weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satursday', 'Sunday']
for (i = 0; i < weeks.length; i++){
  if ((weeks[i]).includes(date)) {
      titles = weeks[i]
  }
}
// console.log(de2.toString().split(' ')[0])


//Challenge 12
const sam = 'a22bc1'
const corruptedId = 'skkiuUE197'

const extractId = (corruptedId)=>{
    return  +corruptedId.split('').map(el =>+el).filter(el => Number.isInteger(el)).join('') +1
}
const shortCorruptedID = (corruptedId) => {
    return corruptedId.match(/\d+/)
}
const bag = {
    name: 'pencil',
    size:'1m',
    name: 'food',
    size:'1.8m'
}

// Challenge 13
const currentCashExemple = 100000
const interestExemple = 1.1
const taxExemple = 0.05

const currentCash = 1000
const interest = 1.1
const tax = 0.5

function YearCalculator(currentCash, interest, tax) {
    var year = 0
    while (currentCash <= 1000000) {
        currentCash += interest * currentCash * (1 - tax)
        year ++
    }
    return year
}

/*Challenge 14
'abcde' => ['b', 'd', 'a', 'c', 'e']
'zoe' => ['o', 'z', 'e']
*/

const numbers = [190, 5, 4200, 2, 776]

function Encrypt(text) {
    const even = []
    const odd = []
    const arr = Array.isArray(text) ? text : text.split('')
    arr.forEach(element => {
        if (text.indexOf(element) % 2 === 0) {
            even.push(element)
        }
        else {
            odd.push(element)
        }
        
    });
    return [...odd, even]
    
}
function shortc(text) {
    const textArray = [...text]
    const evenArray = textArray.filter((element, index) => index % 2 === 0)
    const oddArray = textArray.filter((element, index) => index % 2 != 0)
    return [...oddArray, ...evenArray]
}

const sam1 = [1, 1, 1, 2, 1]
const sam2 = [1, 1, 1, 1, 5, 1]
const num = [1, 1, 1, 1, 1, 2, 1]
var dict = {}
function detect(numbers) {
    var singleEl = 0
    var single = [... new Set(numbers)]
    single.forEach(element => {
        if (numbers.filter(el => el === element).length === 1) {
            singleEl = element
        }  
    });
    
    return singleEl
    
}
function shortDetect(numbers) {
    for (let i in numbers) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
            return numbers[i]
        }
    }
}

const dat =  new Date()
function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        {'weekday':'long'}
    ).format(date)
}

const userList = [
    { name: 'John', safe: true },
    { name: 'Joe', safe: false },
    { name:'Jack', safe:true}
]

function isUserListSave(userList) {
    const stat = userList.filter(({safe}) => safe == true)
    return stat.length === userList.length 
}

function shortIsUserListSave(userList) {
    return userList.every(({safe}) =>safe)
}

//Challenge 19

const peopleList = [
    { name: 'john', isDoctor: false},
    { name: 'jack', isDoctor: true },
    {name:'joe', isDoctor:false}
]
const test = []

function isThereAtLeastOneDoctor(peopleList) {
    return peopleList.filter(({isDoctor}) => isDoctor).length > 0
}

function shortIsThereAtLeastOneDoctor(peopleList) {
    return peopleList.some(({isDoctor}) => isDoctor)
}

const username1 = 'stive'

const username2 = 'arnaud95'

function validUsername(username) {
    return username.matchAll(/[a-zA-Z]/)
}

const namess = peopleList.map(({ name }) => name)
const d1 = new Date()

const len =5

const ar = Array(len).fill(false)
const b = ar
 b[0] = true

// Challenge 20
const peoplelist = ['John', 'Jack', 'Joe']
 
const sortImmutable = (peoplelist) => {
    return [...peoplelist].sort((a,b) => a.localeCompare(b))
}

//Challenge 21
const p = [{ name: 'John' }, { name: 'Jack' }, { name: 'Joe' }]
const w = ['32000', '40000', '46000']

function addMissingWages(peopleliste, wageliste) {
    return peopleliste.map((e, index) =>({...e, wage:wageliste[index]}))
}

//Challenge 22

const startDistanceList = [1, 2, 3]
const someStar = { name: 'someStar', distance:3}

const startDistanceListSince1970 = [467389, 498223, 417905]
const star = { name: 'Canopus', distance: 490414 }

const isStarDangerous = (listDistance, {distance}) => {
    return distance < (listDistance.reduce((a,b) => a+b)/listDistance.length)
}

// console.log(isStarDangerous(startDistanceList, someStar))


const checkFilename = (filename) =>{
    return /^\.(?:png|svg)/.test(filename)
}
// console.log(checkFilename('.pngstive, pa'))

const MatchWord = () => {
    return 'stive arnaud'.match(/\w+(?= arnaud)/)
}
// console.log(MatchWord())

// Challenge 23
const abc = 'abc'
const azerty = 'azerty'

const getWordScore = (word) => {
    return [...word.toLowerCase()].reduce((acc, b) => acc + b.charCodeAt(0)-96, 0)
}
// console.log(getWordScore(azerty))

// Challenge 24

const sentence = "Pablo Escobar is a drug dealer"
const sentence1 = "I like india"


const getWordHighestScore = (sentence) => {
    const hightWordScoreSentence = sentence.split(' ').map(el =>(getWordScore(el))).reduce((num, b) => Math.max(num, b))
    return sentence.split(' ').filter(el => getWordScore(el) === hightWordScoreSentence)[0]
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

function getLetterScore(letter) {
    return alphabet.indexOf(letter) + 1
}
function getWordScores(word) {
    return [...word].reduce((wordScore, letter) => getLetterScore(letter) +  wordScore, 0)
}

function shortgetWordHighestScore(sentences){
    const scoreListe = sentences.split(' ').map(word => getWordScores(word))
    const indexWordMax = scoreListe.indexOf(Math.max(...scoreListe))
    return sentences.split(' ')[indexWordMax]
}
// console.log(shortgetWordHighestScore(sentence))

function resolveAfter2Second(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x)
        }, 2000);
    })
}
async function f1() {
    const x = await resolveAfter2Second(10)
    console.log(x)
}

//Challenge 25

// const example25 = [0, 1, -2] => [0, -1, 2]
// const examples25 = [0, -2, 3, -4, 5] => [0, 2, -3, 4, -5]
const example25 = [0, 1, -2]
const numberList = [0, -2, 3, -4, 5]

function invert(numberList) {
    return numberList.map(numbi => numbi !== Math.abs(numbi) ? Math.abs(numbi) : numbi >0 ? -numbi : numbi) 
}

// function shortInvert(numberList) {
//     return numberList.map(n => 0 - n)
// }

const students = [
    { name: 'stive', email: 'fossistive627@gmail.com', age: 27, date: new Date('2000-01-10T00:17') },
    { name: 'arnaud', email: 'digitalwaycameroun@gmail.com', age: 16, date: new Date('2000-01-10T00:12')},
    {name:'loic', email:'renoluxcameroun@gmail.com', age:28, date: new Date('2000-01-10T00:21')}
]
const youngStudent = students.reduce((acc, student) => Math.min(acc, student.date), students[0].date)

const oldStudent = students.filter(stud => stud.date.getTime() ===youngStudent)
const day = new Date('2000-01-10T00:17')

const da = new Intl.DateTimeFormat(
    'en-us',
    {'weekday':'long'}
).format(day)

const ded = new Date('2000-01-10T00:00')
const d2 = new Date('2000-01-10T00:05')

// console.log(d2 -ded)
let les = ''; // Initialize les with an empty string

function f1() {
  les = 'stive';
  console.log(`the value of let is ${les}`);
}

function f2() {
  console.log(`the value of let is ${les}`);
}

// console.log('jule'.localeCompare('stive'))

const ara = [1, 2, 3]
// console.log(new Date())

//Challenge 26

const singers = [
    { name: 'John', music: ['classic', 'rap', 'disco'] },
    { name: 'Jack', music: ['classic', 'disco'] },
    { name: 'Joe', music: ['jaz'] }
]

function getMusicList(sings) {
    let music = []
    sings.forEach(element => {
        music = [...music, ...element.music]
    });
    return [...new Set(music)]
}
const shortGetMusicList = ( sings ) => {
    return [... new Set(sings.flatMap(({music}) => music))]
}
// console.log(shortGetMusicList(singers))

// Challenge 27
// [1, 2] , [2, 3] => [1, 3]
// [1, 2, 3], [2, 5, 3] => [1, 5]

const rom = [1, 2, 3]
const virtualRoom = [2, 5, 3]

function getGuestList(rom, virtualRoom) {
    const arr = [...rom, ...virtualRoom]
    const singleEl = []
    for (i = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            singleEl.push(arr[i])
        }
    }
    return singleEl
}

function shortGuestList(room, virtualRoom) {
    const newArr = [...room, ...virtualRoom]
    return newArr.filter(el => newArr.indexOf(el) === newArr.lastIndexOf(el))
}
// console.log(shortGuestList(rom, virtualRoom))

/* Challenge 28
 1992 =>'20th century'
 1900 => '19th century'
 2001 => '21th century'
*/
const year = 2100

function getCentury(year) {
    return  `${Math.ceil(year/100)}th century `
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

// console.log(validateEmail('fossistive627@gmail.com'))
// console.log(false || true ? 'bonjour' : 'salut')

/* Challenge 29
'fuck' => ''
'Fuck you poor geek !  FUCK ! => ' you poor peer ! ! '
*/

// const comment = 'Fuck you poor geek  ! FUCK !'

// function getSafeComment(comment) {
//     return comment.replace(/fuck/gi, ' ')
// }

// console.log(getSafeComment(comment))
// The bracket match all the words inside the bracket
// const samp = 'every morning, i take Every new strength and motivation to fight against every difficulty of the life'
// const letter = 'aaaabb hb'
// console.log(samp.match(/[h, i]/g))

const comment = 'This video is cool... bastard !'
const insults = ['fuck', 'shit', 'crap', 'bastard']

const checkword = (w) => {
    return /stive/gi.test(w)
}

function isCommentSafe(comment) {
   
    return comment.split(' ').filter(n => checkword(n))
}

function isCommentSafeShortcurt(insults, comment) {
    return comment.split(' ').some(com => insults.includes(com))
    
}

// console.log(isCommentSafeShortcurt(insults, comment))

/* Challenge 31
examples
'This video is SHIT' => true
'This video is cool' => false
const comment = 'This video is cool... bastard !'
*/
const commentf = 'This video is cool'
const insultsf = ['fuck', 'shit', 'crap', 'bastard']

function commentIsReallySafe(commentf, insultsf) {
    const wordMatching = (word) => /(fuck|shit|crap|bastard)/i.test(word)
    return commentf.split(' ').some(wordMatching)
}

function commentIsReallySafeShort(commentf, insultsf) {
    return insultsf.some(insult => commentf.match(RegExp(insult, 'gi')))
}
// console.log(commentIsReallySafeShort(commentf, insultsf))

const safeUsername = (word) => /[0-9]/.test(word)

const UsernameTest = (username) => {
    return safeUsername(username) ? 'Good username' : 'Wrong username'
}
// console.log(UsernameTest('stive2'))

/*
Challenge 32
EXEMPLE 
[
[0, 0, 0, 0, 0], // 🎈🎈🎈🎈🎈
[1, 1, 0, 0, 0], // 🎗️🎗️🎈🎈🎈
[1, 1, 0, 0, 0], // 🎗️🎗️🎈🎈🎈
[0, 0, 0,  1, 1] // 🎈🎈🎈🎗️🎗️
]
 */

const map =
    [
        [0, 0, 0, 0, 0], // 🎈🎈🎈🎈🎈
        [1, 1, 0, 0, 0], // 🎗️🎗️🎈🎈🎈
        [1, 1, 0, 0, 0], // 🎗️🎗️🎈🎈🎈
        [0, 0, 0, 1, 1] // 🎈🎈🎈🎗️🎗️
    ]
    
function countIslands(map) {
    let sentence =''
    const change = (arr) => arr.map(el => el === 0 ? '🎈' : '🎗️')
    const good = map.map(change)
    good.forEach(element => {
        sentence = sentence + element.join('') + '\n'
    });
    return sentence
}

const  countIslandsShort = (map) => {
    return map.reduce((numb, b) => numb + b.filter(Boolean).length, 0)
}
const  countIslandsShortFlat = (map) => {
    return map.flat().filter(Boolean).length
}
// console.log(countIslandsShortFlat(map))

//Challenge 33

/*
const map =
    [
        [0, 0, 0, 0, 0], // 🎈🎈🎈🎈🎈
        [1, 1, 0, 0, 0], // 🎗️🎗️🎈🎈🎈
        [1, 1, 0, 0, 0], // 🎗️🎗️🎈🎈🎈
        [0, 0, 0, 1, 1] // 🎈🎈🎈🎗️🎗️
    ]
    => 30%
*/

const mapPercentage =
    [
        [0, 0, 0, 0, 0], 
        [1, 1, 0, 0, 0], 
        [1, 1, 0, 0, 0], 
        [0, 0, 0, 1, 1] 
    ]

function IlePercentage(map) {
    const numIles = map.reduce((acc, n) => acc + n.filter(Boolean).length, 0)
    return Math.floor((numIles*100)/map.flat().length) + '%'
}
const shortIlesPercentage = (map) => {
    const numIles = map.reduce((acc, n) => acc + n.filter(Boolean).length, 0)
    return `${Math.round(numIles/map.flat().length * 100)}%`
}
// console.log(shortIlesPercentage(mapPercentage))
// console.log(2 ** 2)
/*
Challenge 34
    [
        [0, 0, 0, 0, 0], 
        [1, 1, 0, 0, 0], 
        [1, 1, 1, 1, 1], 
        [0, 0, 0, 1, 1] 
    ]
    => false

 */

const mape =    [
    [0, 0, 0, 0, 0], 
    [1, 1, 0, 0, 0], 
    [1, 1, 1, 0, 1], 
    [0, 0, 0, 1, 1] 
]

function isSafeForBoatVertical(mape) {
    const checkBooleanArr = (arr) => { filter = arr.filter(Boolean); if (filter.length === arr.length) { return true }; return false }
    return !mape.some(checkBooleanArr)
}

function shortisSafeForBoatVertical(mape) {
    return mape.every(line => line.some(n => !n))
}

function suggestShortSafeForBoatVertical(mape) {
    return mape.some(line=> line.every(Boolean))
}
// console.log(suggestShortSafeForBoatVertical(mape))
// console.log(shortisSafeForBoatVertical(mape))
// console.log(['a','a'].some(n => !n))

/*Challenge 35
    [
        [1, 1, 0, 1, 0], 
        [0, 0, 0, 1, 0], 
        [1, 0, 0, 1, 0], 
        [0, 0, 0, 1, 0] 
    ]
    => false
*/
const mapesea =    [
    [1, 1, 0, 1, 0], 
    [0, 0, 0, 1, 0], 
    [1, 0, 0, 1, 0], 
    [0, 0, 0, 0, 0]  
]

let arrb = []
function isSafeForBoatHorizontal(mapesea) {
    for (i = 0; i < mapesea[0].length; i++){
        arrb.push(mapesea.every(line=>  line[i]))
    }
    return !arrb.some(Boolean)
}

// console.log(isSafeForBoatHorizontal(mapesea))

/* Challenge 36
[[[[[[['✌️']]]]]]]
*/
const jail = [[[[[[['✌️']]]]]]];

function escapeFromJail(jail) {
    return jail.flat(7)[0]
}
function shortEscapeFromJail(jail) {
    return jail.join('')
}
// console.log(shortEscapeFromJail(jail))


/*
Challenge 37

['✌️'] => 1
[[[[[[['✌️']]]]]]] => 7
*/
let depth = 0
const jaild = [[[[[[['✌️']]]]]]]
const jaildTest = [['✌️']]

function escapeFromJailDepth(jail) {
    let insideArr = jail.slice()
    while (Array.isArray(insideArr[0])) {
        insideArr = insideArr.flat()
        depth ++
    }
    return depth + 1
}
function shortEscapeFromJailDepth(jail) {
    return Array.isArray(jail) ? 1 + Math.max(0, ...jail.map(shortEscapeFromJailDepth)) : 0
}
// console.log(escapeFromJailDepth(jaild))

const arrs = [2, 2,   2, 2]
const testS = arrs.some(n=>!n)
// console.log(Math.max(0, ...[1,2]))

const tab = [1, 2, 3]
tab[0] = 5
// console.log(tab)

/*
Challenge 38

[1,2], [1] => [2]
 */
const fruitPurchased = [1, 2, 3]
const fruitAvailable = [2]

function getFruitMissing(fruitPurchased, fruitAvailable) {
    return fruitPurchased.filter(fruit => !fruitAvailable.includes(fruit))    
}

// console.log(getFruitMissing(fruitPurchased, fruitAvailable))
const wee =[{done:false, day:'Monday'}, {done:true, day:'Tuesday'}]
// console.log(wee.filter(({ done }) => !done))

/*
Challenge 39
['zero'] =>{key0:'zero'}
['zero', 'one', 'two'] => {key0:'zero', key1:'one', key2:'two'}
*/

const someArray = ['zero', 'one', 'two']

function ArrayToObject(someArray) {
    const objArr = someArray.map((elt, index) => 'key' + String(index))
    let obj={}
    someArray.forEach(elt => {
        obj[objArr[someArray.indexOf(elt)]] = elt
    });
    return obj
}

function shortArrayToObject(someArray) {
    return someArray.reduce((prev, curr, index) => {return {...prev, [`Key${index}`]: curr}}, {})
}
// console.log(shortArrayToObject(someArray))

//Noti Challenge

const datesEvent = [[{ date: '2024-10-09', name: 'Stive' }], [{ date: '2024-10-18', name: 'Arnaud' }], [{ date: '2024-10-15', name: 'rodrigue' }]]
// console.log(datesEvent)
// console.log(datesEvent.sort((a, b) => b[0].date.localeCompare(a[0].date)))

/*
Challenge 40
 {key0:'zero'} => ['zero']
 {key0:'zero', key1:'one', key2:'two'} => ['zero', 'one', 'two'] 
*/

const someObject = { key0: 'zero', key1: 'one', key2: 'two' }

function objectToArray(someObject) {
    return Object.values(someObject)
}
// console.log(objectToArray(someObject))
const da1 = new Date('2024-10-16')
const da2 = new Date('2024-10-17')
// console.log((da2 - da1)/1000)

/*
Challenge 41

[1,2,3,4] => [3,2,4,1]...[4,1,3,2]

*/

async function fetchProducts() {
    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the parsed JSON object or throw an error
      const data = await response.json();
      console.log(data[0].name);
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
//   console.log((fetchProducts().catch((error) => error)));

const cards = [1, 2, 3, 4, 5]

function shuffle(cards) {
    let  randomArray = [1, 3]
    while([ ... new Set(randomArray)].length<5){
        const randomIndex = Math.floor(Math.random()*cards.length)
        randomArray =randomArray.push(cards[randomIndex])
    }

   
    return randomArray
}

function shortShuffle(cards){
    return cards.sort(() =>Math.random() - 0.5)
}
// console.log(shortShuffle(cards))

//Challenge 42
/*
a[i] = a[j]
i is between n-1 and 0
j is a random number between 0, i.
[1, 2, 3, 4] => [3, 2, 4, 1] ... or [4, 1, 3, 2]
*/

const array = [1, 2, 3, 4]

function shuffleFisherYate(array){
    const arr = [...array]
    for(i === array.length -1 ; i >0; i--){
        const j = Math.floor(Math.random()*i)
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

function permutat(array){
    
    [array[0], array[1]] = [array[1], array[0]]
    return array
}
// console.log(shuffleFisherYate(array));


const date11 = new Date()

const day111 = date11.getTime()
// console.log(true || false)

/*
Challenge 51

"There is 1 credit card code: 1234" =>[1234]
"I stole these 2 blue card codes : 2888 and 1952" => [2888, 1952]

*/

const message = "I stole these 2 blue card codes : 2888 and 1952"

function extractCreditCard(message){
    return message.split(' ').filter(elt => /\d\d\d\d/.test(elt)).map(elt => +elt)
}

function shortExtractCreditCard(message){
    return [...message.matchAll(/\d{4}/g)].map(elt => +elt[0])
}

// console.log(shortExtractCreditCard(message))

// console.log(/\p{Script=Greek}/u.test('α'))
// console.log(/\d'\d*'/.test("9''"))
// console.log(/neighbou?r/.test('rap'))

/*
Challenge 52

32px => 32
32 rem => 32
*/

const widthPx = '32px'
const widthRem = '32rem'
const widthPercent = '32 %'

function extractCSSValue(width){
    return width.match(/\d{2}/g).map(elt => + elt)[0]
}

// console.log(extractCSSValue(widthRem))

// const datetime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/
// console.log(datetime.test('09-02-2003 11:54'))

// let cartoonCrying = /boo+(hoo+)+/i
// console.log(cartoonCrying.test('boohoooohoohooo'))


/*
Challenge 53

2001 => false
2004 => true

*/

const yeare = 2004

function isLeap(yeare){
    if(yeare % 400 === 0  || (yeare % 4 === 0  && yeare % 100 !== 0))  return true
    return false
}

function shortIsLeap(yeare){
    return yeare % 400 === 0 || (yeare % 4 === 0 && yeare % 100 !== 0 )
}
// console.log(shortIsLeap(yeare))

let match = /\d+/.exec(' one two 100')
let matchT = 'one two 100'.match(/\d+/)
// console.log(matchT)
// console.log(matchT.index)

/*
Challenge 54

[1, 2]  [3, 4] => [[1, 3], [2,4]]

zip(arr1, arr2, arr3) => [[1, 4, 7],[2, 5, 8],[3, 6, 9]

*/

const ar1 = [1,34,3]
const ar2 = [4,5,6]
const ar3 = [7,58,9, 23]

function zip(...arrays){
    const len = [...arrays].length
    let arr = [], add = []

    for(var i = 1; i <=len ; i++){
        let index = i
        for(var j = i; j <i+3; j ++){
            add = [...add, index]
            index = index + len
        }
        arr = [...arr, add]
        add = []
    }

    return arr

}


function shortZip(...arrays){
    const len = [...arrays].length
    const arr = [...arrays]

    if(len === 1){
        return arr
    }

    for(i = 0; i < len; i++){
        if(arr[i].length !== arr[0].length){
            throw new Error('The array have differents sizes.')
        }
    }

    const arrf = arr[0].map((elt, index) =>{
        let ar = [elt]
        for( var i = 1; i < len; i++){
            ar = [...ar, arr[i][index]]
        }
        return ar
    })

    return arrf

}
// console.log(shortZip(ar1, ar2, ar3))


/*
Challenge 54.

['a', 'b', 'c'], [1, 2, 3] => { a:1, b:2, c:3 }
*/

const keys = ['a', 'b', 'c']
const values = [1, 2, 3]

function zipObject(keys, values){
    return keys.reduce((acc, curr, indx) =>{return {...acc, [curr]:values[indx]}},{})
}

// console.log(zipObject(keys, values))

// let quotedText = /'([^']+)'/
// console.log(quotedText.exec("She said  'hello'"))
// console.log(/[^\d]/.test('h'))
// console.log(/bad(ly)?/.exec('bad'))
// console.log(/(\d)+/.exec('123'))
// console.log(/(?:na)+/.exec('banana'))

/*
Challenge 56

Exemple

"I have a cat and a dog, but I prefer dog" =>[
    {word: "i", count: 1},
    {word: "have", count: 1},
    {word: "a", count: 2},
    {word: "cat", count: 1},
    {word: "and", count: 1},
    {word: "dog", count: 1},
    {word: "but", count: 1},
    {word: "prefer", count: 1},
    ]
*/

const paragraph = "I have a cat and a dog, but I prefer dog"

function countWords(paragraph){

    const paragraphArr = paragraph.split(' ')
    const paragraphSingleArr = [...new Set(paragraphArr)]

    return paragraphSingleArr.reduce((acc, curr) => { return [...acc, {word:curr, count:paragraphArr.filter(elt => elt === curr).length}]}, [])

}

// console.log(countWords(paragraph))
// si tu veux souhaiter hbd a ma mere voici le numero +237 676160451
/*
Challenge 57

Exemples

"radar" => true
"dog" => false
*/

const word = 'raar'

function isPalindromeWord(word){
    const words = [...word]
    if(words.length % 2 === 1){
        const wordTest = words.splice(Math.floor(word.length / 2), 1)
        return  words.every(elt => words.indexOf(elt) + words.lastIndexOf(elt) === words.length - 1)
    }
    return  words.every(elt => words.indexOf(elt) + words.lastIndexOf(elt) === words.length - 1)

}

function shortIsPalindromeWord(word){
    const words = [...word]
    const len = words.length
    const mid = Math.floor(words.length/2)
    if(words.length % 2 === 1) return words.slice(0, mid).every((elt, indx) => elt === words.slice(mid + 1)[mid - 1 -indx])
    return words.slice(0, mid).every((elt, indx) => elt === words.slice(mid)[mid - 1 -indx])
}
// console.log(shortIsPalindromeWord(word))

/*
Challenge 58

"127.0.0.1" => true
"256.0.0.1" => false
*/

const ip = "25.0.0.1"

function isValidIp(ip){
    const checkIp = (elt) =>  parseInt(elt) >= 0 && parseInt(elt) < 256
    if(/^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/.test(ip)){
        let [_, first, second, third, four] = /(\d{1,3}).(\d{1,3}).(\d{1,3}).(\d{1,3})/.exec(ip)
        return checkIp(first) && checkIp(second) && checkIp(third) && checkIp(four)
    }
    return false
}
// console.log(isValidIp(ip))

/*
Challenge 59

'john.doe@gmail.com' => "j*******@g****.c**"
*/

const email = 'john.doe@gmail.com'

function maskEmail(email){

    return email[0] + Array(/^[^@]*/.exec(email)[0].length - 1 ).fill('*').join('') + '@g****.c**'
}
// console.log(maskEmail(email))

/*
Challenge 60

[1,2,3] , 0 , 0 => 1
[1,2,3,4,5], 0,1 =>3
*/

const arry = [ 1, 2, 3, 4, 5 ]
const start = 0
const end = 1

function sumArrayBetweenIndexes(arry, start, end){
    return arry.slice(start, end+1).reduce((acc, curr) => acc + curr, 0)
}

// console.log(sumArrayBetweenIndexes(arry, start, end))

/*
Challenge 61

['🍎'] =>{'🍎' : 1}
['🥔','🍎', '🍎', '🧅', '🥔'] => {'🥔':2, '🍎':2, '🧅':1}
*/

const ingredients = ['🥔','🍎', '🍎', '🧅', '🥔', '🍎']

function countIngredients(arr){
    return [...new Set(arr)].reduce((acc, curr) =>{return {...acc, [curr]:arr.filter(elt => elt === curr).length}}, {})

}

// console.log(countIngredients(ingredients))

/*
Challenge 62

a(bc) =>"a"
"Hello (world)!" => "Hello !"
*/

const text = "Hello (world)!";

function cleanSpeech(text){
    return text.replace(/[(][^)]*[)]/g, '')
}

// console.log(cleanSpeech(text))


function delays(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(resolve({username:"stive"}), ms);
    })
}

async function tests(){
    try{
    console.log('That is the first sentence')
    await delays(5000000).then((value) => console.log('My username is', value.username))
    console.log('The promise is completed')
    }
    catch(error){
        console.log(error.message)
    }
}

// console.log(tests())

/*
Challenge 63

Exemples 

"Un" => 2
"Un deux trois" => 5
*/

const texxt = "Un deux trois"

function findLongestWordLength(text){
    return text.split(' ').sort((a, b) => b.length - a.length)[0].length
}

// console.log(findLongestWordLength(texxt))

/*
Challenge 64
Exemples
[1, 1, 2] => [1]
[1, 2, 3, 2, 1] => [2, 1
*/

const arra = [1, 2, 3, 2, 1 ] 

function findDuplicateNumbers(arr){
    return [... new Set(arr)].reduce((acc, curr) => {return arr.filter((elt) => elt === curr).length > 1 ? [...acc, curr] : acc}, [])
}

// console.log(findDuplicateNumbers(arra))

/*
Challenge 65
"abb" => 2
"abbccc" => 3
 */

const texti = "abbcccc"

function findLongestSubstring(text){
    return [...new Set(text.split(""))].map(elt => text.split("").filter(el => el === elt).length).sort((a, b) => b - a)[0]
}

// console.log(findLongestSubstring(texti))

/*
Challenge 66

"z" => 0
"a" => 1
"abc" => 1
"Hello world" => 3
*/

const te = "Hello worlda"

function countVowels(text){
    const vowelArr = ['a', 'e', 'i', 'u', 'y', 'o']
    return text.split("").reduce((acc, curr) => {return vowelArr.includes(curr)? acc + 1 : acc}, 0)
}
// console.log(countVowels(te))

/*
Challenge 67
EXEMPLES

delayAndSquare(2, 1000) => 4 (apres une seconde)
delayAndSquare(3, 2000) => 9 (apres deux secondes)

*/

const numbr = 2
const dly = 2000

function delayAndSquare(number, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>resolve(number ** 2), delay)
    })

}

console.log(delayAndSquare(numbr, dly).then((value) => console.log(value)).catch((error) => console.log('An error occured', error)))