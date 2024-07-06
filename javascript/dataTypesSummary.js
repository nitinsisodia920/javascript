// primitive

// 7 types => String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.5
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('12345')
const anotherId = Symbol('12345')


//console.log(id === anotherId);

// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj" , "doga" ]
let myObj = {
    name: "Nitin",
    age: 18
}

// Store function in varibales

const myFunction = function(){
    console.log("Hello my name is nitin");
}

console.log(typeof myFunction);