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
  