// Creating an array
let fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];

// Accessing elements
console.log(fruits[0]); // Output: 🍎 Apple

// Adding elements
fruits.push("🍇 Grapes"); // Adds to the end
fruits.unshift("🍉 Watermelon"); // Adds to the beginning

// Removing elements
fruits.pop(); // Removes the last element
fruits.shift(); // Removes the first element

// Looping through an array
fruits.forEach(fruit => console.log(fruit));


// Creating an object
let person = {
    name: "Alice",
    age: 25,
    job: "Developer",
    skills: ["JavaScript", "TypeScript", "React"]
};

// Accessing object properties
console.log(person.name); // Output: Alice
console.log(person.skills[1]); // Output: TypeScript

// Adding new properties
person.city = "New York";

// Updating properties
person.age = 26;

// Deleting a property
delete person.job;

console.log(person);

/*
const numbers = [10, 20, 30, 40];
for (let i = 0; i < numbers.length; i++) {
  console.log(`for loop`,numbers[i]);
}

let i = 0;
while (i < numbers.length) {
  console.log(`do loop`,numbers[i]);
  i++;
}

i = 0;
do {
  console.log(`while loop`,numbers[i]);
  i++;
} while (i < numbers.length);
*/

const tfruits = ['apple', 'banana', 'cherry'];

// for-in loop // Objects ({}),Arrays (but NOT recommended)
//❌ Does NOT work on Maps, Sets, or Strings properly
for (let index in tfruits) { // don't use for-in with arrays to iterate over the elements:use for-of instead
  console.log(`index "for-in"`,index);  // logs the index: 0, 1, 2
  //console.log(tfruits[index]);// logs the elements: apple, banana, cherry
}

// for-of loop WORKS ON Arrays ([]),Strings (""),Maps (new Map()),Sets (new Set())
// DOES NOT WORK ON Objects ({}) //USE .ENTRIES() METHOD

for (let elements of tfruits) { // use for-of to iterate over the elements of an array // 
  console.log(`element "for-of"`,elements); // logs the elements: apple, banana, cherry
}

// for-of loop with entries // 
for (let [index, elements] of tfruits.entries()) {
  console.log(`element "for-of" for`,index,`no index`,elements); // logs the elements: apple, banana, cherry
}
// forEach method // forEach() → Works on Arrays Arrays ([])// Does NOT work on Objects ({}), Maps, Sets, or Strings
// forEach doesn't create a new array map() and filter() do. foreach can modify the original array but array.map() and array.filter() do not modify the original array but they can reassigned to the original array
tfruits.forEach((elements, index,tfruits) => { // use forEach to iterate over the elements of an array 
// forEach takes a callback function with the element and index as arguments
  console.log(`element "forEach"`,index,elements,tfruits); // logs the elements: apple, banana, cherry
});


var text = 'Hello';

for (const char of text) {
  console.log(char); // Output: H, e, l, l, o // output: Hello if text = ['Hello']
}

const user = { name: "tamim", age: 25, country: "BD" };

for (const key in user) {  // for-of wont work here AS it is an object
  console.log(`${key}: ${user[key]}`);
}
let arr = [10, 20, 30];
arr[100] = 50; // Add an element at index 101

for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]); // Output: 10, 20, 30,undefined 97 times  50
}


const numbers = [2, 3, 4];
numbers.forEach((num, index, arr) => {
  arr[index] = num * 2;
//console.log(arr/numbers);// Output: [ 4, 3, 4 ] 
                           //         [ 4, 6, 4 ]
                           //         [ 4, 6, 8 ]
//console.log(`element`,num); // output: 2,3,4
//console.log('index`,index); // output: 0,1,2 

});
console.log(numbers); // Output: [4, 6, 8] // forEach method modifies the original array //wont return the original array 3 times as it outside loop
  
let ar8r = [1, 2, 3, 4];
let result = ar8r.reduce((ac8c, num) => ac8c + num, 0);
console.log(`red`,result);


const arrt = [1, 2, 3];

const newArr = arrt.forEach(num => num * 2);

console.log(`dss`,newArr);// Output: undefined // forEach method does not return a new array but mofies the original array
                          // arrt = [1, 2, 3] // newArr = undefined
/*
arrt.forEach((num, index, arry) => {
  arry[index] = num * 2; // Modifies the original array
});
console.log(arrt); // Output: [2, 4, 6] // forEach method modifies the original array
*/

//
const array = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

console.log(array.find(item => item.id === 2)); // Output: { id: 2, name: 'Bob' }
console.log(array.find(item => item.id === 4)); // Output: undefined
console.log(array.findIndex(item => item.id === 2)); // Output: 1 // 1 is the index of the element with id 2
console.log(array.findIndex(item => item.id === 4)); // Output: -1 //-1 indicates that the element was not found



const adrr = [10, 20, 30];
adrr.forEach((val, index) => {
  if (val === 30) return; // return statement does not stop the loop
  console.log(val);// Output: 10, 20 // 30 is skipped due to the return statement 
});

//regular function
const obj = {
  name: "Alice",
  greet: function () {
    function sayHello() {
      console.log(this.name); // ❌ `this` is undefined in strict mode, or `window` in non-strict mode
    }
    sayHello();
  },
};

obj.greet(); // ❌ Output: undefined (or "Alice" in non-strict mode)

//arrow function
const obj1 = {
  name: "Alice",
  greet: function () {
    const sayHello = () => {
      console.log(this.name); // ✅ `this` refers to `obj` due to lexical scope
    };
    sayHello();
  },
};

obj1.greet(); // ✅ Output: "Alice"

/*
const obi = {
  value: 10,
  getValue: () => console.log(this.value) // Output: undefined
};
obi.getValue();// Arrow functions do not have their own this, so this.value refers to the outer scope, which does not have value.
*/

const obj2 = {
  name: 'Object',
  regularMethod: function() {
    console.log(this.name); // Output: Object
  },
  arrowMethod: () => {
    console.log(this.name); // Output: undefined
    // arrow function does not have its own this so it will take this from its parent scope
    // in this case, the parent scope is the global scope so it will log undefined
    
  }
};

obj2.regularMethod(); // Output: Object
obj2.arrowMethod(); // Output: undefined


function partition(array, predicate) {
  return array.reduce(
    (result, element) => {
      result[predicate(element) ? 0 : 1].push(element);
      return result;
    },
    [[], []]
  );
}

const numbersj = [1, 2, 3, 4, 5];
const [evens, odds] = partition(numbersj, num => num % 2 === 0);
console.log(evens); // [2, 4]
console.log(odds);  // [1, 3, 5]

const data = [
  { id: 1, values: [10, 20] },
  { id: 2, values: [30, 40] }
];

const Aresult = data
  .map(item => item.values)//[
                           //  [10, 20],  // Extracted from { id: 1, values: [10, 20] }
                           //  [30, 40]   // Extracted from { id: 2, values: [30, 40] }
                           //]
  .reduce((acc, values) => acc.concat(values), []) //[10, 20, 30, 40] // Flattened array
  .filter(val => val > 20); //[30, 40] // Filtered values greater than 20

console.log(Aresult);