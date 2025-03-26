// declare a variable with a specific type using : (colon).
let number : number = 3;
console.log(number); // 3

//union type// | (pipe) is used to separate the types // union type allows to use multiple types for a variable
let value: number | string;  
value = 42; // Allowed  
value = "Hello"; // Allowed  
//value = true; // Error: Type 'boolean' is not assignable  

//function with Union Type Parameters
function printId(id: number | string) {
    console.log("ID:", id);
}

printId(123);      // Allowed
printId("XYZ123"); // Allowed

// for array
let numbers: number[] = [1, 2, 3, 4, 5];  
let names: string[] = ["sdad", "sdadsa", "sdadsa"];  
let mixed: (string | number)[] = [1, "Hello", 2, "World"]; // Union Type Array
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(names); // [ 'sdad', 'sdadsa', 'sdadsa' ]
console.log(mixed); // [ 1, 'Hello', 2, 'World' ]



//object declaration {key: value} {} is used to declare object // fixed type
let person: { name: string; age: number } = {name: "TAMIM",age: 25};// semi-colon cant be used in value assignment
person.age = 30; // OK // person.age = "30"; // Error               //  {name: "John"; age: 30} is wrong
//person.address = "sdsa" //Property 'address' does not exist on type person
console.log(person); // { name: 'John', age:25 }                  

//type User creates a reusable object type.//Type Aliases allows to create custom type names to make the code more readable.
type User = {
    name: string;
    age?: number; // ? makes age optional
    isAdmin: boolean;
    readonly id: number; // readonly makes id read-only
};
let user: User = {name: "TAMIM", isAdmin: true,id: 2};
//user.id = 1; // Cannot assign to 'id' because it is a read-only property.
console.log(user); // { name: 'TAMIM', isAdmin: true, id: 2 }
console.log(user.age); // undefined
console.log(user.name); // TAMIM

// function declaration with Explicit Types
function add(a: number, b: number): number // return type is number; can be left out 
{                                          // a,b must be type number
    return a + b;
}
console.log(`function addition Explicit`,add(4, 2)); // 6 

/*
//function declaration with Implicit Types
function add2(a, b) // a,b are implicitly type any
{
    return a + b;
}
console.log(`function addition Implicit `,add2(6, 2)); // 8 //will run but shows error in IDE
*/

//arrow function
let add1: (a: number, b: number) => number;
add1 = (a, b) => a + b;
console.log(`function addition Arrow `,add1(7, 2)); // 9

//default parameter
function greet(name: string = "default") {
    console.log("Hello, " + name);
}

greet(); // Hello, Guest
greet("Tamim"); // Hello, Alice


type User1 = { name: string; age: number };

function printUser(user: User1) {
    console.log(`${user.name} is ${user.age} years old`);
}

//any type
let aU: any = 666;
let bU: any = ["danger"];
let cU = aU + bU; // OK // The + operator works with any types // * - operator will result in NaN

console.log(cU); // 666danger

//enums are used to define a collection of named constants 
enum Direction { // Default values start from 0
    Up,   // 0
    Down, // 1
    Left, // 2
    Right // 3
}
let move: Direction = Direction.Up;
console.log(move); // Output: 0


enum Status { // Custom Values
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

console.log(Status.Success); // Output: 200
console.log(Status[404]);    // Output: "NotFound"

//Mixed Enums
enum Mixed {
    Yes = "YES",
    No = 0
}

console.log(Mixed.Yes); // Output: "YES"
console.log(Mixed[0]);  // Output: "No" // reverse lookup so [0] will return No . objects can't be used for reverse lookup 

//tuples are used to store fixed-size sequences of elements of different types
let persona: [string, number] = ["TAmIm", 25]; // fixed type and fixed length // can't push or pop 
console.log(persona); // [ 'TAmIm', 25 ]       // can't change the order of the elements [25, "TAmIm"] is wrong

console.log(persona[0]); // Output: "TAmIm"
console.log(persona[1]); // Output: 25

persona[1] = 30;  //  Allowed (number expected)
//persona[0] = 50;  //  Error: Type 'number' is not assignable to 'string'
console.log(persona[1]); //  30 

let employee: [string, number?] = ["John"];
console.log(employee[1]); // Output: undefined

//
type Coordinate = [number, number]; // tuple alias

function getLocation(location: Coordinate) {
    console.log(`X: ${location[0]}, Y: ${location[1]}`);
}

getLocation([10, 20]); //  Allowed
//getLocation(["10", "20"]); // Error: Type 'string' is not assignable to 'number'

//literal types are used to specify exact values
let x: "hello" = "hello"; // x can only be assigned the value "hello"
//x = "hello"; // OK
//x = "howdy"; // Error: Type '"howdy"' is not assignable to type '"hello"'
console.log(x); // hello

let statusa: "success1" | "failure";

statusa = "success1"; //  Allowed
statusa = "failure"; //  Allowed
//statusa= "pending"; //  Error: Type '"pending"' is not assignable
console.log(statusa); // failure // returns the last assigned value



//literal types with union types
type Statusa = "active1" | "inactive" | "pending";
let userStatus: Statusa;

userStatus = "active1";   // Allowed
//userStatus = "banned";   // Error: 'banned' is not assignable
userStatus = "pending";  // Allowed
console.log(userStatus); // pending // returns the last assigned value

//interfaces
interface Person {
    readonly name: string;  // readonly property can't be changed after initialization
    age?: number;          // optional property (may be undefined)
    greet(): string;
}

const prac: Person = {
    name: "TAMim", // name is initialized
    age: 25,
    greet() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old`;
    
    }
};

console.log(prac.greet()); // Output: "Hello, my name is TAMim and I'm 25 years old"

// Example without age (showing optional property)
const pracNoAge: Person = {
    name: "John",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};
// prac.name = "Alex"; // This would cause an error due to readonly property

//Generics allow us to write flexible, reusable code by working with multiple types.
function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello Generic")); // Output: "Hello Generic"
console.log(identity<number>(42)); // Output: 42

//Generics in Arrays
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

console.log(getFirst<number>([10, 20, 30])); // Output: 10
console.log(getFirst<string>(["A", "B", "C"])); // Output: "A"

//Generics with Interfaces
interface Box<T> {
    value: T;
}

let numberBox: Box<number> = { value: 100 };
let stringBox: Box<string> = { value: "Hello interface" };

console.log(numberBox.value); // Output: 100
console.log(stringBox.value); // Output: "Hello"

//Multiple Type Parameters
function pair<T, U>(first: T, second: U): [T, U]{ // return type is a tuple // [U, T] is wrong
    return [first, second]; // [second, first] iF RETURN type is [U, T]
}  

const result1 = pair<string, number>("tAmim", 30);
const result2 = pair<boolean, string>(true, "Hello");

console.log(result1); // Output: ["tAmim", 30]
console.log(result2); // Output: [true, "Hello"]


function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const personA = { name: "Tamim" };
const details = { age: 25, country: "USA" };

const mergedPerson = merge(personA, details);
console.log(mergedPerson); // { name: "Tamim", age: 25, country: "USA" }


//Generics with Classes Multiple Type Parameters
class DataStorage<T, U> {
    private key: T;
    private value: U;

    constructor(key: T, value: U) {
        this.key = key;
        this.value = value;
    }

    getKey(): T {
        return this.key;
    }

    getValue(): U {
        return this.value;
    }
}

const storage = new DataStorage<string, number>("UserID", 101);
console.log(storage.getKey()); // Output: "UserID"
console.log(storage.getValue()); // Output: 101


