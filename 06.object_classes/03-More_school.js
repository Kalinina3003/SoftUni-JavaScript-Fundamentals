// Task: Arrange students by grade.
// Description: Create a school register from student data,
// skip students with a score below 3,
// move each student to the next grade,
// calculate the average score for each class,
// and print the register sorted by grade.

function schoolRegister(data) {
    let register = {};

    for (let line of data) {
        let parts = line.split(', ');

        let name = parts[0].split(': ')[1];
        let grade = Number(parts[1].split(': ')[1]);
        let score = Number(parts[2].split(': ')[1]);

        if (score < 3) {
            continue;
        }

        let nextGrade = grade + 1;

        if (!register[nextGrade]) {
            register[nextGrade] = {
                students: [],
                scores: []
            };
        }

        register[nextGrade].students.push(name);
        register[nextGrade].scores.push(score);
    }

    let sortedGrades = Object.keys(register).map(Number).sort((a, b) => a - b);

    for (let grade of sortedGrades) {
        let students = register[grade].students;
        let scores = register[grade].scores;

        let sum = 0;

        for (let score of scores) {
            sum += score;
        }

        let average = sum / scores.length;

        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.join(', ')}`);
        console.log(`Average annual score from last year: ${average.toFixed(2)}`);
        console.log();
    }
}
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);
schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);