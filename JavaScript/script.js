// (function(){
//     // func something
// })()
// // IIFE - Immediately Invoked Function Expression
// // Runs an anonymous function immediately
//
// function doggy(){
//     // do something?
// }
// doggy()
//
// let kittyCat = function(stuff, andMoreStuff){
//     // do something
//     }
// kittyCat()

// let square = function(num){
//     return num ** 2
// }
// console.log(square(5))

// let square = (num) =>{
//     return num ** 2
// }
// console.log(square(6))

// let square = num => num ** 2
//
// console.log(square(8))

// let square = (num, age) => {
//     return num + age
// }

let canYouDrink = (age = false, favDrink = "Coors Light") => {
    let result = age ? "Congrats!!" : "Sucker!!!"
    return `You like ${favDrink}, ${result}`
}
console.log(canYouDrink(true))
console.log(canYouDrink(undefined, "Diet Coke"))