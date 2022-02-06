// contains examples on objects, properties, methods, arrow function, array mapping
const door = {
  color: "red",
  height: 7,
  width: 2,
  open: false,
  handle: {
    length: 6,
    color: "red",
  },
  openDoor: function (opened) {
    //a method is a property that contains a function
    //this accepts a boolean parameter, true/false
    this.open = opened;
    if (!door.open) {
      return console.log("Door is closed.");
    } else {
      return console.log("Door is opened.");
    }
  },
  changeColor: function (newcolor) {
    //accepts a color string
    this.color = newcolor;
  },
};

console.log("The door is ", door.color); //dot notation for accessing object properties
console.log(door.open);
console.log(door["color"]); //bracket notation for accessing object properties

if (!door.open) {
  console.log("Door is closed.");
} else {
  console.log("Door is open.");
}

const profile = {
  name: "John Doe",
  dob: 1987,
  age: 0,

  calcAge: function (currentYear) {
    //accepts current year and calculates John Doe's age
    this.age = currentYear - this.dob;
  },
};

console.log(profile.age);

var anArray = [1, 2, 3, 5, 8, 4]; // a var is globally scoped, even if defined inside a function. while let and const are locally scoped if defined inside a function.
//var is also mutable, as with let. const is immutable.

anArray.map((nums) => {
  //this is a map function to loop through an array
  console.log("Numbers:", nums);
});

console.log("This is the array:", anArray.slice(1, 3));
console.log(anArray.slice());

const add = (a, b) => a + b; //this is an arrow function. you can pass parameters like a regular function
console.log("Arrow functionn adds this:", add(3, 4));
