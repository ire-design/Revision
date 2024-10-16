// program to display all multiples of 5-100 using while loop
    let num = 5

    while (num <= 100){
        console.log(num)
        num += 5
    }

// stars using loop statements
    // for (let i= 1; i <= 5; i++){

    //     console.log('*'.repeat(i))
    // }

    let stars = ''
    for(let i=1; i<=5; i++){
        stars += '*'
        console.log(stars)
    }

// grades for students
    function gradeStudent(score) {
        let grade;

        if (score >= 70 && score <= 100) {
            grade = 'A';
        } else if (score >= 60 && score < 70) {
            grade = 'B';
        } else if (score >= 50 && score < 60) {
            grade = 'C';
        } else if (score >= 40 && score < 50) {
            grade = 'D';
        } else if (score >= 0 && score < 40) {
            grade = 'F';
        } else {
            grade = 'Input a valid score!!'; 
        }

        console.log(`The student scored ${score} hence grade: ${grade}`);
    }

        gradeStudent(85);   
        gradeStudent(-5);  
        gradeStudent(102); 

// array to store 10 numbers
    const numbers = []

    for (let i=0; i< 10; i++){
        // const num = parseFloat(prompt(`Enter a number`))
        numbers.push(num)
    }

    console.log('The numbers you entered are: ', numbers)