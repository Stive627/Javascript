// class start{
//     constructor(color){
//         this.color = color
//     }
//     display(){
//         console.log(`The color is ${this.color}`)
//         this.startTime = performance.now()
//         this.frameId = requestAnimationFrame()
//     }
//     close(){
//         console.log(`The color before the close time is ${this.color}`)
//     }
// }
// const star = new start('white')
// star.display()

// const getMissingFuits = (purchasedFuits, availableFruits) => {
//     return purchasedFuits.reduce((a, c) => availableFruits.indexOf(c) === -1 ? [...a, c] : a , [])
// }
// const purchasedFuits = ['🍉','🍋','🥭','🥑','🍑']
// const availableFruits = ['🥭','🥑']
// console.log(getMissingFuits(purchasedFuits,availableFruits))

// function ArraytoObject(array) {
//     return array.reduce((a, c, i) => ({...a, [`key${i}`]:c}),{})
// }
// const arr = ['one', 'two', 'three', 'four']
// console.log(ArraytoObject(arr))

// const today = new Date(1737917806464)
// const day = new Intl.DateTimeFormat('fr-FR', {'hour':'2-digit', 'minute':'2-digit'}).format(today)
// const info = {
//     "cod":"200","message":0,"cnt":40,"list":[{"dt":1737936000,"main":{"temp":280.28,"feels_like":278.83,"temp_min":280.28,"temp_max":280.28,
//     "pressure":1013,"sea_level":1013,"grnd_level":984,"humidity":34,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky",
//     "icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.19,"deg":309,"gust":2.16},"visibility":10000,"pop":0,"sys":{"pod":"n"},
//     "dt_txt":"2025-01-27 00:00:00"},{"dt":1737946800,"main":{"temp":281.02,"feels_like":279.94,"temp_min":281.02,"temp_max":282.51,
//     "pressure":1013,"sea_level":1013,"grnd_level":985,"humidity":31,"temp_kf":-1.49},"weather":[{"id":800,"main":"Clear",
//     "description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.91,"deg":302,"gust":2.31},"visibility":10000,"pop":0,
//     "sys":{"pod":"d"},"dt_txt":"2025-01-2d7 03:00:00"},{"dt":1737957600,"main":{"temp":289.02,"feels_like":287.18,"temp_min":289.02,
//     "temp_max":293.39,"pressure":1014,"sea_level":1014,"grnd_level":985,"humidity":20,"temp_kf":-4.37},"weather":[{"id":800,"main":"Clear",
//     "description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.92,"deg":302,"gust":3.71},"visibility":10000,"pop":0,"sys":{"pod":"d"},
//     "dt_txt":"2025-01-27 06:00:00"},{"dt":1737968400,"main":{"temp":297.75,"feels_like":296.5,"temp_min":297.75,"temp_max":297.75,"pressure":1011,
//     "sea_level":1011,"grnd_level":982,"humidity":9,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
//     "clouds":{"all":0},"wind":{"speed":4.24,"deg":319,"gust":5.1},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-27 09:00:00"},
//     {"dt":1737979200,"main":{"temp":291.87,"feels_like":290.24,"temp_min":291.87,"temp_max":291.87,"pressure":1009,"sea_level":1009,"grnd_level":981,
//     "humidity":17,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.78,
//     "deg":355,"gust":2.86},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-27 12:00:00"},{"dt":1737990000,"main":{"temp":285.71,
//     "feels_like":283.65,"temp_min":285.71,"temp_max":285.71,"pressure":1011,"sea_level":1011,"grnd_level":983,"humidity":24,"temp_kf":0},
//     "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.43,"deg":349,"gust":2.4},
//     "visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-27 15:00:00"},{"dt":1738000800,"main":{"temp":283.54,"feels_like":281.31,"temp_min":283.54,
//     "temp_max":283.54,"pressure":1011,"sea_level":1011,"grnd_level":982,"humidity":26,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky",
//     "icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.09,"deg":316,"gust":2.1},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-27 18:00:00"},
//     {"dt":1738011600,"main":{"temp":281.91,"feels_like":280.47,"temp_min":281.91,"temp_max":281.91,"pressure":1011,"sea_level":1011,"grnd_level":982,
//     "humidity":29,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.55,"deg":325,"gust":2.56},
//     "visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-27 21:00:00"},{"dt":1738022400,"main":{"temp":280.36,"feels_like":278.7,"temp_min":280.36,"temp_max":280.36,
//     "pressure":1011,"sea_level":1011,"grnd_level":982,"humidity":34,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},
//     "wind":{"speed":2.46,"deg":353,"gust":2.45},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-28 00:00:00"},{"dt":1738033200,"main":{"temp":283.23,"feels_like":281.1,"temp_min":283.23,"temp_max":283.23,"pressure":1013,"sea_level":1013,"grnd_level":984,"humidity":31,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.92,"deg":288,"gust":2.17},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-28 03:00:00"},{"dt":1738044000,"main":{"temp":294.33,"feels_like":292.9,"temp_min":294.33,"temp_max":294.33,"pressure":1013,"sea_level":1013,"grnd_level":984,"humidity":15,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.75,"deg":267,"gust":1.76},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-28 06:00:00"},{"dt":1738054800,"main":{"temp":298.51,"feels_like":297.34,"temp_min":298.51,"temp_max":298.51,"pressure":1010,"sea_level":1010,"grnd_level":982,"humidity":9,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.04,"deg":273,"gust":2.23},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-28 09:00:00"},{"dt":1738065600,"main":{"temp":292.84,"feels_like":291.28,"temp_min":292.84,"temp_max":292.84,"pressure":1010,"sea_level":1010,"grnd_level":981,"humidity":16,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.45,"deg":49,"gust":1.43},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-28 12:00:00"},{"dt":1738076400,"main":{"temp":286.69,"feels_like":284.67,"temp_min":286.69,"temp_max":286.69,"pressure":1012,"sea_level":1012,"grnd_level":983,"humidity":22,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.63,"deg":125,"gust":2.62},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-28 15:00:00"},{"dt":1738087200,"main":{"temp":284.12,"feels_like":282.16,"temp_min":284.12,"temp_max":284.12,"pressure":1013,"sea_level":1013,"grnd_level":984,"humidity":34,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.56,"deg":133,"gust":4.41},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-28 18:00:00"},{"dt":1738098000,"main":{"temp":282.33,"feels_like":280.43,"temp_min":282.33,"temp_max":282.33,"pressure":1013,"sea_level":1013,"grnd_level":984,"humidity":45,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.43,"deg":130,"gust":4.28},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-28 21:00:00"},{"dt":1738108800,"main":{"temp":281.64,"feels_like":279.5,"temp_min":281.64,"temp_max":281.64,"pressure":1013,"sea_level":1013,"grnd_level":984,"humidity":57,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":5},"wind":{"speed":3.6,"deg":118,"gust":4.76},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-29 00:00:00"},{"dt":1738119600,"main":{"temp":284.08,"feels_like":282.61,"temp_min":284.08,"temp_max":284.08,"pressure":1015,"sea_level":1015,"grnd_level":986,"humidity":53,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":3},"wind":{"speed":3.38,"deg":123,"gust":9.16},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-29 03:00:00"},{"dt":1738130400,"main":{"temp":295.57,"feels_like":294.39,"temp_min":295.57,"temp_max":295.57,"pressure":1015,"sea_level":1015,"grnd_level":986,"humidity":20,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":11},"wind":{"speed":5.75,"deg":142,"gust":7.7},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-29 06:00:00"},{"dt":1738141200,"main":{"temp":298.93,"feels_like":297.9,"temp_min":298.93,"temp_max":298.93,"pressure":1011,"sea_level":1011,"grnd_level":983,"humidity":13,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":1},"wind":{"speed":5.28,"deg":152,"gust":6.14},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-29 09:00:00"},{"dt":1738152000,"main":{"temp":293.99,"feels_like":292.65,"temp_min":293.99,"temp_max":293.99,"pressure":1010,"sea_level":1010,"grnd_level":982,"humidity":20,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":3},"wind":{"speed":3.57,"deg":144,"gust":5.48},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-29 12:00:00"},{"dt":1738162800,"main":{"temp":287.13,"feels_like":285.47,"temp_min":287.13,"temp_max":287.13,"pressure":1012,"sea_level":1012,"grnd_level":983,"humidity":34,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.9,"deg":135,"gust":6.17},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-29 15:00:00"},{"dt":1738173600,"main":{"temp":284.45,"feels_like":282.81,"temp_min":284.45,"temp_max":284.45,"pressure":1012,"sea_level":1012,"grnd_level":983,"humidity":45,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.64,"deg":90,"gust":5.31},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-29 18:00:00"},{"dt":1738184400,"main":{"temp":283.23,"feels_like":281.68,"temp_min":283.23,"temp_max":283.23,"pressure":1012,"sea_level":1012,"grnd_level":982,"humidity":53,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.1,"deg":111,"gust":3.86},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-29 21:00:00"},{"dt":1738195200,"main":{"temp":283.38,"feels_like":281.79,"temp_min":283.38,"temp_max":283.38,"pressure":1011,"sea_level":1011,"grnd_level":982,"humidity":51,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":4},"wind":{"speed":3.29,"deg":119,"gust":4.91},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-30 00:00:00"},{"dt":1738206000,"main":{"temp":285.6,"feels_like":284.05,"temp_min":285.6,"temp_max":285.6,"pressure":1012,"sea_level":1012,"grnd_level":983,"humidity":44,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.35,"deg":113,"gust":9.23},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-30 03:00:00"},{"dt":1738216800,"main":{"temp":296.49,"feels_like":295.48,"temp_min":296.49,"temp_max":296.49,"pressure":1011,"sea_level":1011,"grnd_level":983,"humidity":23,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":5.51,"deg":136,"gust":7.65},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-30 06:00:00"},{"dt":1738227600,"main":{"temp":299.82,"feels_like":298.97,"temp_min":299.82,"temp_max":299.82,"pressure":1007,"sea_level":1007,"grnd_level":979,"humidity":18,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":5.88,"deg":160,"gust":6.84},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-30 09:00:00"},{"dt":1738238400,"main":{"temp":295.18,"feels_like":294.07,"temp_min":295.18,"temp_max":295.18,"pressure":1006,"sea_level":1006,"grnd_level":978,"humidity":24,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.36,"deg":172,"gust":4.83},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-30 12:00:00"},{"dt":1738249200,"main":{"temp":288.36,"feels_like":286.85,"temp_min":288.36,"temp_max":288.36,"pressure":1009,"sea_level":1009,"grnd_level":980,"humidity":35,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.2,"deg":170,"gust":3.18},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-30 15:00:00"},{"dt":1738260000,"main":{"temp":285.34,"feels_like":283.82,"temp_min":285.34,"temp_max":285.34,"pressure":1010,"sea_level":1010,"grnd_level":981,"humidity":46,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.78,"deg":128,"gust":2.8},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-30 18:00:00"},{"dt":1738270800,"main":{"temp":282.92,"feels_like":282.92,"temp_min":282.92,"temp_max":282.92,"pressure":1009,"sea_level":1009,"grnd_level":980,"humidity":55,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.06,"deg":130,"gust":1.11},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-30 21:00:00"},{"dt":1738281600,"main":{"temp":281.96,"feels_like":281.54,"temp_min":281.96,"temp_max":281.96,"pressure":1009,"sea_level":1009,"grnd_level":980,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.41,"deg":94,"gust":1.41},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-31 00:00:00"},{"dt":1738292400,"main":{"temp":285.16,"feels_like":283.8,"temp_min":285.16,"temp_max":285.16,"pressure":1011,"sea_level":1011,"grnd_level":982,"humidity":53,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.83,"deg":119,"gust":2.46},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-31 03:00:00"},{"dt":1738303200,"main":{"temp":295.87,"feels_like":294.82,"temp_min":295.87,"temp_max":295.87,"pressure":1011,"sea_level":1011,"grnd_level":982,"humidity":24,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.35,"deg":147,"gust":2.8},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-31 06:00:00"},{"dt":1738314000,"main":{"temp":299.35,"feels_like":299.35,"temp_min":299.35,"temp_max":299.35,"pressure":1008,"sea_level":1008,"grnd_level":980,"humidity":13,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.78,"deg":191,"gust":4.47},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-31 09:00:00"},{"dt":1738324800,"main":{"temp":294.61,"feels_like":293.28,"temp_min":294.61,"temp_max":294.61,"pressure":1007,"sea_level":1007,"grnd_level":979,"humidity":18,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.23,"deg":212,"gust":2.24},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2025-01-31 12:00:00"},{"dt":1738335600,"main":{"temp":287.8,"feels_like":285.92,"temp_min":287.8,"temp_max":287.8,"pressure":1010,"sea_level":1010,"grnd_level":981,"humidity":23,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.01,"deg":141,"gust":1.07},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-31 15:00:00"},{"dt":1738346400,"main":{"temp":285.58,"feels_like":283.71,"temp_min":285.58,"temp_max":285.58,"pressure":1011,"sea_level":1011,"grnd_level":982,"humidity":32,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.32,"deg":103,"gust":2.34},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-31 18:00:00"},{"dt":1738357200,"main":{"temp":284.59,"feels_like":283.07,"temp_min":284.59,"temp_max":284.59,"pressure":1010,"sea_level":1010,"grnd_level":981,"humidity":49,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.42,"deg":103,"gust":4.39},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2025-01-31 21:00:00"}],"city":{"id":1264728,"name":"Ludhiana","coord":{"lat":31.0048,"lon":75.9463},"country":"IN","population":15000,"timezone":19800,"sunrise":1737942657,"sunset":1737980801}}
// const arg = 'stive'
// console.log({'name':info.coord.lat, "weather":info.weather[0].description})

// const getValue = (obj) => {
//     return Object.values(obj)
// }
// const someOject = {'key0':'zero', 'key1':'one', 'key2':'two', 'key3':'three'}
// console.log(getValue(someOject))

// function getDayWeather(arr,date){
//     const meteoDay  = arr.reduce((a,c) => c.dt_txt.split(' ')[0] === date ? [...a, c] : a , [])
//     if(meteoDay.length !== 0){
//         return meteoDay
//     }
//     return 'The weather is not available for this day.'
// }

// var url = 'https://geolocation-35309290975.us-central1.run.app/forecast'
// const getTime = () => new Intl.DateTimeFormat('fr-FR', { 'year':'2-digit', 'weekday':'long','day':'2-digit','hour':'2-digit', 'minute':'2-digit'}).format(new Date(1738432800))
// const obj ={}
// const getWeather = async() => {
//         await fetch(url, obj).then((value) => value.json()).then((value) => console.log(getDayWeather(value.list, '2025-02-01'))).catch((err) => console.error(err)); 
//         }
// getWeather()
// const dat = new Date()
// console.log(dat.toISOString().slice(0,10))
// console.log('2024' === '2024')

// const getRandomArr = (arr) => {
//     return arr.sort(() => Math.random() - 0.5)
// }
// const arr = [12, 3, 8, 93, 7, 1, 21]
// // const num = Math.floor(Math.random()*(10))
// // console.log(window.navigator.userAgent)
// // console.log(getRandomArr(arr))

// function getSwappedOrder(array){
//     try {
//         for(i = array.length - 1; i > 1; i--){
//             const j = Math.floor(Math.random()*i);
//             [array[j], array[i]] = [array[i], array[j]]
//         }
//     } catch (error) {
//         console.debug('An error occured!\n' + error)
//     }
//     return array
// }

// function shuffleFisherYates(array) {
//     for ( i = array.length - 1; i > 1; i--) {
//       const j = Math.floor(Math.random()*i);
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }
// console.log(shuffleFisherYates(arr))

// const getRandomMonth = (years) => {
//     const randomNum = Math.floor(Math.random()*11)
//     return years[randomNum]
// }
// const years = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// console.log(getRandomMonth(years))

// function getWeather(arr,date){
//     const meteoDay  = arr.reduce((a,c) => c.dt_txt.split(' ')[0] === date ? [...a, c] : a , [])
//     if(meteoDay.length > 0){
//         return meteoDay
//     }
//     return 'The weather is not available for this day.'
// }
// async function getWeather2(){
//     let data
//     var uri = 'https://geolocation-35309290975.us-central1.run.app/forecast'
//     await fetch(uri).then((v) => v.json()).then(v => {data = v; return;}).catch(e => console.log(e))
//     return data
// }

// console.log(getWeather2().then(v => console.log(getWeather(v.list, '2025-01-31').length)))
// const firstDate = new Date('01/29/2025')
// const currDate = new Date()
// console.log(Math.floor( Math.abs(currDate - firstDate)/(1000 * 60 * 60 * 24)))
// console.log(1000 * 60 * 60 * 24)

// function getLeapYear(year){
//     if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0 )){
//         return true
//     }
//     return false
// }

// console.log(getLeapYear(2009))

// const date = new Date()
// const month = new Intl.DateTimeFormat('fr-FR',{month:'2-digit'}).format(date)
// console.log(typeof month)

// const getSubArr = (arr, size) => {
//    return arr.reduce((a, c) => a.slice(-1)[0].length < size ? [...a.slice(0, -1), [...a.slice(-1)[0], c]] : [...a, [c]], [[]])
// }
// const arrp = ['🍎','🍎','🍎','🍎','🍎','🍎']
// console.log(getSubArr(arrp, 3))

// function getHTML5DateTimeStringsFromDate(d) {
//     let ds = d.getFullYear().toString().padStart(4, '0') + '-' + (d.getMonth()+1).toString().padStart(2, '0') + '-' + d.getDate().toString().padStart(2, '0');
//     let ts = d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0') + ':' + d.getSeconds().toString().padStart(2, '0');
//     return [ds, ts];
//   }
// const udate = new Date()

// console.log(getHTML5DateTimeStringsFromDate(udate))

// const getCodedEmail = (email) => {
//     return email[0] + 'gmail.com'.padStart(email.length - 1, '*')
// }
// const emailId = 'fossistive627@gmail.com'
// // console.log(getCodedEmail(emailId))

// // const generateRandomNumber1 = () => Math.floor(Math.random()*149 + 1)
// // const generateRandomNumber2 = () => Math.floor(Math.random()*100)
// // console.log(generateRandomNumber1(), generateRandomNumber2())

// const data = [ 
//     [undefined, undefined, undefined, '01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31',undefined],
//     [undefined, undefined, undefined, undefined,undefined,undefined,'01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28',undefined],
//     [undefined, undefined, undefined, undefined,undefined,undefined,'01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31',undefined,undefined,undefined,undefined,undefined],
//     [undefined, undefined, '01', '02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30',undefined,undefined,undefined],
//     [undefined, undefined, undefined, undefined,'01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
//     ['01', '02', '03', '04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30',undefined,undefined,undefined,undefined,undefined],
//     [undefined, undefined,'01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31',undefined,undefined],
//     [undefined, undefined, undefined, undefined,undefined,'01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31',undefined,undefined,undefined,undefined,undefined,undefined],
//     [undefined, '01', '02', '03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30',undefined,undefined,undefined,undefined],
//     [undefined, undefined, undefined, '01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31',undefined],
//     [undefined, undefined, undefined, undefined,undefined,undefined,'01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30',undefined,undefined,undefined,undefined,undefined,undefined],
//     [undefined, '01', '02', '03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31',undefined,undefined,undefined],
// ]

// for(var i = 0; i < data.length; i ++){
//     console.log(data[i].length)
// }

// const checkSubset = (a1,a2) => {
//     return a1.every(elt => a2.includes(elt)) || a2.every(elt => a1.includes(elt))
// }
// const a1 = ['a', 'b', 'c']
// const a2 = ['a','d']
// console.log(checkSubset(a1, a2))

const newSkills = {name:'stive', uid:'24MCI10053', getPresentation:(name)=>console.log(`Hi, ${name}`)}
// console.log(newSkills.name)
newSkills.getPresentation('Stive')