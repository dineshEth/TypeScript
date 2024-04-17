// Introductions to Arrays in TypeScript

type Client = {
    name: string;
    age:number;
    isPaid : boolean;
}

// declartions
// method-1
// string type  
let heroes : string[] = []   // empty arry of type string
heroes.push("Bali");
heroes.push("grate");
heroes.push("Boxue");

// number
let marks : number[] = []
marks.push(12);
marks.push(15);

// Client
let clnts : Client[] = [];
clnts.push({name:"",age: 12, isPaid : false})



// method-2
// string type
let marvel : Array<string>  = []
marvel.push('Spiderman');
marvel.push('Antman');

// Client type
let clients : Array<Client> = [];
clients.push({name:"",age: 12, isPaid : false});


// An Array of arrays
let score : number[][] =[]
score = [
    [12,13],
    [15,19]
]

score.push([18,19]);

export {}
