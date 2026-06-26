// Task: Safe Passwords Generator.
// Description: Generate password combinations in the format: ABxyBA.
// A and B are ASCII symbols that change after each generated password.
// - A starts from ASCII 35 ('#') and cycles back after 55.
// - B starts from ASCII 64 ('@') and cycles back after 96.
// x ranges from 1 to a. / y ranges from 1 to b.
// Print each password separated by "|".
// Stop when either all combinations are generated or the maximum number of passwords is reached.

function safePasswordsGenerator(a, b, maxPasswords) {
    let aChar = 35;
    let bChar = 64;

    let count = 0;
    let result = '';

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {

            let first = String.fromCharCode(aChar);
            let second = String.fromCharCode(bChar);

            result += `${first}${second}${i}${j}${second}${first}|`;

            count++;

            aChar++;
            bChar++;

            if (aChar > 55) {
                aChar = 35;
            }

            if (bChar > 96) {
                bChar = 64;
            }

            if (count >= maxPasswords) {
                console.log(result);
                return;
            }
        }
    }

    console.log(result);
}
safePasswordsGenerator(2, 3, 10);
safePasswordsGenerator(20, 50, 10);