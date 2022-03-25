//these days we all use class because it make more easy to do everything
class BOOK {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummery() {
    return `${this.title} is written by ${this.author} in ${this.year}`;
  }
  getAge() {
    console.log(`${this.title} is ${this.year} years old `);
  }
  addProperty(month) {
    this.month = month;
  }
  changeValue(newYear) {
    this.year = newYear;
  }
}
const bookOne = new BOOK("BookOne", "Arafat", 2010);
console.log(bookOne);
console.log(bookOne.getSummery());
bookOne.getAge();
bookOne.addProperty("jan");
console.log(bookOne);
bookOne.changeValue(2022);
console.log(bookOne);

//using class we don't need create prototype than function .it's automatically create when we use class

//set and get Method in class

console.clear();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //now if want to get any property value from this class we can use get property
  get values() {
    return `${this.name} ${this.age}`;
  }
  //we can use set method to set value of any proper we like
  /**
   * @param {any} newName
   */
  set setNames(newName) {
    this.name = newName;
  }
  /**
   * @param {any} newAge
   */
  set setAge(newAge) {
    this.age = newAge;
  }

  //there is another method call static, we can use that
  static getSummery() {
    console.log(`we are using static method here`);
  }

  //adding a new property
  /**
   * @param {any} major
   */
  set Major(major) {
    this.major = major;
  }
  get getMajor() {
    return this.major;
  }
  values() {
    console.log(`${this.name} ${this.age}`);
  }
}
const personOne = new Person("Arafat", 22);
console.log(personOne);
console.log(personOne.values);
personOne.setName = "Samir";
personOne.setAge = 23;
personOne.major = "cse";
console.log(personOne);
//for calling static function structure is className.functionName
Person.getSummery();
console.log(personOne.getMajor);

console.clear();

//now we can inherit person class because person class have name,age
class Student extends Person {
  constructor(name, age, major, grade) {
    super(name, age, major);
    this.major = major;
    this.grade = grade;
  }
  getSummery() {
    console.log(`${this.name} is studing ${this.major}`);
  }
  //if we create same function that Person already have that is call polymorphism
  //for example
  values() {
    super.values(); //if we write this it will call first values function person

    console.log(
      `${this.name} is studing ${this.major} and in exam he got ${this.grade}`
    );
  }
}
const studentOne = new Student("rifat", 21, "BBA", 3.5);
console.log(studentOne);
studentOne.values();
studentOne.getSummery();
