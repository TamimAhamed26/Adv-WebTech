/*
//class 
class Parent {
    static show() { // Static method
      return "Static Method Parent";
    }
  }
  
  class Child extends Parent {
    show() { // Instance method
      return "Instance method Child";
    }
  }
  
  console.log(Child.show()); // Output: Parent (static method is inherited) since no instance is created so static method is called
  console.log(new Child().show()); // Output: Child (instance method is not inherited) since instance is created so instance method is called
  
//Encapsulation 
  
  class BankAccount {
    #balance; // Private property
  
    constructor(owner, balance) {
      this.owner = owner;
      this.#balance = balance;
    }
  
    deposit(amount) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount("John", 500);
  account.deposit(200);
  console.log(account.getBalance());
  //console.log(account.#balance); // ❌ Error! Private property
  
//Inheritance 
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Some generic sound...");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Woof! Woof!");
    }
  }
  
  const dog = new Dog("dog");
  dog.makeSound();
  
  // Polymorphism
  class Vehiclet {
    drive() {
      console.log("Driving a vehicle...");
    }
  }
  
  class Cart extends Vehiclet {
    drive() {
      console.log("Driving a car...");
    }
  }
  
  class Biket extends Vehiclet {
    drive() {
      console.log("Riding a bike...");
    }
  }
  
  const v1 = new Cart(); // Instance of Car
  const v2 = new Biket(); // Instance of Bike
  const v3 = new Vehiclet();// Instance of Vehicle

  v1.drive();// driving a car
  v2.drive();// riding a bike
  v3.drive();// driving a vehicle
  
// Abstraction
class Shape {
    constructor() {
      if (this.constructor === Shape) {
        throw new Error("Cannot instantiate abstract class!");
      }
    }
  
    area() {
      throw new Error("Method 'area()' must be implemented.");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  const c = new Circle(5);
  console.log(c.area());



class Vehicle {
  constructor(type) {
    this.type = type;
  }

  describe() {
    console.log(`This is a ${this.type}.`);
  }
}

class Car extends Vehicle {
  constructor(type, brand) {
    super(type);
    this.brand = brand;
  }

  describe() {
    super.describe();
    console.log(`The brand is ${this.brand}.`);
  }
}

const myCar = new Car("Car", "Toyota");
myCar.describe(); //This is a Car.
                  //The brand is Toyota.

*/

// 🌟 Base Class: Vehicle
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Method to display vehicle details
    getDetails() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}

// 🚗 Child Class: Car
class Car extends Vehicle {
    constructor(brand, model, year, doors) {
        super(brand, model, year); // Call parent constructor
        this.doors = doors;
    }

    // Overriding getDetails()
    getDetails() {
        return `${super.getDetails()} with ${this.doors} doors`;
    }
}

// 🏍️ Child Class: Bike
class Bike extends Vehicle {
    constructor(brand, model, year, type) {
        super(brand, model, year);
        this.type = type; // e.g., Sports, Cruiser
    }

    getDetails() {
        return `${super.getDetails()} (${this.type} Bike)`;
    }
}

// 🚛 Child Class: Truck
class Truck extends Vehicle {
    constructor(brand, model, year, capacity) {
        super(brand, model, year);
        this.capacity = capacity; // e.g., 10 Tons
    }

    getDetails() {
        return `${super.getDetails()} with capacity of ${this.capacity} tons`;
    }
}

// 🌍 Creating objects
const myCar = new Car("Tesla", "Model S", 2022, 4);
const myBike = new Bike("Yamaha", "R1", 2023, "Sports");
const myTruck = new Truck("Volvo", "FH16", 2021, 20);

// 🔥 Convert to JSON (Serialization)
const vehiclesArray = [myCar, myBike, myTruck];
const vehiclesJSON = JSON.stringify(vehiclesArray, null, 2);
console.log("🚗 Vehicles JSON:\n", vehiclesJSON);

// 🔄 Convert JSON back to Objects (Deserialization)
const parsedVehicles = JSON.parse(vehiclesJSON);
console.log("🔄 Parsed Vehicles:\n", parsedVehicles);


class Counter {
  static count = 0;

  constructor() {
    this.increment();
  }

  increment() {
    Counter.count++;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();
console.log(Counter.count); // 2


class Test {
  constructor() {
    this.x = 10;
  }

  get value() {
    return this.x;
  }

  set value(newValue) {
    this.x = newValue;
  }
}

const obj = new Test();
obj.value = 20;
console.log(obj.value);


class Person {
  constructor(name) {
    this.name = name;
  }

  static createPerson(name) {
    return new Person(name);
  }
}

const person1 = Person.createPerson("Tamim");
console.log(person1.name); // Tamim


class Parent {
  constructor() {
    this.name = "Parent";
    this.greet();
  }

  greet() {
    console.log(`Hello from ${this.name}`);
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.name = "Child";
  }

  greet() {
    super.greet();
    console.log("Hello from Child");
  }
}

const child = new Child();
child.greet();// Hello from Child // Hello from Parent if child.greet() is not called
              // Hello from Child

          