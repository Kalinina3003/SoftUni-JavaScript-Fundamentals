// Task: Password Generator.
// Description: Receive two strings and a replacement word.
// Concatenate the first two strings.
// Replace each vowel with uppercase letters from the replacement word in sequence.
// Repeat the replacement word if needed.
// Reverse the result and print the generated password.

function passwordGenerator(arr) {
    let [str1, str2, str3] = arr;
    let concatedStr = str1 + str2;
    let vowels = ['a', 'e', 'o', 'u', 'i'];
    let str3Index = 0;

    for (let letter of concatedStr) {
        if (vowels.includes(letter)) {
            let replacementLetter = str3[str3Index].toUpperCase();
            concatedStr = concatedStr.replace(letter, replacementLetter);
            str3Index++;

            if (str3Index >= str3.length) {
                str3Index = 0;
            }
        }
    }

    console.log(`Your generated password is ${concatedStr.split('').reverse().join('')}`);
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]);