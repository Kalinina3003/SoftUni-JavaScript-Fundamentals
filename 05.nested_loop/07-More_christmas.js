// Task: Christmas Tree.
// Description: Print a Christmas tree of size n.
// For each row:
// - Print the required leading spaces.
// - Print the left side of the tree with stars.
// - Print the trunk separator (" | ").
// - Print the right side of the tree with stars.

function christmasTree(n) {
    for (let row = 0; row <= n; row++) {
        let spaces = '';

        for(let space = 0; space < n - row; space++) {
            spaces += ' ';
        }

        let stars = '';

        for (let star = 0; star < row; star++) {
            stars += '*';
        }

        console.log(spaces + stars + ' | ' + stars);
    }
}
christmasTree(3);
christmasTree(4);