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
/*Write a filter function to return only people aged 18 or older.
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