// 1️⃣ Callback Version
function orderFoodCallback(food, callback) {
    console.log(`Order placed: ${food}. Preparing your food...`);

    setTimeout(() => {
        console.log(`${food} is ready!`);
        callback(food);
    }, 2000);
}

function serveFood(food) {
    console.log(`Serving ${food} to the customer. Enjoy your meal!`);
}

// Order using a callback
orderFoodCallback("Burger", serveFood);


// 2️⃣ Promise Version
//explain promise
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
function orderFoodPromise(food) {
    return new Promise((resolve, reject) => {
        console.log(`Order placed for ${food}. Processing your request...`);

        setTimeout(() => {
            let isAvailable = Math.random() > 0.3;

            if (isAvailable) {
                resolve(`${food} is delivered! 🍽️`);
            } else {
                reject(`${food} is unavailable. Order canceled. ❌`);
            }
        }, 3000);
    });
}

// Order using a Promise
orderFoodPromise("Pasta")
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

//3  async/sync Version
function prepareFood(food) {
    return new Promise((resolve) => {
        console.log(`Order placed for ${food}. Preparing... 🍳`);
        setTimeout(() => {
            resolve(`${food} is ready! 🍽️`);
        }, 3000); // Simulating a 3-second preparation time
    });
}

async function orderFood() {
    console.log("Welcome to our restaurant! 🏡");
    
    let food = await prepareFood("Pizza");
    console.log(food); // This waits for food to be ready before continuing

    console.log("Enjoy your meal! 😋");
}

// Calling the function
orderFood();
console.log("Meanwhile, you can grab a drink... 🍹");
