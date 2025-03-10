// Sample Product List (this would usually come from a database or API)
const products = [
  { id: 1, name: "Apple", category: "fruit", price: 1.2 },
  { id: 2, name: "Banana", category: "fruit", price: 0.5 },
  { id: 3, name: "Broccoli", category: "vegetable", price: 1.8 },
  { id: 4, name: "Carrot", category: "vegetable", price: 1.0 },
  { id: 5, name: "Milk", category: "dairy", price: 2.5 }
];

// Shopping Cart Array (stores items added by the user)
let cart = [];

/**
 * Display available products
 */
function displayProducts() {
  console.log("\n🛍️ Available Products:");
  products.forEach(product => {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
  });
}

/**
 * Add a product to the shopping cart
 * @param {number} productId - ID of the product to add
 * @param {number} quantity - Quantity of the product
 */
function addToCart(productId, quantity) {
  const product = products.find(p => p.id === productId);

  if (product) {
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
      // If product is already in the cart, update the quantity
      cartItem.quantity += quantity;
    } else {
      // Otherwise, add a new item to the cart
      cart.push({ ...product, quantity });
    }
    console.log(`✅ Added ${quantity} ${product.name}(s) to cart.`);
  } else {
    console.log("❌ Product not found.");
  }
}

/**
 * Remove a product from the shopping cart
 * @param {number} productId - ID of the product to remove
 */
function removeFromCart(productId) {
  const index = cart.findIndex(item => item.id === productId);

  if (index !== -1) {
    console.log(`❌ Removed ${cart[index].name} from cart.`);
    cart.splice(index, 1);
  } else {
    console.log("❌ Product not found in cart.");
  }
}

/**
 * Calculate the total price of the cart
 */
function calculateTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

/**
 * Display the shopping cart
 */
function displayCart() {
  if (cart.length === 0) {
    console.log("\n🛒 Your cart is empty.");
  } else {
    console.log("\n🛒 Shopping Cart:");
    cart.forEach(item => {
      console.log(`${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`);
    });
    console.log(`💰 Total Price: $${calculateTotal()}`);
  }
}

// 🎬 Simulating a real-world shopping experience
displayProducts();
addToCart(1, 2);  // Adding 2 Apples
addToCart(3, 1);  // Adding 1 Broccoli
addToCart(2, 3);  // Adding 3 Bananas
displayCart();     // Display the cart
removeFromCart(3); // Remove Broccoli
displayCart();     // Display the updated cart
console.log("\n🛒 Checkout Completed. Thank you for shopping!");
