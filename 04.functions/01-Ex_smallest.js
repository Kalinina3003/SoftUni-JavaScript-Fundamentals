// Task: Smallest of Three Numbers.
// Description: Receive three integers and print the smallest one.

function findSmallestNum(num1, num2, num3) {
    console.log(Math.min(num1, num2, num3));
}

findSmallestNum(2, 5, 3);
// 2;

findSmallestNum(600, 342, 123);
// 123;

findSmallestNum(2, 2, 2);
// 2;

/*
function smallestNumber(num1, num2, num3) {
    let smallest = num1;

    if (num2 < smallest) {
        smallest = num2;
    }

    if (num3 < smallest) {
        smallest = num3;
    }

    console.log(smallest);
}
*/
