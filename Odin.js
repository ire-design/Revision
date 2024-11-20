// Objects exercise
class Book {
    constructor(title, author, pages, isRead) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.isRead = isRead;
    }
  
    info() {
      const readStatus = this.isRead ? "already read" : "not read yet";
      return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    }
  }
  
//test
  const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
  console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
  


// inception.describe(); // "Inception directed by Christopher Nolan, released in 2010, already watched"

  class Movie {
    constructor(title, director, year, isWatched) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.isWatched = isWatched;
    }

    info() {
        const watchStatus = this.isWatched ? "already watched" : "not watched yet"
        return `${this.title} directed by ${this.director}, released in ${this.year}, ${watchStatus}` 
    }
  }

  const inception = new Movie("Inception", "Christopher Nolan", 2010, true)
  console.log(inception.info())