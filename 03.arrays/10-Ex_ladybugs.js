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
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([5, '3', '3 left 2', '1 left -2']);