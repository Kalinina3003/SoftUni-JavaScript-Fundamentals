// Task: Train The Trainers.
// Description: Receive the number of jury members.
// Then read presentation names followed by jury grades.
// For each presentation, calculate and print its average grade.
// Continue until the command "Finish" is received.
// At the end, calculate and print the student's final average assessment.
// All averages must be formatted to 2 decimal places.

function trainTheTrainers(arr) {
    let index = 0;
    let numOfJudge = Number(arr[index++]);

    let averageSum = 0;
    let numOfPresentations = 0;

    while (arr[index] !== 'Finish') {
        let presentation = arr[index++];
        let grade = 0;

        for (let i = 0; i < numOfJudge; i++) {
            grade += Number(arr[index++]);
        }

        let average = grade / numOfJudge;

        console.log(`${presentation} - ${average.toFixed(2)}.`);

        averageSum += average;
        numOfPresentations++;
    }
    
    console.log(`Student's final assessment is ${(averageSum / numOfPresentations).toFixed(2)}.`);
}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);
trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"]);