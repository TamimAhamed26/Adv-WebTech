"use strict";
// declare a variable with a specific type using : (colon).
let number = 3;
console.log(number); // 3
//union type// | (pipe) is used to separate the types // union type allows to use multiple types for a variable
let value;
value = 42; // Allowed  
value = "Hello"; // Allowed  
//value = true; // Error: Type 'boolean' is not assignable  
//function with Union Type Parameters
function printId(id) {
    console.log("ID:", id);
}
printId(123); // Allowed
printId("XYZ123"); // Allowed
// for array
let numbers = [1, 2, 3, 4, 5];
let names = ["sdad", "sdadsa", "sdadsa"];
let mixed = [1, "Hello", 2, "World"]; // Union Type Array
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(names); // [ 'sdad', 'sdadsa', 'sdadsa' ]
console.log(mixed); // [ 1, 'Hello', 2, 'World' ]
//object declaration {key: value} {} is used to declare object // fixed type
let person = { name: "TAMIM", age: 25 }; // semi-colon cant be used in value assignment
person.age = 30; // OK // person.age = "30"; // Error               //  {name: "John"; age: 30} is wrong
//person.address = "sdsa" //Property 'address' does not exist on type person
console.log(person); // { name: 'John', age:25 }                  
let user = { name: "TAMIM", isAdmin: true, id: 2 };
//user.id = 1; // Cannot assign to 'id' because it is a read-only property.
console.log(user); // { name: 'TAMIM', isAdmin: true, id: 2 }
console.log(user.age); // undefined
console.log(user.name); // TAMIM
// function declaration with Explicit Types
function add(a, b) {
    return a + b;
}
console.log(`function addition Explicit`, add(4, 2)); // 6 
/*
//function declaration with Implicit Types
function add2(a, b) // a,b are implicitly type any
{
    return a + b;
}
console.log(`function addition Implicit `,add2(6, 2)); // 8 //will run but shows error in IDE
*/
//arrow function
let add1;
add1 = (a, b) => a + b;
console.log(`function addition Arrow `, add1(7, 2)); // 9
//default parameter
function greet(name = "default") {
    console.log("Hello, " + name);
}
greet(); // Hello, Guest
greet("Tamim"); // Hello, Alice
function printUser(user) {
    console.log(`${user.name} is ${user.age} years old`);
}
//any type
let aU = 666;
let bU = ["danger"];
let cU = aU + bU; // OK // The + operator works with any types // * - operator will result in NaN
console.log(cU); // 666danger
//enums are used to define a collection of named constants 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log(move); // Output: 0
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
console.log(Status.Success); // Output: 200
console.log(Status[404]); // Output: "NotFound"
//Mixed Enums
var Mixed;
(function (Mixed) {
    Mixed["Yes"] = "YES";
    Mixed[Mixed["No"] = 0] = "No";
})(Mixed || (Mixed = {}));
console.log(Mixed.Yes); // Output: "YES"
console.log(Mixed[0]); // Output: "No" // reverse lookup so [0] will return No . objects can't be used for reverse lookup 
//tuples are used to store fixed-size sequences of elements of different types
let persona = ["TAmIm", 25]; // fixed type and fixed length // can't push or pop 
console.log(persona); // [ 'TAmIm', 25 ]       // can't change the order of the elements [25, "TAmIm"] is wrong
console.log(persona[0]); // Output: "TAmIm"
console.log(persona[1]); // Output: 25
persona[1] = 30; //  Allowed (number expected)
//persona[0] = 50;  //  Error: Type 'number' is not assignable to 'string'
console.log(persona[1]); //  30 
let employee = ["John"];
console.log(employee[1]); // Output: undefined
function getLocation(location) {
    console.log(`X: ${location[0]}, Y: ${location[1]}`);
}
getLocation([10, 20]); //  Allowed
//getLocation(["10", "20"]); // Error: Type 'string' is not assignable to 'number'
//literal types are used to specify exact values
let x = "hello"; // x can only be assigned the value "hello"
//x = "hello"; // OK
//x = "howdy"; // Error: Type '"howdy"' is not assignable to type '"hello"'
console.log(x); // hello
let statusa;
statusa = "success1"; //  Allowed
statusa = "failure"; //  Allowed
//statusa= "pending"; //  Error: Type '"pending"' is not assignable
console.log(statusa); // failure // returns the last assigned value
let userStatus;
userStatus = "active1"; // Allowed
//userStatus = "banned";   // Error: 'banned' is not assignable
userStatus = "pending"; // Allowed
console.log(userStatus); // pending // returns the last assigned value
const prac = {
    name: "TAMim", // name is initialized
    age: 25,
    greet() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old`;
    }
};
console.log(prac.greet()); // Output: "Hello, my name is TAMim and I'm 25 years old"
// Example without age (showing optional property)
const pracNoAge = {
    name: "John",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};
// prac.name = "Alex"; // This would cause an error due to readonly property
//Generics allow us to write flexible, reusable code by working with multiple types.
function identity(value) {
    return value;
}
console.log(identity("Hello Generic")); // Output: "Hello Generic"
console.log(identity(42)); // Output: 42
//Generics in Arrays
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([10, 20, 30])); // Output: 10
console.log(getFirst(["A", "B", "C"])); // Output: "A"
let numberBox = { value: 100 };
let stringBox = { value: "Hello interface" };
console.log(numberBox.value); // Output: 100
console.log(stringBox.value); // Output: "Hello"
//Multiple Type Parameters
function pair(first, second) {
    return [first, second]; // [second, first] iF RETURN type is [U, T]
}
const result1 = pair("tAmim", 30);
const result2 = pair(true, "Hello");
console.log(result1); // Output: ["tAmim", 30]
console.log(result2); // Output: [true, "Hello"]
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const personA = { name: "Tamim" };
const details = { age: 25, country: "USA" };
const mergedPerson = merge(personA, details);
console.log(mergedPerson); // { name: "Tamim", age: 25, country: "USA" }
//Generics with Classes Multiple Type Parameters
class DataStorage {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    getKey() {
        return this.key;
    }
    getValue() {
        return this.value;
    }
}
const storage = new DataStorage("UserID", 101);
console.log(storage.getKey()); // Output: "UserID"
console.log(storage.getValue()); // Output: 101
//# sourceMappingURL=types.js.map