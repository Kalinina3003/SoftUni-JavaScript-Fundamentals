// Task: Username and Password
// Description: Check the entered passwords against the reversed username. 
// Print an error message for incorrect attempts, 
// log the user in when the password is correct, 
// or block the user after the fourth failed attempt.

function login(arr) {
    let index = 0;
    let count = 0;

    let username = arr[index++];
    let password = username.split('').reverse().join('');

    while (arr[index] !== password) {
        let attempt = arr[index++];

        count++;

        if (count === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }

        console.log(`Incorrect password. Try again.`);
    }

    console.log(`User ${username} logged in.`);
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);