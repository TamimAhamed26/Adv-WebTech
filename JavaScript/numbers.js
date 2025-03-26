let num1 = 10;
let num2 = 3.5;

// Basic operations
console.log(num1 + num2); // Addition
console.log(num1 - num2); // Subtraction
console.log(num1 * num2); // Multiplication
console.log(num1 / num2); // Division
console.log(num1 % num2); // Modulus (remainder)

// Math methods
console.log(Math.round(4.7));  // Rounds to nearest integer
console.log(Math.floor(4.9));  // Rounds down
console.log(Math.ceil(4.1));   // Rounds up
console.log(Math.random());    // Generates a random number between 0 and 1
console.log(Math.max(10, 20, 30)); // largest number
console.log(Math.min(10, 20, 30)); // smallest number


// Example usage:
function calculateTotalPrice(price, discountPercentage, taxPercentage) {
    let discountAmount = (price * discountPercentage) / 100;
    let priceAfterDiscount = price - discountAmount;
    let taxAmount = (priceAfterDiscount * taxPercentage) / 100;
    let finalPrice = priceAfterDiscount + taxAmount;

    return Math.round(finalPrice); // Rounding off to the nearest dollar
}


let totalPrice = calculateTotalPrice(500, 10, 5); // 10% discount, 5% tax
console.log(`Final Price: $${totalPrice}`); 
