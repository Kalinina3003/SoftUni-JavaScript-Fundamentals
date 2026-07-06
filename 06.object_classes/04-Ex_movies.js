// Task: Create Movie Objects.
// Description: Receive commands to add movies, directors, and release dates.
// Store the information in movie objects.
// Print only the movies that have a name, director, and date as JSON.

function movies(arr) {
    let films = [];

    for (let command of arr) {
        if (command.includes('addMovie')) {
            let tokens = command.split('addMovie ');
            let movieName = tokens[1];

            let movieObj = { name: movieName };
            films.push(movieObj);
        } else if (command.includes('directedBy')) {
            let tokens = command.split(' directedBy ');
            let movieName = tokens[0];
            let movieDirector = tokens[1];

            let foundMovieObj = films.find(movie => movie.name === movieName);

            if (foundMovieObj) {
                foundMovieObj.director = movieDirector
            }
        } else if (command.includes('onDate')) {
            let tokens = command.split(' onDate ');
            let movieName = tokens[0];
            let movieDate = tokens[1];

            let foundMovieObj = films.find(movie => movie.name === movieName);

            if (foundMovieObj) {
                foundMovieObj.date = movieDate;
            }
        }
    }

    for (let movieObj of films) {
        if (movieObj.name && movieObj.director && movieObj.date) {
            console.log(JSON.stringify(movieObj));
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);