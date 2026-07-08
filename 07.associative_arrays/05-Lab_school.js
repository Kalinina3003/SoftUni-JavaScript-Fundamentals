// Task: School Grades.
// Description: Receive students and their grades.
// Add grades for duplicate students.
// Calculate each student's average grade.
// Sort students alphabetically by name.
// Print each student with the average grade.

function schoolGrades(arr) {
    let map = new Map();

    for (let data of arr) {
        let [name, ...grades] = data.split(' ');

        grades = grades.map(Number);

        if (map.has(name)) {
            let currentGrades = map.get(name);

            for (let grade of grades) {
                currentGrades.push(grade);
            }
        } else {
            map.set(name, grades);
        }
    }

    let averageGrades = new Map();

    for (let [name, grades] of map) {
        let sum = 0;

        for (let grade of grades) {
            sum += grade;
        }

        let average = sum / grades.length;
        averageGrades.set(name, average.toFixed(2));
    }

    let sortedResult = Array.from(averageGrades)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, averageGrades] of sortedResult) {
        console.log(`${name}: ${averageGrades}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
);