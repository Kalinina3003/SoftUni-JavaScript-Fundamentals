// Task: Palindrome Integers
// Description: Check if each number in an array reads the same forward and backward.

function palindromeIntegers(arr) {

    function reverseNum(num) {
        let reversedNum = 0;

        while (num > 0) {
            let digit = num % 10;
            reversedNum = reversedNum * 10 + digit;
            num = Math.floor(num / 10);
        }

        return reversedNum;
    }

    for (let num of arr) {
        let changeNum = reverseNum(num)
        console.log(num === changeNum ? true : false);
    }
}
palindromeIntegers([123, 323, 421, 121]);
// false;
// true;
// false;
// true;

/*
function palindromeIntegers(arr) {

    function reverseNum(num) {
        let strNum = String(num);
        let reversedNum = strNum.split('').reverse().join('');

        return reversedNum;
    }

    function checkPalindrome(num, reversedNum) {
        if (num === Number(reversedNum)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

    for (let num of arr) {
        let reversedNum = reverseNum(num);
        checkPalindrome(num, reversedNum);
    }
}
*/

/*
function palindromeIntegers(arr) {

    function checkPalindrome(num) {
        let strNum = String(num);

        let left = 0;
        let right = strNum.length - 1;

        let result = true;

        while (left < right) {
            if (strNum[left] !== strNum[right]) {
                result = false;
                break;
            }

            left++;
            right--;
        }

        return result;
    }

    for (let num of arr) {
        console.log(checkPalindrome(num));
    }
}
*/
