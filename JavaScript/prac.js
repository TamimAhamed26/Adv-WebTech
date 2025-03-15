const arr = [1, 2, 3];
arr[-1] = 4; // setting a value to an array index that doesn't exist
arr[-2] = 5; // setting another value to a non-existent index
console.log(arr.length); // 3

class Test {
    constructor() {
      this.x = 110;
    }
    arrow = () => console.log(this.x); // 110
  }
  const obj = new Test();
  const fn = obj.arrow;
  fn();
  

  const objy = {
    value: 42,
    regularFunction: function() {
        console.log(this.value);
    }
};
objy.regularFunction(); // Output: 42
const arrowFunction = () => console.log(this.value);
objy.arrowFunction = arrowFunction;
objy.arrowFunction(); // Output: undefined


function regular() {
    console.log(arguments);
}
regular(1, 2, 3); 
// Output: Arguments(3) [1, 2, 3, called: ƒ, Symbol(Symbol.iterator): ƒ]

const arrow = (...args) => {
    console.log(args);
};
arrow(1, 2, 3); // Output: [1, 2, 3]


function Person(name) {
    this.name = name;
}
const p = new Person("TAMIM");
console.log(p.name); // Output: "TAMIM"

function outer(callback) {
    let x = 190;
    callback(x);
  }
  outer((num) => console.log(num * 2));
  
  function greetS(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  greetS(); // Output: Hello, Guest!

  function multiply(a, b = a * 2) {
    return a * b;
  }
  console.log(multiply(7)); 

const add = (a, b) => a + b;
console.log(add(2));//NaN // 2 + undefined = NaN // 


function process(num, callback) {
  console.log("Processing: " + num); // Processing: 5
  return callback(num);  
}
console.log(process(5, num => num * 2)); // 10


setTimeout(() => {
  console.log("This runs later!"); // Output after 2s: This runs later!
}, 2000);
console.log("This runs first!"); // Output: This runs first!

function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded"); // callback function is called after 2 seconds
  }, 2000);
}

fetchData(result => console.log(result)); // Output after 2s: "Data loaded"


const objd= {
  name: "Example",
  greet: () => {
    console.log(`Hello, ${this.name}!`);//arrow function does not have its own this
                                        // so it will take this from its parent scope
  }
};
objd.greet();//Output: Hello, undefined! // 

//1, 4, 3, 2

class Parent {
  constructor(name) {
    this.name = name;
  }

   static sayHello() { // static method
    console.log("Hello from Parent!");
  }
}

class Child extends Parent {}

//const rq= new Child();
//rq.sayHello();//  IF parent class had sayHello() as instance method
                
Child.sayHello();// Hello from Parent! // Static method is inherited // static sayHello() 
                 // ERROR: Child.sayHello() is not a function IF parent class had sayHello() as instance method
 
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const pet = new Animal("Generic Animal");
const dog = new Dog("Buddy");

pet.speak(); // Generic Animal makes a noise.
dog.speak(); // Buddy barks.




const str = "banana";
const result = str.split("").map(char => char.toUpperCase()).join("");// split() method to split the string into an array of characters
console.log(result);// Output: "BANANA"                              // map() method to convert each character to uppercase
                                                                      // join() method to join the characters back into a string

const ardr = ["apple", "banana", "cherry"];
const resuldt = ardr.map(item => item.length).filter(length => length > 5);
console.log(`dwwewe`,resuldt); // Output: [6, 6]                                                                     

const numbers = [1, 4, 6, 9, 3];
console.log(`dsda`,numbers.filter(num => num > 5)[0]); // ✅ Output: 6//numbers.find(num => num > 5); 
console.log(`dsda`,numbers.find(num => num > 5)); // ✅ Output: 6//find() method to get the first element that satisfies the condition



const st = "JavaScript";
//const resut = str.filter(char => !['a', 'e', 'i', 'o', 'u'].includes(char));//TypeError,filter() works on arrays, not strings.
const resut = st.split("").filter(char => !['a', 'e', 'i', 'o', 'u'].includes(char));
//const resut = str.map(char => char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u'); //TypeError,map() works on arrays, not strings.

console.log(resut.join("")); // ✅ Output: "JvScrpt"

const tr = "   JavaScript is awesome!   ";
const reslt = tr.trim().split(" ").map(word => word.toUpperCase()).join("-");
console.log(reslt); // ✅ Output: "JAVASCRIPT-IS-AWESOME!"


const words = ["apple", "banana", "cherry"];
const rslt = words.map(word => word[0].toUpperCase() + word.slice(1));// map() method to capitalize the first letter of each word
                                                                  // slice() method to get the rest of the word
console.log(rslt);//["Apple", "Banana", "Cherry"]


const sp = "Hello World!";
const ret = sp.split(" ").map(word => word.toUpperCase());
console.log(ret);// Output: ["HELLO", "WORLD!"]


let text = "Hello";
console.log(text[0]); // 'H'
console.log(text[2]); // 'e'

console.log(parseInt("100px")); // 100
console.log(parseFloat("3.14")); // 3.14
console.log(Number("42")); // 42
console.log(+"99.5"); // 99.5

console.log(Math.floor(4.9) === Math.trunc(4.9));//true // Math.floor() rounds down to the nearest integer
                                                  // Math.trunc() removes the decimal part of a number

console.log((0.1 + 0.2).toFixed(1) === "0.3");//true // toFixed() method to round a number to a specified number of decimal places
                                                    // 0.1 + 0.2 = 0.3000000000000000 toFixed(1) = 0.3
console.log("100" - "50" + "10" * 2); // 70 
                                      // JavaScript automatically converts strings to numbers when using the - and * operators

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processSteps() {
  console.log("Step 1: Start");
  
  await delay(1000); // Wait 1 second
  console.log("Step 2: Load Data");

  await delay(2000); // Wait 2 seconds
  console.log("Step 3: Process Data");

  await delay(1000); // Wait 1 second
  console.log("Step 4: Complete");
}

processSteps();


console.log("Start of script");

async function fetchData() {
    console.log("Fetching data at first..."); // Output: Fetching data at first...
    await delay(2000); // Wait 2 seconds
    return Promise.resolve("Data received at last Output after 2s");
}

fetchData().then(console.log);// Output after 2s: Data received at last

console.log("End of script");

async function test() {
  throw new Error("Something went wrong!");
}

//test();
//console.log("Hello sdadasdasdsa");//Uncaught Error: Something went wrong! but "Hello sdadasdasdsa" will be printed

/*
async function demo() {
  console.log(`demo 1`);//
  await Promise.resolve();
  console.log(`demo 2`);
}
console.log(`demo 3`); // synchronous runs first
//} here would make the output: demo 1, demo 4, demo 2, demo 3
demo();//function call since it is async it will run after synchronous code and will return a promise implicitly
       // Output: demo 3, demo 1, demo 4, demo 2
console.log(`demo 4`);
*/
async function demo() {
  console.log(`demo 1`);
  await Promise.resolve(); //microtask await higher priority than macrotask setTimeout
  console.log(`demo 2`);
}

console.log(`demo 3`);
setTimeout(() => console.log(`demo 5`), 0); // macrotask runs after microtask
//setTimeout is a macrotask, it will run after the current macrotask is completed
demo();
console.log(`demo 4`);
//Output: 3, 1, 4, 2, 5


async function foo() {
  return 10;
}
async function bar() {
  let x = foo(); // Promise.resolve(10).
  console.log(await x + 5);//AWAIT will wait for the promise to resolve and then add 5 to it
}
bar();

