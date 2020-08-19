
// Initialize new array
let names = ['John', 'Mark', 'Jane']
let years = new Array(1990, 1969, 1948)

console.log(names)
console.log(names.length)

//Mutate array data
names[1] = 'Ben'
names[names.length] = 'Mary'
console.log(names)

// Different data types

let john = ['Jonh', 'Smith', 1990, 'teacher', false]
john.push('blue')
john.unshift('Mr.')
console.log(john)

john.pop()
john.shift()
console.log(john)

console.log(john.indexOf(1990))

const isDesigner = john.indexOf('designer') === -1 ? 'Jonh is not a designer': 'John is a designer'

console.log(isDesigner)