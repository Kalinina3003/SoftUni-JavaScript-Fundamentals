// Task: Sum Even Numbers
// Description: Parse strings to numbers and sum only the even values.

function sumEvenNumbers(input){
    let sum = 0;

    for (let number of input) {
        let data = Number(number);
        if (data % 2 === 0) {
            sum += data;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);