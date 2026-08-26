// Task: Equal Arrays
// Description: Compare two arrays element by element.
// If they are identical, print the sum of the first array.
// Otherwise, print the index of the first difference.

function equalArrays(arr1, arr2) {
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
        sum += arr1[i];
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);

/*
function equalArrays(arr1, arr2) {
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        let firstNum = Number(arr1[i]);
        let secondNum = Number(arr2[i]);

        if (firstNum !== secondNum) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }

        sum += firstNum;
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}
*/

/*
function equalArrays(firstArr, secondArr) {
    let sum = 0;
    
    for (let k = 0; k < firstArr.length; k++) { 
        let num = Number(firstArr[k]);

        if (Number(firstArr[k]) === Number(secondArr[k])) {
            sum += num; 
        } else {
            console.log(`Arrays are not identical. Found difference at ${k} index`);
            return;
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}
*/
