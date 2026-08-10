// Task: Chessboard
// Description: Create and return a chessboard of size n X n as a string.

function chessBoard(n) {
    let result = `<div class="chessboard">\n`;

    for (let row = 0; row < n; row++) {
        result += ` <div>\n`;

        for (let col = 0; col < n; col++) {
            let color = (row + col) % 2 === 0 ? 'black' : 'white';

            result += `    <span class="${color}"></span>\n`;
        }

        result += ` </div>\n`;
    }

    result += `</div>`;
    return result;
}
console.log(chessBoard(3));