// Arrow Function
let a1 = () => {}
a1();

// ! explicit return:- "return" keyword is used
let a2 = () => {
    return "Hii";
}

// ! implicit return:- without "return" keyword
let a3 = () => "Hii";

let a4 = () => ({ username: "raj", age: 30 });

// Destructuring  -- array and object
let arr = [10, 20, 30, 40, 50];
let [x1, , x3, x4, x5] = arr;
console.log(x1, x3);

let obj = { name: "Manish", age: "25", isLoggedIn: false };
let { name, age, isLoggedIn } = obj;
console.log(name, isLoggedIn);


let person = {
    id: 1,
    fullname : {fname :"Manish", lname : "Kumar"},
    year: 25,
    address: {
        city:"Noida", 
        state:"UP", 
        pin: 201301,
        location: { lat: 641.178623, long: 867.211379 },
    },
};
let {
    id,
    fullname: {fname, lname },
    year,
    address: { city, state, pin, location: {lat, long} },
} = person;

// map() :
let arr2 = [100, 200, 300, 400, 500];
let val1 = arr2.map((ele, idx, array) => {
    return ele + 5;
});
console.log(val);  // [105, 205, 305, 405, 505]

// ! Modules
// 1) NAMED : 
// ? It can be used for multiple functions to export
// ? While importing same name is mandatory but we can change name using ALIAS.
// ? {} Is mandatory while import

import { useState, useRef, sum as Add } from "./function.js";
let [count, setCount, Add] = useState(0);
let { current } = useRef("");
console.log(Add(10, 20));

// 2) DEFAULT :
// ? It can be used only once in a file.
// ? While importing same name is not mandatory.
// ? {} Is not Required

import AppFunction from "./function.js"
console.log(AppFunction(Add));

// ! HTML files creates Real DOM on Browser and Virtual DOM on React.