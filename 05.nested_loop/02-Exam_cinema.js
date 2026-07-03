// Task: Cinema Tickets.
// Description: Read movie names until "Finish".
// For each movie, read the number of free seats and sold ticket types
// ("student", "standard", "kid") until "End" or until the hall is full.
// After each movie, print the hall occupancy percentage.
// At the end, print the total number of tickets sold and the percentage of each ticket type.

function cinemaTickets(input) {
    let index = 0;

    let student = 0;
    let standard = 0;
    let kid = 0;
    let total = 0;

    while (input[index] !== 'Finish') {
        let movie = input[index++];
        let seats = Number(input[index++]);

        let currentTickets = 0;

        for (let seat = 1; seat <= seats; seat++) {
            let ticket = input[index++];

            if (ticket === 'End') {
                break;
            }

            currentTickets++;
            total++;

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

        console.log(`${movie} - ${((currentTickets / seats) * 100).toFixed(2)}% full.`);
    }

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