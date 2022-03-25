const allPrototype = {
  getSummery: function () {
    return `${this.title} is written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    console.log(`${this.title} is ${this.year} years old`);
  },
  //we can create as much we want
};
//now we will  create our object
const bookOne = Object.create(allPrototype, {
  title: { value: "BookOne" },
  author: { value: "arafat" },
  year: { value: "2022" },
});
//we can create outside as well
bookOne.month = "jan";
//like this we can create as much object we want
console.log(bookOne);
console.log(bookOne.getSummery());
bookOne.getAge();
