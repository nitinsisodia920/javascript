// Stack memory (Primitive), heap memory (Non-Primitive)

let name = "Nitin"
let anotherName = name
anotherName = "Rajput"

console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@pay"

}

let userTwo = userOne
     
userTwo.email = "nitin@google.com"

console.log(userOne.email);
console.log(userTwo.email);
