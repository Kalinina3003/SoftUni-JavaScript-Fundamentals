function cake(input) {
    let index = 0;
    let lengthOfCake = Number(input[index++]);  
    let widthOfCake = Number(input[index++]);

    let cake = lengthOfCake * widthOfCake;

    while (cake > 0) {
        let data = input[index++];

        if (data === 'STOP') {
            console.log(`${cake} pieces are left.`);
            return;
        }

        let pieces = Number(data);
        cake -= pieces;
    }

    console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
}
cake(["10", // [0]
    "10",  // [1]
    "20",  // [2]
    "20",  // [3]
    "20",
    "20",
    "21"]);
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);
