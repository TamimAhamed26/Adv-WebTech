// User details and order information
const user = {
    name: "Tamim",
    role: "admin", // "admin", "editor", "viewer"
};

const order = {
    status: "shipped", // "pending", "shipped", "delivered", "cancelled"
    total: 150,
    discountEligible: true
};

// Decision Tree: Access Control based on User Role
if (user.role === "admin") {
    console.log("Access granted for", user.name, "Full control Authorized");
} else if (user.role === "editor") {
    console.log("Access granted for", user.name, "Limited control");
} else if (user.role === "viewer") {
    console.log("Access granted for", user.viewer, "Read-only mode");
} else {
    console.log("Access denied");
    return; 
}

// Switch: Order Status Message
switch (order.status) {
    case "pending":
        console.log("Your order is pending. Please wait...");
        break;
    case "shipped":
        console.log("Your order has been shipped. Check your email for tracking.");
        break;
    case "delivered":
        console.log("Your order has been delivered. Enjoy!");
        break;
    case "cancelled":
        console.log("Your order has been cancelled. Contact support for details.");
        break;
    default:
        console.log("Order status unknown.");
}

// Ternary Operator: Discount Message
const discountMessage = order.discountEligible ? "You get a discount on your order!" : "No discounts available.";
console.log(discountMessage);



