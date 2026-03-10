let animals = ["dog", "cat", "mouse"]
// console.log(animals)

// Bob adopted a new cat
// 4 ways to alter an array by adding/deleting the first elements
// append means 'add to end'
// prepend means 'add to beginning'

animals.push("cat2") // adoption, add to end
// console.log(animals)

// pop()
let unlovedAnimal = animals.pop() // removes last element
// console.log(unlovedAnimal)
animals.unshift("cat2") // readopts animal to beginning of array
// console.log(animals)
animals.shift() // removes animal from beginning of array
// console.log(animals)

// new array
let houses = ["doghouse", "scratching post", "cage"]
// animals.push(houses)
// console.log(animals)

// spread operator
let newArray = [...animals, ...houses]
// console.log(newArray)

// Iterating through an array
// forEach()
// Adding an 's to each value in the array
// newArray.forEach(
//     // need a predicate (data)
//     function(doggy){ // anonymous function, defined within brackets
//     console.log(doggy + "'s")     // doggy must match
// })

// iterate an array
// map()
// difference between forEach() and map(): map() returns a NEW array!

let colors = ["blue", "yellow", "purple"]
let result = colors.map(function(data) {
    return data + "'s"
    }
)
// console.log(result)
// console.log(result.length)

// Modern Implementation:
// let result = colors.map(data => data + "'s");

// for(let i = 0; i < result.length; i++) {
//     console.log(result[i])
// }

// filtering aka filter()
// returns a new array with only the matching conditions

let words = ["cat", "house", "mouse"]
result = words.filter(function(kitty){
    return kitty.slice(1, kitty.length) === "ouse"
    }
)
console.log(result)