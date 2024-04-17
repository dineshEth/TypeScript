interface User {
    name:string,
    readonly id:string,
    email? :string,
    startTrail: () => string,  // function return type string
    endTrail():string, // function return type string
    discount(coupanCode:string, value:number):string; // function return type string
}

let user:User = {
    name:'Dinesh',
    id:'abcd123',
    github:'@dineshEth',
    email:'dinesh@google.com',
    startTrail:() =>{
        return 'trail started'
    },
    endTrail:()=>{
        return 'trail ended'
    },
    discount(coupanCode:'NewYearSale', value:100) {
        return String(coupanCode+value);
    },
}


// Reopening of Interface
// write in existin interface
interface User{
    github: string
}



/***INHERITENCE 'extends' */

interface Animal {
    animalType : 'Wild' | 'Pet',
    habitual : 'water' | 'land' | "both"
}

interface Dog extends Animal {
    breed: string,
    name: string,
    age: number
}


let dog : Dog = {
    animalType : 'Pet',
    habitual : 'land',
    breed: 'sheperd',
    name:'Bruno',
    age:3
}

export {}