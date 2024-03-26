/***Functions  */

// type "any" : more using javascript
// TYPE "any" IS NEVER RECOMMENDED IN TypeScript


// variable having type any
function addTwo(num) {
    return num + 2;    
}   // num is of type any

// variables having type
function addThree(num : number) {
    return num + 3
}

// function type
function addFour(num:number):number{
    return num + 4;
}

function print(name:string) :void {
    console.log(name.toLowerCase());
}


addTwo("10");  // don't throws any error
addThree(10)   
addFour(10);

export {}