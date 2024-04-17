// Union is Collectionof different types 

let score : number | string = 12;
score = "45";

type User = {
    name: string,
    id: number
}
type Admin = {
    userName : string,
    id:number
}


let dinesh : User | Admin =  {
    name:"Dinesh",
    id: 123
}

let sandhya : User | Admin =  {
    userName:"sd",
    id: 455
}

// strict type 
let pi : 3.14 = 3.14;
// pi = 4.2   // strict to its type

let seatAllotment : 'asile' | 'window' | 'middle' = 'asile'
// seatAllotment = 'driver'  // strict to its types

export { }