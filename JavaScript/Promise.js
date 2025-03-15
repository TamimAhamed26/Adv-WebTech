/*
// Simulating a user authentication system with callbacks, promises, and async/await

// Step 1: Simulating user login using a Callback
function loginUser(username, password, callback) {
    console.log("Logging in...");
    setTimeout(() => {
        if (username === "admin" && password === "1234") {
            callback(null, { userId: 1, username: "admin" });
        } else {
            callback("Invalid credentials", null);
        }
    }, 1500); // Simulating network delay
}

// Step 2: Fetch User Profile using a Promise
function getUserProfile(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching user profile...");
        setTimeout(() => {
            if (userId === 1) {
                resolve({ userId: 1, name: "Alice", email: "alice@example.com" });
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}

// Step 3: Fetch User Activity Logs (Returning a Thenable)
function getUserActivity(userId) {
    return {
        then: function (resolve) {
            console.log("Fetching user activity logs...");
            setTimeout(() => {
                resolve([
                    { activity: "Logged in", timestamp: "2025-02-27T10:00:00Z" },
                    { activity: "Viewed dashboard", timestamp: "2025-02-27T10:05:00Z" }
                ]);
            }, 1200);
        }
    };
}

// Step 4: Fetch additional data from an API using Fetch (Real-world API call)
async function fetchAdditionalData() {
    try {
        console.log("Fetching additional data from API...");
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching API data:", error);
        return null;
    }
}

// Step 5: Using Async/Await to Manage the Full Process
async function authenticateUser(username, password) {
    try {
        // 1. Login using callback
        loginUser(username, password, async (error, user) => {
            if (error) {
                console.error("Login failed:", error);
                return;
            }
            console.log("Login successful:", user);

            // 2. Fetch User Profile (Promise)
            const profile = await getUserProfile(user.userId);
            console.log("User Profile:", profile);

            // 3. Fetch User Activity (Thenable)
            getUserActivity(user.userId).then((activityLogs) => {
                console.log("User Activity Logs:", activityLogs);
            });

            // 4. Fetch Additional API Data (Async/Await + Fetch)
            const additionalData = await fetchAdditionalData();
            console.log("Additional Data from API:", additionalData);
        });
    } catch (error) {
        console.error("Error in authentication process:", error);
    }
}

// ** Run the function with test credentials **
authenticateUser("admin", "1234");



class Parent {
    constructor() {
      this.name = "Parent";
    }
  }
  
  class Child extends Parent {
    constructor() {
      super();
      this.name = "Child";
    }
  
    display() {
      console.log(this.name);
    }
  }
  
  const childObj = new Child();
  childObj.display();
  

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1, arr2);


const re = [3, 5, 8, 2, 6];
const ret = arr.filter(num => num > 4).map(num => num - 1);
console.log(`5,6,8`,ret)


*/

//promises
const myPromise = new Promise((resolve, reject) => {  
    // PROMISE is a constructor that takes a function with two parameters: resolve and reject
    // PENDING is the initial state of a promise
    console.log("Task started...");
    setTimeout(() => {
        let success = Math.random() > 0.5; // Randomly deciding success or failure
        if (success) {
            resolve("Task completed!"); // Resolving promise
        } else {
            reject("Task failed!"); // Rejecting promise
        }
    }, 2000); // Simulates an async operation with a 2-second delay
});

// Using the Promise
myPromise
    .then((message) => console.log("Success:", message)) // Runs if resolved // THEN is used to handle the resolved promise
    .catch((error) => console.log("Error:", error)) // Runs if rejected // CATCH is used to handle the rejected promise
    .finally(() => console.log("Process finished.")); // Always runs // FINALLY is used to run code after the promise is settled

console.log("Task finished before promise...");

// fetch data promise
const fetchData = () => { //fetchData is a function that returns a promise
  return new Promise((resolve) => { // it can only be resolved
    setTimeout(() => resolve("Data received"), 1000);
  });
};

fetchData()
  .then((data) => {
    console.log(data);
    return "Processing data..."; // Returns new value for next .then()
  })
  .then((message) => console.log(message))
  .catch((error) => console.error("Error:", error));

  // async/await with promises
  async function fetchDataAsync() {
    try {
      let data = await fetchData();
      console.log(data);
    } catch (err) {
      console.log("Error:", err);
    }
  }
  fetchDataAsync();
  

// difference between .then() and async/await
  function getNumber() {
    return new Promise((resolve) => setTimeout(() => resolve(42), 1000));
  }
  
  // Using .then()
  getNumber().then((num) => console.log(`getnumber then`,num));
  
  // Using async/await
  async function getAsyncNumber() {
    let num = await getNumber();
    console.log(num);
  }
  getAsyncNumber();
  

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
  

  function delayedSum(a, b) {
    return new Promise(resolve => {
        setTimeout(() => resolve(a + b), 1000);
    });
  }
  
  async function calculate() {
    let result = await delayedSum(99, 91);
    console.log(result);
  }
  
  calculate();
  console.log("Processing...");//Output: Processing... 190
  

function getNumbert() {
    return Promise.resolve(462);
}

async function printNumbert() {
    let numll = await getNumbert();
    console.log(numll);//Output: 462
}
printNumbert();
console.log("Done it will be printed first");//Output: Done it will be printed first


function asyncMultiply(a, b) {
  return new Promise(resolve => setTimeout(() => resolve(a * b), 2000));
}

async function compute() {
  console.log(await asyncMultiply(2, 5));//Output: 10 after 2s and waiting
  console.log("After multiplication");
}

compute();
console.log("Waiting...");//Output: Waiting... 10, After multiplication


async function double(x) {
  return x * 2;
}
console.log(double(10) instanceof Promise);//Output: true


async function fetchData0() {
  let response = fetch("https://example.com");
  console.log(response);
}
fetchData0();//Output: Promise { < pending > }


var Aarray = [1, 2, 3, 4, 5]; // const Aarray ; will throw an error, var and let will work 
                              // because we are reassigning the value of Aarray
Aarray = Aarray.map(num => num * 2); // [2, 4, 6, 8, 10]
Aarray = Aarray.filter(num => num > 5);//[6, 8, 10]
console.log(Aarray); 