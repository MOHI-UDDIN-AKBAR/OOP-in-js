function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getSummery = function () {
  console.log(`${this.name} is ${this.age} years old`);
};

Person.prototype.getBirthYear = function () {
  return `${new Date().getFullYear() - this.age}`;
};
function Student(name, age, major) {
  //here we can see student also have name and age , similar to person.
  //so we can inherit it so easily
  //for inherit person structure is nameOfConstructor.call(this,andAllTheValueThatMatchToConstructorWeWillInherit)
  Person.call(this, name, age);
  //since major is not in Person constructor so
  this.major = major;
}
Student.prototype = Object.create(Person.prototype); //basically we are saying that we can use prototype of person
Student.prototype.constructor = Student;
const personOne = new Person("arafat", 23);
console.log(personOne);
personOne.getSummery();
const studentOne = new Student("Rifat", 21, "BBA");
//we will see constructor name is Person. to change it we have to write line 21
console.log(studentOne);
//we will get an error that getSummery is not a function
//to fixed that problem we have to write line 17
studentOne.getSummery();
console.log(studentOne.getBirthYear());
