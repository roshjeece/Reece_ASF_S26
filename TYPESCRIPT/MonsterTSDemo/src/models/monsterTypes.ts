export interface Monster {
    firstName: string; // Every monster needs a name
    lastName?: string; // ? means optional, prevents compiler error if not added
    age: number; // Every monster has an age
    type: "Human" | "Blob" | "Undead"; // choose a type
    moreInfo: string; // Fun fact about the monster
}

export interface SuperMonster extends Monster {
    powerLevel: number;
}