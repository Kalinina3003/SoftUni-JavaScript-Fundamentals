// Task: Cut and Reverse.
// Description: Receive a single string.
// Split the string into two equal halves.
// Reverse each half separately.
// Print each reversed half on a new line.

function cutAndReverse(str) {
    let midInx = str.length / 2;

    let leftHalf = str.substring(0, midInx).split('').reverse().join('');
    let rightHalf = str.substring(midInx).split('').reverse().join('');

    console.log(leftHalf);
    console.log(rightHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');