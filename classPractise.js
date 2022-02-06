//contains examples on class, constructor, object constructor function, class intances(an instance of a class is an object)
class Door {
  constructor(color, height, width, open, handle) {
    this.color = color;
    this.height = height;
    this.width = width;
    this.open = open;
    this.handle = handle;
  }
  openDoor(params) {
    this.open = params;
  }
}

function Book(name, author, price, width, height, breadth, weight) {
  //this is an object constructor function
  this.name = name;
  this.author = author;
  this.price = price;
  this.width = width;
  this.height = height;
  this.breadth = breadth;
  this.weight = weight;
}

const bathroomDoor = new Door("red", 7, 2, false, { length: 6, color: "red" }); //create instance of Door class. bathroomDoor is an object
const kitchenDoor = new Door("brown", 7, 2, true, { length: 6, color: "red" });

const statTextBook = new Book(
  "Fundamentals of Statistics",
  "S. C Gupta",
  10.99,
  8,
  10,
  3.5,
  5
);

console.log(bathroomDoor);
console.log(kitchenDoor);
console.log(statTextBook);
