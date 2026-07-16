// Task: Modern Times of #(HashTag).
// Description: Receive a text as a string.
// Find all valid words starting with '#'.
// A valid hashtag must contain only letters.
// Print each hashtag without the '#' symbol.

function modernTimes(text) {
    let words = text.split(' ');

    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            let hashtag = word.substring(1);
            let isValid = true;

            for (let char of hashtag) {
                let ascii = char.charCodeAt(0);

                if (!(ascii >= 65 && ascii <= 90) &&
                    !(ascii >= 97 && ascii <= 122)) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                console.log(hashtag);
            }
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');