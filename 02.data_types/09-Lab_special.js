// Task: Special Numbers
// Description: Print numbers from 1 to n and check if the sum of digits is 5, 7, or 11.

function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;

        while (num > 0) {
            sum = sum + (num % 10);
            num = Math.floor(num / 10);
        }

        let isSpecial = (sum === 5 || sum === 7 || sum === 11);

        console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);
    }
}
specialNumbers(15);
specialNumbers(20);