//Object Destructuring
/*
const person = {
    name: 'Steven',
    age: 25,
    location: {
        city: 'Iasi',
        temp: 144
    }
}

const { name: firstName = 'Anonymous', age } = person
const { city, temp: temperature } = person.location

console.log(`${firstName} is ${age}`)
console.log(`it's ${temperature} in ${city}`)


const book = {
    title: 'Ego is the enemy',
    author: 'Ryan something',
    publisher: {
    }
}

const { name: publisherName = 'self-published' } = book.publisher

console.log(publisherName)
*/

// Array Destructuring

/*
const address = ['Stefan Ciubotarasu 85', 'Iasi', 'Romania', 'RO']

const [, city = 'Vaslui', country] = address

console.log(`You are in ${city}, ${country}.`)
*/
const item = ['coffee (hot)', '2.00', '4.00', '6.00']
const [product, , mediumPrice] = item

console.log(`A medium ${product} costs $${mediumPrice}`)