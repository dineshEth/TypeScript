type User = {
    name: string,
    isActive : boolean,
    age: number,
    readonly id : string,  // immutable
    email? : string   // optional 
}

let user : User[] = [];

user.push(
    {
        name:'Dinesh',
        isActive:true,
        age:22,
        id:'abcd12231jnd',
        email : 'dinesh@google.com'
    }
);

user.push(
    {
        name:'Dinesh',
        isActive:true,
        age:22,
        id:'abcd1d',  
    }
);



// CANNOT WRITE READ-ONLY PROPERTY
// user[0].id = "dfnwd"

user[0].age = 15;

// CANNOT WRITE IN 'type' 
// user[0].proffession = 'Developer'  /