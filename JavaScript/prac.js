const arr = [1, 2, 3];
arr[-1] = 4;
console.log(arr.length);

class Test {
    constructor() {
      this.x = 110;
    }
    arrow = () => console.log(this.x);
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
// Output: Arguments(3) [1, 2, 3, calleed: ƒ, Symbol(Symbol.iterator): ƒ]

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
  greetS();
  function multiply(a, b = a * 2) {
    return a * b;
  }
  console.log(multiply(7)); 

const add = (a, b) => a + b;
console.log(add(2));


function process(num, callback) {
  console.log("Processing: " + num);
  return callback(num);  
}
console.log(process(5, num => num * 2));


setTimeout(() => {
  console.log("This runs later!");
}, 2000);
console.log("This runs first!");

function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
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

console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);


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
console.log(`dwwewe`,resuldt);                                                                      

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
console.log("100" - "50" + "10" * 2);

