//1.class & object
class Car {
    constructor(brand, model, color) { // Constructor method (runs when an object is created)
        this.brand = brand;  // 'this' refers to the current object
        this.model = model;
        this.color = color;
    }

    start() { // A method inside the class
        console.log(`${this.brand} ${this.model} is starting... 🚗💨`);
    }

    stop() {
        console.log(`${this.brand} ${this.model} has stopped. 🛑`);
    }
}

// Creating objects (instances) of the Car class
const car1 = new Car("Tesla", "Model S", "Red");
const car2 = new Car("BMW", "X5", "Black");

car1.start();  // Tesla Model S is starting...
car2.stop();   // BMW X5 has stopped.

//2.inheritence
class ElectricCar extends Car {
    constructor(brand, model, color, batteryLife) {
        super(brand, model, color); // Calls the parent class constructor
        this.batteryLife = batteryLife; // New property specific to ElectricCar
    }

    charge() {
        console.log(`${this.brand} ${this.model} is charging. Battery life: ${this.batteryLife}% 🔋`);
    }
}

const tesla = new ElectricCar("Tesla", "Model 3", "White", 90);
tesla.start();  // Tesla Model 3 is starting...
tesla.charge(); // Tesla Model 3 is charging. Battery life: 90% 

//3.Encapsulation;hiding internal details and only exposing what is necessary. In JavaScript, private properties/methods (# symbol) are used to enforce encapsulation
class BankAccount {
    #balance; // Private property

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}. New Balance: $${this.#balance}`);
        } else {
            console.log("Deposit must be greater than 0");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew $${amount}. Remaining Balance: $${this.#balance}`);
        } else {
            console.log("Invalid withdrawal amount");
        }
    }

    getBalance() {
        return `Balance: $${this.#balance}`;
    }
}

// Creating an object
const myAccount = new BankAccount("John Doe", 500);
myAccount.deposit(200);  // Deposited $200. New Balance: $700
myAccount.withdraw(100); // Withdrew $100. Remaining Balance: $600

console.log(myAccount.getBalance()); // Balance: $600
//console.log(myAccount.#balance); // ❌ Error: Private field '#balance' must be accessed within the class

//4.Polymorphism;allows objects of different classes to be treated as objects of a common superclass. This is useful when we have multiple classes that share the same method names.Polymorphism allows child classes to modify or override a method from the parent class.
class Animal {
    makeSound() {
        console.log("This animal makes a sound.");
    }
}

class Dog extends Animal {
    makeSound() {  // Overriding method
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound() {  // Overriding method
        console.log("Meow! Meow!");
    }
}

// Using polymorphism
const myDog = new Dog();
const myCat = new Cat();

myDog.makeSound(); // Output: Woof! Woof!
myCat.makeSound(); // Output: Meow! Meow!

//5.Abstraction hides complex details and only shows essential features.💡 In JavaScript, abstraction is done using abstract classes (via parent classes that should not be instantiated directly).

class Payment {
    processPayment(amount) {
        throw new Error("This method must be implemented in a subclass");
    }
}

class CreditCardPayment extends Payment {
    processPayment(amount) {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class PayPalPayment extends Payment {
    processPayment(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

// Abstract class can't be used directly
// const payment = new Payment(); ❌ Error: Cannot instantiate abstract class

// Using the subclasses
const creditCard = new CreditCardPayment();
creditCard.processPayment(100); // Output: Processing credit card payment of $100

const paypal = new PayPalPayment();
paypal.processPayment(50); // Output: Processing PayPal payment of $50

// Parent class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    work() {
        console.log(`${this.name} is working.`);
    }
}

// Child class: Manager
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    manage() {
        console.log(`${this.name} is managing the ${this.department} department.`);
    }
}

// Child class: Developer
class Developer extends Employee {
    constructor(name, salary, programmingLanguage) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }

    code() {
        console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
    }
}

// Creating objects
const manager = new Manager("Alice", 80000, "IT");
manager.work();   // Output: Alice is working.
manager.manage(); // Output: Alice is managing the IT department.

const developer = new Developer("Bob", 60000, "JavaScript");
developer.work(); // Output: Bob is working.
developer.code(); // Output: Bob is coding in JavaScript.
