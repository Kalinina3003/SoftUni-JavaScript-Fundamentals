// Task: Array Manipulations.
// Description: Take a specified number of elements from the array.
// Remove a specified number of elements from the beginning.
// Count how many times a given number appears in the remaining array.
// Print the result.

function searchForANumber(arr1, arr2) {
    let [takeCount, deleteCount, searchedNum] = arr2;

    let reducedArr = arr1.slice(0, takeCount);
    reducedArr.splice(0, deleteCount);

    let searchedNumOccurrences = reducedArr.filter(num => num === searchedNum).length;

    console.log(`Number ${searchedNum} occurs ${searchedNumOccurrences} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);