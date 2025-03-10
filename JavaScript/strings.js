//call back function //asynchronous function  continues executing other code while waiting for the operation to finish.
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}

fetchData((message) => {
    console.log(message);
});

//moify string
function modifyString(sentence) {
    console.log("Original:", sentence);

    let upperCaseStr = sentence.toUpperCase();
    console.log("Uppercase:", upperCaseStr);

    let dashedStr = sentence.replace(/ /g, "-");
    console.log("Dashed:", dashedStr);

    console.log("Character count:", sentence.length);
}

modifyString("goQd JavaScript!");

//capitalize first letter of each word
function capitalizeName(name) {
    let words = name.split(" ");
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
}

console.log(capitalizeName("tAmim ahamed")); // Tamim Ahamed

// Get domain from email
function getDomain(email) {
    return email.split("@")[1];
}

console.log(getDomain("tamim.26mar@gmail.com")); // Output: gmail.com

// Check if a password is valid
function isValidPassword(password) {
    const regex = /^(?=.*[0-9])(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

console.log(isValidPassword("Test@123")); // Output: true
console.log(isValidPassword("test123"));  // Output: false

// Check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(11)); // Output: true
console.log(isPrime(12)); // Output: false

// Sort an Array
const users = [
    { name: "Alice", age: 25 },
    { name: "Aob", age: 22 },
    { name: "Charlie", age: 30 }
];

users.sort((a, b) => a.age - b.age);
console.log(users);

// Filter an Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

//Fetch Data from an API (Async/Await)
async function fetchPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data.slice(0, 2)); // Show first 5 posts
}

fetchPosts();

//Fetch Data from an API (Promise) //A Promise is an object that represents a value that might be available now, later, or never.
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data.slice(0, 2))); // Show first 5 posts

//Convert an Object to Query String (for API Requests)
function objectToQueryString(obj) {
    return new URLSearchParams(obj).toString();
}
console.log(objectToQueryString({ name: "John", age: 30 })); 
// Output: "name=John&age=30"

fetch("https://jsonplaceholder.typicode.com/posts/8")
    .then(response => response.json())  // Convert response to JSON
    .then(data => console.log(data))    // Handle the data
    .catch(error => console.log(error)); // Handle errors


    
//write a letter that will return random letter of your name
function getRandomLetter(name) {
        let index = Math.floor(Math.random() * name.length);
        return name[index];
}
    
    // Example usage:
let myName = "Tamim";
console.log(`Random Letter of name: ${getRandomLetter(myName)}`);
       

