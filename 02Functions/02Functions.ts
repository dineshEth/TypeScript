// Array of type string
const cities : string[] = ["Delhi", "Banglore", "Pune" ,"Noida"];

// mapping over an array
//  method-1
// type any
cities.map(city => {
    return `${city} belong to India`;
});

// method-2
// varibale type define
cities.map((city : string) => {
    return `${city} belong to India`;
})

// method-3 
// function return type define 
cities.map((city) :string  => {
    return `${city} belong to India`
} )

