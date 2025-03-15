// 🔹 Function Scope vs Block Scope
function scopeExample() {
  var a = 1;  // Function-scoped
  var a = 2;  // ✅ Re-declaring 'a'
  a = 23; // ✅ Re-assigning 'a'
  let b = 2;  // Block-scoped
  //let b = 3;  // ❌ SyntaxError: Identifier 'b' has already been declared
  b = 24; // ✅ Re-assigning 'b'
  const c = 3; // Block-scoped
  //const c = 4; // ❌ SyntaxError: Identifier 'c' has already been declared
  // c = 4; // ❌ TypeError: Assignment to constant variable
  console.log("Initial values in scope: ", a, b, c); // Output: 23, 24, 3

  if (true) {
      var a = 10;  // ✅ Re-declaring var (same function scope) // 23 will be replaced by 10
      let b = 20;  // ✅ New 'b' (block scope, different from outer 'b') // 24 will be replaced by 20
      const c = 30; // ✅ New 'c' (block scope, different from outer 'c')
      console.log("Inside if Block: ", a, b, c); // Output: 10, 20, 30
  }
  console.log("Outside if Block: ", a, b, c); // Output: 10, 24, 3
  a = 11; // ✅ Re-assigning 'a'
  //LET b = 4; // ❌ SyntaxError: Identifier 'b' has already been declared
  b = 4; // ✅ Re-assigning 'b'
  //CONST c = 5; // ❌ SyntaxError: Identifier 'c' has already been declared
  //c=4; // ❌ TypeError: Assignment to constant variable
  console.log("Re-assigned values in scope: ", a, b, c); // Output: 10, 4, 3
}
scopeExample();

// 🔹 Function Scope vs Block Scope in Loops
function loopScope() {
  for (var i = 0; i < 3; i++) {
      console.log("Inside Loop (var):", i); // ✅ Accessible inside
  }
  console.log("Outside Loop (var):", i); // ✅ Accessible outside (var leaks)
  
  for (let j = 0; j < 3; j++) {
      console.log("Inside Loop (let):", j); // ✅ Accessible inside
  }
  // console.log("Outside Loop (let):", j); // ❌ ReferenceError: j is not defined
}
loopScope();


const obj = { key: "value" };
obj.key = "newValue";
console.log(obj.key);

console.log("typeof values");
console.log(typeof undeclaredVariable);//undefined
console.log(typeof nullVariable);//undefined
console.log(typeof NaNVariable);//undefined
console.log(typeof InfinityVariable);//undefined
console.log(typeof '2');//`string`
console.log(typeof []);//`object`
console.log(typeof function () { });//`function`
console.log(typeof 1);//`number`
console.log(typeof "Hello");//`string`
console.log(typeof true);//`boolean`
console.log(typeof Symbol("id"));//`symbol`
console.log(typeof null);//`object`
console.log(typeof undefined);//`undefined`
console.log(typeof NaN);//`number`
console.log(typeof Infinity);//`number`
console.log(typeof 1n);//`bigint`
console.log(typeof 1.1);//`number`
console.log(typeof 1.1e10);//`number`
console.log(typeof 1.1e-10);//`number`
console.log(typeof 0b11);//`number`


for (var iy = 0; iy < 3; iy++) {
  setTimeout(() => console.log("WithOut IIFE var",iy),6000);//because of third for block 7,7,7 //or else it will be 3,3,3 
}

for (let iy = 0; iy < 3; iy++) {
  setTimeout(() => console.log("in let",iy), 1000);//let assigns new value to iy 0,1,2
}

for (var iy = 4; iy < 7; iy++) {
  (function (iy) {
      setTimeout(() => console.log("WITH IIFE",iy), 2000);//IIFE (Immediately Invoked Function Expression) causes 4,5,6 //or else it will be 7,7,7
  })
  (iy);// finally iy will be 7
}


const arr = [1, 2, 3];
arr[10] = 99;
console.log("array length",arr.length);
console.log("array index value",arr[6]);


const arrAY = [1, 2, 3];
for (const x of arrAY) {
  arrAY.push(x + 3);
if (arrAY.length > 10) break;
}
console.log("PUSH",arrAY);

//arrow function
const greety = (name,age) =>  //multiple parameters need paranthesis
`Hello,${name}! age is ${age}`;
console.log(greety("Alice",23)); // Output: "Hello, Alice!"

const greetz = name => `Hello,${name}`;//single parameter no need of paranthesis
console.log(greetz("roy"));

const greets = () => `hello`;//no parameter need paranthesis
console.log(greets());


setTimeout(function() { console.log("Delayed!"); }, 1000);//callback function
setTimeout(() => console.log("Delayedtwo!"), 1000);//arrow function

class MathUtil {
  static square(x) {
      return x * x;
  }
}
console.log(MathUtil.square(4)); // static method call directly on class // dont require object creation

class Person {
  constructor(name) {
      this.name = name;
  }
}
//const p = Person("Alice"); // ❌ TypeError: Class constructor Person cannot be invoked without 'new'

/*
function multipl1(a, b) {
  return a * b;
}
const multipl1 = (a, b) => a * b;
console.log(multipl1(2, 3)); // Output: 6
*/

const add = (a, b) => a + b;
console.log(add(2));//NaN, b is undefined

const obi = {
  value: 10,
  getValue: () => console.log(this.value)
};
obi.getValue();// Arrow functions do not have their own this, so this.value refers to the outer scope, which does not have value.

function example(x = 10) {
  return x;
}
console.log(example(null)); // null (not 10)
console.log(example(undefined)); // 10


function test(x = 2, y = x + 2) {
  console.log(y); // output:18 (x is 16) not 4
}
test(16);


function ady(x = y, y = 10) {
  return x + y;
}
//console.log(ady()); // ❌ ReferenceError: Cannot access 'y' before initialization
function testy(a = b, b = 40) {
  console.log(`sdfds`,a + b);
}
testy(5);// output 45


class A {
  constructor() {
    this.value = 23;//instance value
  }
}
A.prototype.value = 20;//prototype value will be overridden by instance value
const obn = new A();
console.log(`a`,obn.value);

/*
function outer(callback) {
  console.log("A");
  callback();
  console.log("B");
}
outer(() => console.log("C")); // Output: A, C, B


function test(callback) {
  console.log("A");
  setTimeout(callback, 1000);
  console.log("B");
}

test(() => console.log("C")); // Output: A, B, C


function processUserInput(callback) {  
  console.log("Processing user input..."); // Processing user input... first
  callback(); // callback function greetUser() is called 
}

function greetUser() {  
  console.log("Hello, user!"); // Hello, user! is printed after Processing user input... 
}

processUserInput(greetUser);


function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    let data = "User data";
    callback(data);
  }, 2000);
}

fetchData((data) => console.log("Received:", data));



function getUserData(callback) {
  setTimeout(() => {
    console.log("User data received");
    callback();
  }, 1000);
}

function getPosts(callback) {
  setTimeout(() => {
    console.log("User posts received");
    callback();
  }, 1000);
}

getUserData(() => {
  getPosts(() => {
    console.log("All data loaded");
  });
});


function test() {
  console.log(7);
  setTimeout(() => console.log(9), 1000);
  console.log(5);
}
test();//7,5,9
*/

class Test {
  static show() {
    return "Hello";
  }
}
const t = new Test();
//console.log(t.show()); // ❌ TypeError: t.show is not a function


class g{
  static count = 0; // Static property to store the count of instances
  constructor() {
    g.count++;// // Increment count when a new instance is created
  }
}

new g();//instance 1
new g();//instance 2
new g();//instance 3
console.log(g.count);

function process(callback = () => console.log("Default")) {
  callback();
}
process(undefined);

function makeCounter(start = 0) {
  return function(step = 1) {
    start += step;
    return start;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter(10);

console.log(counter1(), counter2(), counter1(5));


class Base {
  constructor() {
    this.name = "Base";
    this.show();
  }
  show() {
    console.log(this.name);
  }
}

class Derived extends Base {
  constructor() {
    super();
    this.name = "Derived";
  }
  show() {
    console.log(this.name);
  }
}

const d = new Derived();

/*
class Shape {
  constructor(type) {
    this.type = type;
  }
  static create(type) { // Static method
    return new this(type); // 'this' refers to the class (e.g., Shape or Circle)
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("circle");
    this.radius = radius;
  }
}

const circle = Circle.create(5); // Creates an instance directly // need not to create object
console.log(circle.type, circle.radius);


const person = {
  name: "tamim",
  sayHi: function() {
    return () => {
      console.log(`Hi, I'm ${this.name}`);
    };
  }
};
const sayHi = person.sayHi();
sayHi();// Hi, I'm tamim
*/  

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  
  static createAdmin(name) {
    return new User(name, "admin");
  }
}

const admin = User.createAdmin("Alice");
console.log(admin.name, admin.role); // Alice admin

function multiply(a, b = 2, c = b * a) {
  return a * b * c;
}
console.log(`multiply output`,multiply(5, 3)); // Output: 5 * 3 * 15 = 225

const u = {
  x: 1,
  y: function() {
    return this.x;
  }
};
console.log(u.y());// Output: 1 // this refers to the object obj
                                  // not undefined because y is a method of obj//arrow function will return undefined


const obji = {
  value: 180,
  method: function () {
    const inner = () => {
      console.log(``,this.value);// Output: 180 // inner is an arrow function, so it uses the outer scope's this
    };
    inner();
  },
};
obji.method();

const j = {
  value: 10,
  method: () => console.log(this.value) // Output: undefined // arrow functions do not have their own this, so this.value refers to the outer scope, which does not have value.
};
 j.method();// Output: undefined // arrow functions do not have their own this, so this.value refers to the outer scope, which does not have value.

function calculate(x = y, y = 2) { // x =89, y = 2 .x != y because calculate(89) is called
  return x + y;
}
console.log(calculate(89));// 91


class Person4 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person4("TAMIM", 25);
person1.greet();


// Spread Operator // The Spread Operator (...) expands elements of an array or object.//Used in function calls, arrays, and object literals
// spread (...) when expanding arrays/objects

const obj1 = { name: "John", age: 25 };
const obj2 = { ...obj1, age: 34 ,city :`New York`}; // Expands obj1 properties
console.log(obj2); // Output: { name: 'John', age: 25, city: 'New York' }

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; // Expanding arr1 elements
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

const init = [1, 2, 3, 4];
const wcopy = { ...init };// [...init] would result in [1, 2, 3, 4] // { ...init } means Object Spread Operator 
console.log(`index value`,wcopy);//{ '0': 1, '1': 2, '2': 3, '3': 4 }

const oj = { a: 1, b: 2 };
//const rr = [...oj];

//console.log(rr);// ❌ TypeError: oj is not iterable


function multiply(x, y, z) {
return x * y * z;
}
const nums = [2, 6, 4];
console.log(multiply(...nums)); // Output: 48 



// Rest Parameter //The Rest Operator (...) collects multiple elements and bundles them into an array.//Used in function parameters and object/array destructuring
// rest (...) when collecting multiple arguments into an array // rest (...) when gathering function arguments into an array

function sum(...numbers) { // Gathers all arguments into an array // rest operator Must be the last parameter
return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

/*
function test(a, ...rest, b) {
console.log(a, rest, b);// ❌ SyntaxError: Rest parameter must be last formal parameter
}

test(1, 2, 3, 4); 
*/

// Rest in Function Parameters 
function calculateTotalPrice(discount, ...prices) {
const total = prices.reduce((acc, price) => acc + price, 0);
return total - discount;
}
console.log(calculateTotalPrice(10, 100, 200, 300)); // Output: 590


const product = { id: 101, name: "Laptop", price: 1200, brand: "Dell" };
const { price, ...details } = product; // Extract price, store the rest in 'details'
console.log(price); // Output: 1200
console.log(details); // Output: { id: 101, name: 'Laptop', brand: 'Dell' }

//destructuring
const person = { name: "Alice", age: 30, city: "Paris" };
const { name, ...rest } = person;
console.log(name); // Output: Alice
console.log(rest); // Output: { age: 30, city: 'Paris' }

// Destructuring Assignment// Extracts values from arrays/objects into variables.
const numbers = [10, 20, 30];
const [a,b,c] = numbers;//const[a,,c] = numbers; // Extracts 1st and 3rd elements// ,, is used to skip the 2nd element
console.log(a,b,c); // Output: 10 20 30

/*
//Object Destructuring: Extracts properties from objects into variables.
const user = { firstName: "Emma", lastName: "Smith" };
const { firstName, lastName } = user;
console.log(firstName, lastName); // Output: Emma Smith
*/

const user = { name: "Alice", age: 25, city: "London" };

// Function to update user details immutably
function updateUser(user, newDetails) {
return { ...user, ...newDetails };
}

const updatedUser = updateUser(user, { city: "New York", age: 26 });
console.log(updatedUser); // Output: { name: 'Alice', age: 26, city: 'New York' }



const numbes = [5, 8, 12];
console.log(Math.max(numbes));//NaN
//console.log(Math.max(...numbes));//12

const persn = { nae: "Alice", age: 30 };
const { nae, country = "USA" } = persn;
console.log(country);


function greet(greeting, name) {
console.log(`${greeting}, ${name}!`);
}

const args = ["Hello",];//args = ["Hello", "Alice"]; // Output: "Hello, Alice!"
greet(...args);//Hello, undefined!

const [au, bu, ...restu] = "Hello";
console.log(au, bu, restu);// Output: H e ['l', 'l', 'o']


const [aa, ba, ...resat] = [1, 2];
console.log(resat);// Output: [] because there are no elements left to collect


const prac = { a: 1, b: { c: 2 } };
const shallowCopy = { ...prac };

shallowCopy.b.c = 42;// The b object is still a shared reference, so changing shallowCopy.b.c affects prac.y.z.
console.log(`spread operator`,shallowCopy.b.c);


const ar1 = [1, 2, 3];
const ar2 = ar1;
ar2.push(4);
console.log(ar1, ar2); //arr2 = arr1 does not create a copy—it creates a reference to the same array in memory. Any changes to arr2 also modify arr1
// Output: [1, 2, 3, 4] [1, 2, 3, 4]

const rr1 = [1, 2, 3];
const rr2 = [...rr1, 4, 5];
rr1.push(6);
console.log(`6 not here`,rr2);//  shallow copy of arr1. Mutating arr1 later does not affect arr2. // Output: [1, 2, 3, 4, 5]


// FILTER and MAP does not modify the original array but creates a new array
// but can be modified by reassigning the new array with var and let
const umbers = [1, 2, 3, 4, 5];
// Using map() to square each number
const squares = umbers.map(num => num * num);
console.log(`map example`,squares);  // Output: [1, 4, 9, 16, 25] //map() creates a new array with the same length as the original array

// Using filter() to get only even numbers
const evens = umbers.filter(num => num % 2 === 0);
console.log(`filter example`,evens);    // Output: [2, 4]//filter() creates a new array that may have fewer elements than the original array


const ar = [1, 2, 3, 4, 5];
const rsult = ar.filter(x => x % 2 === 0).map(x => x * x);
console.log(`dfdg`,rsult); // Output: [4, 16]// Chaining filter() and map() to get squares of even numbers


const str = "Hello, World!";
const result = str.replace("World", "JavaScript");
console.log(result);


const re = [3, 5, 8, 2, 6];
const ret = re.filter(num => num > 4).map(num => num - 1);
console.log(`filterd`,ret)// Output: [4, 7, 5]

let email = "user@example.com";
console.log(email.split("@")[1]); // "example.com" //[2] Will be undefined

console.log("hello".slice(0, -2));//output:hel//last 2 characters will be removed//NEGATIVE INDEXING/
console.log("hello".slice(0, 2));//output:he// POSITIVE INDEXING

console.log("10" + 95 -4 );//output: 1091// 10+95 = 1095 -4 = 1091

console.log(Math.min() > Math.max());//output: true//Math.min() returns Infinity, and Math.max() returns -Infinity
console.log("JavaScript".charAt(-1));//output: empty string//charAt() returns an empty string if the index is out of range

console.log(("5" - "2") + ("5" + "2"));// - operator js will convert string to number
                                    // + operator js will convert number to string
//output: 352// "5" - "2" is 3, and "5" + "2" is "52". 


console.log("100" - "50" + "10" * 2);// output: 70// 100 - 50 = 50, 10 * 2 = 20, 50 + 20 = 70

console.log("10" / "2");//output: 5// / operator converts strings to numbers before division

console.log("hello" * 2);//output: NaN// * operator does not convert strings to numbers

console.log(Number("123abc"));//output: NaN// Number() converts strings to numbers if the string contains only numbers

console.log(+"10.5px");//output: NaN// + operator converts strings to numbers if the string contains only numbers

console.log(Math.sqrt(-1));// output: NaN// Math.sqrt() returns NaN for negative numbers

console.log("5" * null);//output: 0// * operator converts null to 0

console.log(3 > 2 > 1);//output: false// 3 > 2 is true, true is converted to 1, so 1 > 1 is false

console.log(0.1 + 0.2 === 0.3);//output: false// 0.1 + 0.2 is 0.30000000000000004, which is not equal to 0.3

console.log('10' - - '5');//output: 15// - operator converts strings to numbers

console.log(typeof NaN);//output: number// NaN is a numeric data type

console.log("a,b,c,d".split(","));//output: [ 'a', 'b', 'c', 'd' ]// split() method to split the string into an array of substrings
console.log("a,b,c,d".split(",", 2));//output: [ 'a', 'b' ]// split() method with a limit of 2


console.log(Math.random() < 1);//output: true// Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)

Math.round(4.5)//output: 5// Math.round() rounds to the nearest integer
Math.round(4.49)//output: 4// Math.round() rounds to the nearest integer

console.log("abcabc".replace("abc", "xyz"));

console.log("   JavaScript is awesome!   ".trim());

console.log("apple,banana,cherry".split(","));//output: [ 'apple', 'banana', 'cherry' ]// split() method to split the string into an array of substrings

const { a9, b8: aliasB = 5 } = { a9: 1 };
console.log(a9, aliasB);

console.log([1, 2, 3] + [4, 5, 6]);//output: 1,2,34,5,6// + operator converts arrays to strings



const rr = ["a", "b", "c"];
rr.forEach((char, i, rr) => {
rr[i] = char.toUpperCase();
});
console.log(rr);//[ 'A', 'B', 'C' ]// forEach() method to modify the original array

console.log(true + true);//output: 2// true is converted to 1

console.log([1, 2] == "1,2"); //output: true// [1, 2] is converted to "1,2" before comparison

console.log(parseInt("Infinity"));//output: NaN// parseInt() cannot convert "Infinity" to a number

console.log([] + {});//output: [object Object]// {} is converted to "[object Object]"

console.log(null + 1);//output: 1// null is converted to 0

console.log(typeof (1 + "1")); //output: string// 1 is converted to "1" before concatenation

console.log(typeof (1 - "1"));//output: number// "1" is converted to 1 before subtraction

console.log(typeof []);//output: object// [] is an object

console.log(1 + "1" - 1);//output: 10// "1" is concatenated to 1, then subtracted from 1

console.log(!!"");//output: false// !! converts the value to a boolean

console.log(5 === "5")//output: false// === compares the value and type // == compares only value

/*array.reduce((1️⃣accumulator,2️⃣currentValue,3️⃣index,4️⃣array) => {
    // logic to accumulate values

}, 5️initialValue);
1️⃣ accumulator → Stores the accumulated result across iterations
2️⃣ currentValue → The current element in the iteration
3️⃣ index (optional) → The index of currentValue
4️⃣ array (optional) → The original array
5️⃣ initialValue → The starting value of accumulator (optional, but recommended)
*/

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(count); // Output: { apple: 3, banana: 2, orange: 1 }

const nestedArr = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatArray);// Output: [1, 2, 3, 4, 5, 6]

const numrs = [10, 25, 8, 15, 30];

const max = numrs.reduce((acc, num) => Math.max(acc, num), numrs[0]);

console.log(max); // 30


const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

const groupedByAge = people.reduce((acc, person) => {
  if (!acc[person.age]) acc[person.age] = [];
  acc[person.age].push(person.name);
  return acc;
}, {});

console.log(groupedByAge); // Output: { '25': [ 'Alice', 'Charlie' ], '30': [ 'Bob' ] }


const nmbers = [5, 10, 15];
const su = nmbers.reduce((acc, num) => acc + num);
console.log(`DS`,su);// Output: 30// reduce() method to sum all elements in the array

function demo(first, second, ...rest) { // Rest parameter to collect remaining arguments
  console.log(first, second); // 1 2
  console.log(rest); // [3, 4, 5]
}
const Anumbers = [1, 2, 3, 4, 5];
demo(...Anumbers);// Spread Operator to pass array elements as arguments




function fetchData() {
return new Promise((resolve, reject) => {
  setTimeout(() => resolve("Network error"), 2000);
});
}

async function getData() {
try {
  console.log("Fetching data...");
  let data = await fetchData();
  console.log("Received:", data);
} catch (error) {
  console.error("Error:", error);
} finally {
  console.log("Process finished.");
}
}

getData();

let myPromise = new Promise((resolve, reject) => {
let success = true; // Simulate success or failure
if (success) {
    resolve("Promise fulfilled!"); // Resolves with this value
} else {
    reject("Promise rejected!"); // Rejects with this reason
}
});

// Handling the Promise
myPromise
.then(result => console.log(result)) // Runs if resolved
.catch(error => console.error(error)) // Runs if rejected
.finally(() => console.log("Promise settled")); // Runs in both cases


function first() {
  return new Promise((resolve) => {
      setTimeout(() => resolve("First resolved"), 1000);
  });
}

function second(prevData) {
  return new Promise((resolve) => {
      setTimeout(() => resolve(prevData + " → Second resolved"), 1000);
  });
}

first()
  .then(second)
  .then(result => console.log(result)) // "First resolved → Second resolved"
  .catch(error => console.error(error));

async function process() {
    console.log("Fetching data process...");
    let response = await new Promise(resolve => setTimeout(() => resolve("Data received (After 2 seconds)"), 2000));
    console.log(response);
    console.log("Processing finished.");
}

process();
// Output:
// Fetching data process
// Data received(After 2 seconds)
// Processing finished.

async function foo() {
  return 42; 
}
//console.log(foo());

//console.log(foo().then(console.log));// Output: 42// foo() returns a resolved promise with the value 42
//console.log(await foo());// Output: 42// foo() returns a resolved promise with the value 42;

const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve("promise1 One resolve"), 3000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject("promise2 Two rejected"), 1000));

Promise.all([promise1, promise2])
  .then(console.log)
  .catch(console.log); // Output: promise2 Two rejected

async function fetchData() {
  let result = fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(result);//Promise { <pending> }
}
fetchData();

async function addy(a, b) {
return a + b;
}
//console.log(await addy(5, 10));// await cannot be used at the top level in a script (unless inside an async function or a module).

async function multiplyS(a, b) {
return a * b;
}
multiplyS(4, 5).then(console.log);//async function returns a Promise, and .then(console.log) correctly prints 20.
//console.log(multiply(10, 2)); // Output: Promise { 20 }
async function subtract(a, b) {
return a - b;
}
subtract(15, 5).then(console.log);// Output: 10 after done is printed
console.log("Done");// Output: Done// subtract() is an async function that returns a Promise, so the "Done" message is printed before the Promise is resolved.


async function foo() {
return 5;
}
console.log(foo() + 5); // Output: [object Promise]5// foo() returns a Promise, so it is concatenated with 5 as a string


console.log(1);
setTimeout(() => console.log(2), 0); // macrotask lower priority than microtask
console.log(66);
Promise.resolve().then(() => console.log(3)); // microtask higher priority than macrotask
console.log(4); //Output: 1 66 4 3 2




async function asyncFunc() {
  return 5;
}
async function main() {
  console.log(await asyncFunc() + await asyncFunc());// Output: 10// await waits for the Promise to resolve and returns the value
}
main();


async function hello() {
  console.log("Hello");// Output: Hello 3 times as the function is called 3 times
  return Promise.resolve();
}
hello();
hello();
hello();


function foo() {
  //let result = await Promise.resolve(42);// ❌ SyntaxError: await is only valid in async functions
  //console.log(result);
}
foo();


async function test() {
  return Promise.resolve("Hello");
}
//console.log(await test());// Output: Hello// await can only be used inside an async function

async function testtt() {
  throw new Error("Oops!"); // reject the Promise with an error
}
testtt().catch(err => console.log("Caught:", err.message));//handles the error thrown by the Promise
                               // Output: Caught: Oops!


async function foos() {
    return 10;
}
async function bars() {
    let x = foos();
    console.log(`AWAIT`,await x + 5); // Output: 15// await waits for the Promise to resolve and returns the value
}
bars();
  
async function testKKK() {
  console.log("A"); // Output: A
  return "B"; //ASYNC FUNCTION RETURNS PROMISE
}
console.log(testKKK()); //A Promise { 'B' }// test() returns a Promise with the value "B"


//console.log(await Promise.resolve("Hello"));// Output: Hello// await can only be used inside an async function


Promise.resolve("A") // Resolves with "A
    .then(async (data) => {
        console.log(data); 
        console.log(await Promise.resolve("B"));
    })
    .then(() => console.log("C"));
// Output: A B C

async function te3st() {
  return Promise.resolve("Hello");
}
//console.log(await te3st()); // Output: ERROR// await can only be used inside an async function

async function fooS() {
  return 5;
}
console.log(fooS()); // Output: Promise { 5 }// foo() returns a Promise with the value 5


//console.log(1);
async function test() {
    console.log(2);
 // await Promise.reject(3);
   console.log(4);// ❌ Uncaught (in promise) 3
}
//test();
//console.log(5);
// Output: 1 2 5  // Uncaught (in promise) 3


const obs = {
  name: "Alice",
  sayHi: function () {
    console.log(`Hi, I am ${this.name}`);// Output: Hi, I am undefined //
     // this.name is undefined because this refers to the global object
  },
};
setTimeout(obs.sayHi, 1000);


let peson = {
  name: "John",
  greet() {
    return () => `Hello, ${this.name}`;// Output: Hello, John // arrow function does not have its own this
    // this.name refers to the outer scope, which is the object peson
  },
};
let greeting = peson.greet();
console.log(greeting());


const userss = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];
const users = userss.find(users => users.id === 2);
console.log(users); // { id: 2, name: 'Jane' }


// Snippet 1
setTimeout(() => {
  console.log('First timeout');
  setTimeout(() => {
    console.log('Nested timeout');
  }, 0);
}, 0);

// Snippet 2
setTimeout(() => {
  console.log('First timeout');
}, 0);
setTimeout(() => {
  console.log('Second timeout');
}, 0);


// Loop 1
for (const element of [1, 2, 3]) {
  console.log(element); // Output: 1, 2, 3 element values
}

// Loop 2
for (const element in [1, 2, 3]) {
  console.log(element); // Output: 0, 1, 2 index values
}

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // Output: 5
console.log(multiply(5, undefined)); // Output: 5 // undefined is converted to 1
console.log(multiply(5, null));// Output: 0 // null is converted to 0


const Tfruits = ["apple", "banana", "cherry", "date"];
//slice() method to extract a portion of the array //slice(startIndex, endIndex)
// Excludes the endIndex but includes the startIndex. fruits.slice(1, 3) extracts elements at index 1 and 2.
const sliced = Tfruits.slice(1, 3); // ["banana", "cherry"]
console.log(sliced);