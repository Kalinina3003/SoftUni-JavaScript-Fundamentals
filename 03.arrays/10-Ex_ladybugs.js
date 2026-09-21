// Task: Ladybugs
// Description: Move ladybugs across the field
// according to the given commands and print the final state of the field.

function ladybugs(input) {
    let size = Number(input[0]);
    let field = [];

    for (let i = 0; i < size; i++) {
        field.push(0);
    }

    let initialIndexes = input[1].split(' ');

    for (let index of initialIndexes) {
        index = Number(index);

        if (index >= 0 && index < size) {
            field[index] = 1;
        }
    }

    for (let i = 2; i < input.length; i++) {
        let [startIndex, direction, flyLength] = input[i].split(' ');

        startIndex = Number(startIndex);
        flyLength = Number(flyLength);

        if (flyLength === 0) {
            continue;
        }

        if (flyLength < 0) {
            flyLength = Math.abs(flyLength);

            if (direction === 'right') {
                direction = 'left';
            } else {
                direction = 'right';
            }
        }

        if (startIndex < 0 || startIndex >= size || field[startIndex] === 0) {
            continue;
        }

        field[startIndex] = 0;

        let position = startIndex;

        while (true) {                    // fly until a free cell is found
            if (direction === 'right') {
                position += flyLength;
            } else {
                position -= flyLength;
            }

            if (position < 0 || position >= size) {
                break;
            }

            if (field[position] === 0) {
                field[position] = 1;
                break;
            }
        }
    }

    console.log(field.join(' '));
}
ladybugs([3, '0 1', '0 right 1', '2 right 1']);
// 0 1 0;

ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// 0 0 0;

ladybugs([5, '3', '3 left 2', '1 left -2']);
// 0 0 0 1 0;

/*
function ladybugs(arr) {
    let sizeOfField = arr[0];  /
    let occupiedCells = arr[1].split(' ').map(Number);
    let field = [];

    for (let i = 0; i < sizeOfField; i++) {
        field.push(0);
    }

    for (let ladybugsPosition of occupiedCells) {
        if (ladybugsPosition >= 0 && ladybugsPosition < sizeOfField) {
            field[ladybugsPosition] = 1;  
        }
    }

    for (let i = 2; i < arr.length; i++) {
        let command = arr[i].split(' ');

        let startOfMovement = Number(command[0]);
        let direction = command[1];
        let flyLength = Number(command[2]);

        if (startOfMovement < 0 || startOfMovement >= sizeOfField) {
            continue;
        }

        if (field[startOfMovement] === 0) {
            continue;
        }

        if (flyLength === 0) {
            continue;
        }

        let step;

        if (direction === 'right') {
            step = flyLength;       
        } else if (direction === 'left') {
            step = -flyLength;
        }

        let newPosition = startOfMovement + step;

        while (newPosition >= 0 && newPosition < sizeOfField && field[newPosition] === 1) {
            newPosition += step;
        }

        if (newPosition < 0 || newPosition >= sizeOfField) {
            field[startOfMovement] = 0;
            continue;
        }

        field[startOfMovement] = 0;
        field[newPosition] = 1;
    }

    console.log(field.join(' '));
}
*/
