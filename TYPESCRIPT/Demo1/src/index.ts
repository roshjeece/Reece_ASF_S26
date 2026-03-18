 // I have a comment
 let dog: string = "woof"
 console.log(dog)

 let num: number;
 let num2: number = 3;

 let isMarried: boolean = false;

 // function
 // think about parameter data types and return values
 const fullname= (fname: string, lname: string): string => {
     return `${fname} ${lname}`
 }
 console.log(fullname("Joshua", "Reece"))

 // Array
 // String[]
 let names: string[] = ["Atlas", "Ranger", "Bug"]
 let newNames: Array<string> = ["ben", "johny", "sue"]
 let nums: number[] = [1,2,3]
 let newNums: Array<number> = [2,3,4]