// Task: Movie Ratings
// Description: Find the movie with the highest rating, 
// the movie with the lowest rating, and calculate the average rating.

function movieRantings(arr) {
    let movies = Number(arr[0]);

    let highestRating = Number.MIN_SAFE_INTEGER;
    let lowestRaring = Number.MAX_SAFE_INTEGER;

    let totalRaiting = 0;

    let index = 1;
    let count = 0;

    let highestMovie = '';
    let lowestMovie = '';

    while (count < movies) {
        let movieName = arr[index++];
        let rating = Number(arr[index++]);

        if (rating > highestRating) {
            highestRating = rating;
            highestMovie = movieName;
        }

        if (rating < lowestRaring) {
            lowestRaring = rating;
            lowestMovie = movieName
        }

        totalRaiting += rating;
        count++;
    }

    console.log(`${highestMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestMovie} is with lowest rating: ${lowestRaring.toFixed(1)}`);
    console.log(`Average rating: ${(totalRaiting / movies).toFixed(1)}`);
}
movieRantings(["3",
    "Interstellar",
    "8.5",
    "Dangal",
    "8.3",
    "Green Book",
    "8.2"]);
