// console.log("My first javascript file")

// browser only method: prompt
// This will create a pop up prompt in the browser. This can only be run in the browser.
// let answer = prompt("What is your name?")
// console.log("Hello " + answer)
// This will produce a console log that says "Hello Josh"

// let answer = prompt("How old are you?")
// answer = Number(answer)
// answer = parseInt(answer)
// testing to see if not a number
// if(isNaN(answer)) { // are you a NaN?
    // code here
// }
// console.log("You are " + answer + " years old.")
// console.log(typeof answer)
// console.log(Number())

// let count = 1
// count++ // POSTFIX: use count, then add
// count = count + 1 // same as above
//
// ++count // PREFIX: add to count, then use
// count += count // same as above

// let result = prompt("What is your favorite food?")
// let age = 29
// let sentence = `I love ${result} and I am ${age > 21 ? "Yeah!!!" : "Boo!!!"} years old!`
// console.log(sentence)

// if (age > 21) {
//     console.log("Yeah!!!")
// } else {
//     console.log("Booo!!!!")
// }
//
// // ternary operators (compact if/else)
// console.log(age > 21 ? "Yeah!!!" : "Booo!!!")

//DATES
const d = new Date()
console.log(d)
let day = d.getDay()
console.log(day) // Refers to the third day of the week
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let hh = d.getHours()
let mm = d.getMinutes()
let ss = d.getSeconds()
let mi = d.getMilliseconds()
console.log(`The time is ${hh%12}:${mm}:${ss.toString().padStart(2, '0')}.${mi}.`) // 12HR clock with two digit seconds
console.log(`Today is ${daysOfTheWeek[day]}`)