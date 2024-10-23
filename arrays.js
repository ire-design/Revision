// const library = {
//     section: "Science",
//     books: [
//       { title: "Physics Fundamentals", authors: ["Dr. A", "Dr. B"] },
//       { title: "Chemistry Basics", authors: ["Dr. C"] }
//     ]
//   };

//   const author =library.books[0].authors[1]
//   console.log(author)

  const school = {
    name: "Green Valley High",
    classes: [
      { subject: "Math", students: ["Alice", "Bob", "Charlie"] },
      { subject: "History", students: ["David", "Eve", "Frank"] }
    ]
  };
  
  let y=''
  let f =''
  for (let i in school.classes){
    y += school.classes[i]
    for (let j in school.classes[i].students ){
        f += school.class[i].students[j]

    }
  }