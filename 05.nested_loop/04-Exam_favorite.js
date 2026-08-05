// Task: Favorite Movie.
// Description: Read movie titles until "STOP" or until 7 movies are entered.
// For each title, calculate its ASCII sum.
// Subtract the title length for each uppercase letter and
// twice the title length for each lowercase letter.
// Find and print the movie with the highest ASCII sum.
// If 7 movies are entered, print "The limit is reached."

function favoriteMovie(input) {
    let index = 0;

    let bestMovie = '';
    let movies = 0;
    let maxPoints = Number.MIN_SAFE_INTEGER;

    while (true) {
        if (movies === 7) {
            console.log('The limit is reached.');
            break;
        }

        let movie = input[index++];

        if (movie === 'STOP') {
            break;
        }

        movies++;

        let points = 0;
        let i = 0;

        while (i < movie.length) {
            let letter = movie[i];
            let ascii = movie.charCodeAt(i);

            points += ascii;

            if (letter >= 'A' && letter <= 'Z') {
                points -= movie.length;
            } else if (letter >= 'a' && letter <= 'z') {
                points -= movie.length * 2;
            }

            i++;
        }

        if (points > maxPoints) {
            maxPoints = points;
            bestMovie = movie;
        }
    }

    console.log(`The best movie for you is ${bestMovie} with ${maxPoints} ASCII sum.`);
}
favoriteMovie(["Matrix",
    "Breaking bad",
    "Legend",
    "STOP"]);
favoriteMovie(["Wrong turn",
    "The maze",
    "Area 51",
    "Night Club",
    "Ice age",
    "Harry Potter",
    "Wizards"]);

/*
function favoriteMovie(arr) {
    let index = 0;

    let maxPoints = Number.MIN_SAFE_INTEGER;
    let bestMovie = '';
    let count = 0;

    while (arr[index] !== 'STOP') {
        let movie = arr[index++];

        let sum = 0;

        for (let i = 0; i < movie.length; i++) {
            let symbol = movie[i];

            if (symbol >= 'A' && symbol <= 'Z') {
                sum += symbol.charCodeAt(0) - movie.length;
            } else  if (symbol >= 'a' && symbol <= 'z') {
                sum += symbol.charCodeAt(0) - (movie.length * 2);
            } else {
                sum += symbol.charCodeAt(0);
            }
        }

        if (maxPoints < sum) {
            maxPoints = sum;
            bestMovie = movie;
        }

        count++;

        if (count === 7) {
            console.log('The limit is reached.');
            break;
        }
    }

    console.log(`The best movie for you is ${bestMovie} with ${maxPoints} ASCII sum.`);
}
*/
