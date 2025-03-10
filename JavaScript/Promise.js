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


