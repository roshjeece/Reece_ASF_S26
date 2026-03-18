import {Monster, SuperMonster} from "./models/monsterTypes"

const monster1: Monster = {
    firstName: "Junie",
    age: 500,
    type: "Undead",
    moreInfo: "Vietnam Veteran with PTSD"
}

const monster2: Monster = {
    firstName: "Blobbo",
    age: 420,
    type: "Blob",
    moreInfo: "Absorbs everything in sight, endlessly hungry, unpredictable"
}

const monster3: Monster = {
    firstName: "Alice",
    age: 28,
    type: "Human",
    moreInfo: "Monster Hunter"
}

const monster4: SuperMonster = {
    firstName: "Alucard",
    age: 1000,
    type: "Undead",
    moreInfo: "aka: Adrian Tepes, son of Dracula",
    powerLevel: 100
}

console.log(monster1)
console.log(monster2)
console.log(monster3)
console.log(monster4)