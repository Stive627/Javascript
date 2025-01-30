
const format = () => new Intl.DateTimeFormat('fr-FR', {'hourCycle':'h24', 'hour':'2-digit'}).format(new Date())
const date = (new Date()).toString()
console.log(format().slice(0, 2))
console.log(typeof format())