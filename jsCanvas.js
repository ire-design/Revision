/*Array Iteration*/
const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
      personalQuote: "You're never too old to learn something new",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
      personalQuote: "I just got lost in thought - it was unfamiliar territory",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote: "Always remember you’re unique, just like everyone else",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
      personalQuote: "Behind every great man is a woman rolling her eyes",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote:
        "You don’t have to see the whole staircase, just take the first step",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
      personalQuote:
        "Failure is not the opposite of success: it’s part of success",
    },
  ];

function printFirstName (users) {
    for(const user of users){
        console.log(user.firstName)
    }
}
printFirstName(users)

console.log("\n---\n");

function printFavColor(users, color){
    for(const user of users){
        if(user.favoriteColor === color){
            console.log(user.firstName, user.favoriteColor)
        }
    }
}
printFavColor(users, "Blue")

console.log("\n---\n");

/* 
Finding Array Elements
* indexOf()
* find() 
*/

const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];
console.log(cards.indexOf('jack of clubs'))
/* If the element isn't contained in the array, it returns -1. */
console.log(cards.indexOf('jack of hearts'))
/* If you pass in the optional second argument, indexOf() will begin the search at the specified position */
console.log(cards.indexOf('ace of spades', 2))

/* array.prototype.find() */



console.log("\n---\n");

/*Filtering Arrays */
const filteredUsers = users.filter(function(user){
  return user.favoriteColor === 'Blue' && user.favoriteAnimal === 'Penguin'
})
console.log(filteredUsers)

console.log('\n---\n')
/* filter quiz*/
/*1. Write a filter function to return only people aged 18 or older.
 */
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 16 },
];

const over18 = people.filter(function(people){
  return people.age >= 18
})
console.log(over18)

const over181 = people.filter(people => people.age >= 18)
console.log(over181)

/*2. Write a filter function to return only items that are red.*/

const items = [
  { type: "shirt", color: "red" },
  { type: "pants", color: "blue" },
  { type: "hat", color: "red" },
  { type: "scarf", color: "green" },
];

const redItems = items.filter(function(item){
  return item.color === "red"
})
// use arrow fn
const blueItems = items.filter(item => item.color === "blue")
console.log(blueItems)

console.log('\n---\n')
/*
*3. Write a filter function to return cars that are blue and made after 2019.

*/
const cars = [
  { brand: "Toyota", year: 2020, color: "blue" },
  { brand: "Honda", year: 2018, color: "red" },
  { brand: "Ford", year: 2021, color: "blue" },
  { brand: "Chevrolet", year: 2019, color: "red" },
];

const filteredCars = cars.filter(car => car.year > 2019 && car.color === 'blue' )
console.log(filteredCars)

console.log('\n---\n')

/*4.Write a filter function to return employees who work in New York.
 */
const employees = [
  { name: "Sarah", 
    role: "Engineer", 
    location: { 
                city: "New York", 
                country: "USA" 
              } 
  },
  { name: "Tom", role: "Designer", location: { city: "London", country: "UK" } },
  { name: "Anna", role: "Manager", location: { city: "New York", country: "USA" } },
];

const NewYorkEmpl = employees.filter(employee => employee.location.city === 'New York')
console.log(NewYorkEmpl)

console.log('\n---\n')
/* Mapping */
//Basic transformation
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

//Object transformation
const people1 = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];
const fullNames = people1.map(person => `${person.firstName} ${person.lastName}`);
console.log(fullNames);

//QUIZ
//Given an array of numbers, return a new array where each element is multiplied by 3.

const nums = [1, 2, 3, 4]
const trippled = nums.map(num => num * 3)
console.log(trippled)

//Given an array of objects, extract only the name property into a new array.
const users1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const onlyNames = users1.map(user => user.name)
console.log(onlyNames)

//Given an array of strings, append " is cool!" to each string.
const names = ["JavaScript", "Python", "Ruby"];
const newNames = names.map(name => `${name} is cool!`)
console.log(newNames)

//Convert an array of objects with name and age into strings in the format "Name: <name>, Age: <age>".

const pple = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 }
];

//
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const EvenNumbersFiltered = NUMBERS.filter(NUM => NUM % 2 === 0)
console.log(EvenNumbersFiltered)
const doubledEven = EvenNumbersFiltered.map(NUM => NUM * 2)
console.log(doubledEven)

//
const students = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true },
  { name: "David", isActive: false },
  { name: "Eva", isActive: true }
];

const activeStudents = students.filter(student => student.isActive).map(student => student.name)
console.log(activeStudents)

//Using for...of in Place of .map()
const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = [];

//REDUCE method
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Start with 0 as the initial value for the accumulator

console.log(sum);








