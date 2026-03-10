let dog = "woof"
let cat = "meow"

let animals = {
    dog,
    cat
}

console.log(animals.cat)
// cat refers to 'key' of cat, which is cat

console.log(animals["dog"])
console.log(animals.dog)
console.log(animals[dog])