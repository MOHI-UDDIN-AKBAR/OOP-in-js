const book1 = {
  title: "BookOne",
  author: "Arafat",
  year: "2010",
  getSummery: function () {
    console.log(`${this.title} is written by ${this.author} in ${this.year}`);
  },
};
const book2 = {
  title: "BookTwo",
  author: "Samir",
  year: "2015",
  getSummery: function () {
    console.log(`${this.title} is written by ${this.author} in ${this.year}`);
    // return `${this.title} is written by ${this.author} in ${this.year}`;
    return this;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};
console.log(book1);
book1.getSummery();
console.log(book2);
console.log(book2.getSummery().getAge()); // if want to see both function in object we have to write line 16 instead 14 and have to comment line 15.
