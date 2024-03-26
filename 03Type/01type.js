// Type : data structure
// instance of user type User 
var user = {
    _id: "123456",
    name: "",
    email: "",
    age: 22,
    isPaid: true
};
function registerEmployee(employee) {
}
// registerEmployee("name")   // throws error
registerEmployee({ _id: "", name: "", contact: 1223 });
// return type of function is object {}
function submitUser(user) {
    return { name: user.name, age: user.age };
}
submitUser(user);
submitUser({ _id: "", name: '', age: 12, email: '', isPaid: false });
