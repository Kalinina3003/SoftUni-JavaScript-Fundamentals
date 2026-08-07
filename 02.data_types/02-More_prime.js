// Task: Prime Number Checker
// Description: Check if a number is prime and return true or false.

function primeNumberChecker(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(primeNumberChecker(7));
console.log(primeNumberChecker(8));
console.log(primeNumberChecker(81));