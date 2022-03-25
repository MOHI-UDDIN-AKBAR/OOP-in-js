//we can write function outside of constructor. Because each time when we are creating a new object we are creating function(getSummery and getAge) also. for creating function in outside we can use prototype

function BOOK(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
// now creating function we can use prototype
// structure is nameOFConstructor.prototype.functionName=function(){whatever we want to do}
BOOK.prototype.getSummery = function () {
  return `${this.title} is written by ${this.author} in ${this.year}`;
};
//the same way, we can create function as much as we want using this structure
BOOK.prototype.getNameOfAuthor = function () {
  return `Name of author is ${this.author} `;
};
//we can add new property here
BOOK.prototype.addNewProperty = function (newMonth) {
  this.month = newMonth;
};
//we  change value if we want
BOOK.prototype.changeValue = function (newYear) {
  this.year = newYear;
  delete this.title;
};
const bookOne = new BOOK("BookOne", "rifat", 2020);
const bookTwo = new BOOK("BookTwo", "Arafat", 2022);

console.log(bookOne);
//now for accessing getSummery
console.log(bookOne.getSummery());
console.log(bookOne.getNameOfAuthor());
console.log(bookTwo);
// now if we want to add property we can write
bookOne.addNewProperty("Jan");
//now we will see month added in our object
console.log(bookOne);
bookOne.changeValue(2022);
//now we will see year change to 2022 and title has been deleted
console.log(bookOne);
