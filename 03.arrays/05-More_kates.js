// Task: Kate's Way Out
// Description: Find Kate in the maze and determine whether she can reach an exit.
// Move through empty cells, avoid walls and already visited cells.
// If several escape routes exist, choose the longest one.
// Print the number of moves or "Kate cannot get out".

function katesWayOut(arr) {
    let rows = arr[0];
    let maze = arr.slice(1);

    let startRow;
    let startCol;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            if (maze[row][col] === 'k') {
                startRow = row;
                startCol = col;
                break;
            }
        }

        if (startRow !== undefined) {
            break;
        }
    }

    let visited = Array.from({ length: rows }, (_, row) => Array(maze[row].length).fill(false));

    function isExit(row, col) {
        return (
            row === 0 ||
            row === rows - 1 ||
            col === 0 ||
            col === maze[row].length - 1
        );
    }

    function findPath(row, col) {
        visited[row][col] = true;

        let foundExit = isExit(row, col);
        let maxPath = 0;

        let directions = [
            [-1, 0], // up
            [1, 0],  // down
            [0, -1], // left
            [0, 1]   // right
        ];

        for (let [rowChange, colChange] of directions) {
            let nextRow = row + rowChange;
            let nextCol = col + colChange;

            if (
                nextRow >= 0 &&
                nextRow < rows &&
                nextCol >= 0 &&
                nextCol < maze[nextRow].length &&
                !visited[nextRow][nextCol] &&
                maze[nextRow][nextCol] === ' '
            ) {
                let [exitFound, path] = findPath(nextRow, nextCol);

                if (exitFound) {
                    foundExit = true;

                    maxPath = Math.max(maxPath, path);
                }
            }
        }

        visited[row][col] = false;

        return [foundExit, maxPath + 1];
    }

    let [exitFound, moves] = findPath(startRow, startCol);

    if (exitFound) {
        console.log(`Kate got out in ${moves} moves`);
    } else {
        console.log('Kate cannot get out');
    }
}
katesWayOut([
    4,
    "######",
    "##  k#",
    "## ###",
    "## ###"
]);
katesWayOut([
    5,
    "######",
    "##  k#",
    "## ###",
    "######",
    "## ###"
]);