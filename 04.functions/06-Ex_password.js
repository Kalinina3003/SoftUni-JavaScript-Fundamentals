// Task: Password Validator
// Description: Check if a password meets the required length, contains only letters and digits, and has at least 2 digits.

function passwordValidator(password) {
    let isValidLength = checkIsValidLength(password);
    let isAlphanumeric = checkIsAlphanumeric(password);
    let hasMin2Digits = checkHasMin2Digits(password);

    if (isValidLength && isAlphanumeric && hasMin2Digits) {
        console.log('Password is valid');
    }

    function checkIsValidLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            console.log('Password must be between 6 and 10 characters');
            return false;
        }
    }

    function checkIsAlphanumeric(password) {
        let pattern = /^\w+$/; 

        if (pattern.test(password)) {
            return true;
        } else {
            console.log('Password must consist only of letters and digits');
            return false;
        }
    }

    function checkHasMin2Digits(password) {
        let pattern = /\d{2,}/;

        if (pattern.test(password)) {
            return true;
        } else {
            console.log('Password must have at least 2 digits');
            return false;
        }
    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');