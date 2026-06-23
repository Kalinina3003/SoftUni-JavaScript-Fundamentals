// Task: Sum Prime and Non Prime Numbers.
// Description: Receive an array of numbers as strings.
// Continue processing until the command "stop" is reached.
// Ignore negative numbers and print "Number is negative.".
// Determine whether each number is prime or non-prime.
// Calculate the sum of all prime numbers.
// Calculate the sum of all non-prime numbers.
// Print both sums at the end.

function sumPrimeNonPrime(arr) {
    let primeSum = 0;
    let nonprimeSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command === 'stop') {
            break;
        }

        let num = Number(command);

        if (num < 0) {
            console.log('Number is negative.');
            continue;
        }

        let prime = true;

        if (num < 2) {
            prime = false;
        } else {
            for (let divisor = 2; divisor < num; divisor++) {
                if (num % divisor === 0) {
                    prime = false;
                    break;
                }
            }
        }

        if (prime) {
            primeSum += num;
        } else {
            nonprimeSum += num;
        }
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonprimeSum}`);
}
sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]);
sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]);