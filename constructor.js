// if want to create so many object we can use constructor instead writing each object.
// constructor helps to create as many object we want
//for example
function BOOK(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummery = function () {
    return `${this.title} is written by ${this.author} in ${this.year}`;
  };
  this.age = function () {
    console.log(
      `${this.title} is ${new Date().getFullYear() - this.year} years old`
    );
  };
}

//now using BOOK constructor we can create as many object we want

const BookOne = new BOOK("BookOne", "Arafat", 2020);
const BookTwo = new BOOK("BookTwo", "Rifat", 2010);
console.log(BookOne);
console.log(BookOne.getSummery());
BookOne.age();
console.log(BookTwo);
BookTwo.age();
console.log(BookTwo.getSummery());
