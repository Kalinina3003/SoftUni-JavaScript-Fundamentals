// Task: Cinema Tickets.
// Description: Receive movie names until the command "Finish".
// For each movie, read the number of free seats.
// Then read ticket types ("student", "standard", "kid")
// until all seats are taken or the command "End" is received.
// Calculate and print the hall occupancy percentage for each movie.
// At the end, print the total number of tickets sold.
// Print the percentage of student, standard, and kid tickets.

function cinemaTickets(arr) {
    let index = 0;

    let student = 0;
    let standard = 0;
    let kid = 0;

    while (arr[index] !== 'Finish') {
        let movie = arr[index++];
        let seats = Number(arr[index++]);

        let sold = 0;

        for (let i = 0; i < seats; i++) {
            let ticket = arr[index++];

            if (ticket === 'End') {
                break;
            }

            sold++;

            switch (ticket) {
                case 'student':
                    student++;
                    break;
                case 'standard':
                    standard++;
                    break;
                case 'kid':
                    kid++;
                    break;
            }
        }

        console.log(`${movie} - ${((sold / seats) * 100).toFixed(2)}% full.`);
    }

    let total = student + standard + kid;

    console.log(`Total tickets: ${total}`);
    console.log(`${((student / total) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard / total) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid / total) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"]);