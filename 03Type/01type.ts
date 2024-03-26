// Type : data structure


type User = {
    readonly _id : string;   // cannot be updated
    name : string;
    email : string;
    age : number;
    isPaid : boolean;
    creditCardNumber?: number   // optional 
}

// instance of user type User 
let user : User = {
    _id : "123456",
    name : "",
    email : "",
    age : 22,
    isPaid: true
}

// functions 

type Employee = {
    readonly _id : string;
    name : string;
    contact : number;
}

function registerEmployee( employee : Employee ) {

}

// registerEmployee("name")   // throws error
registerEmployee({_id : "", name : "" , contact : 1223});

// return type of function is object {}
function submitUser(user : User ) : {} {
    return { name :  user.name, age : user.age}
}

submitUser(user);
submitUser({_id : "", name:'', age: 12 , email : '' , isPaid : false});
