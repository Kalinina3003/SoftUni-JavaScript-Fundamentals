// Task: Songs.
// Description: Receive an array where each song is in the format
// "{typeList}_{name}_{time}".
// Create a Song class with properties: typeList, name, and time.
// The last element of the input is a filter type or "all".
// Print the names of all songs matching the filter.
// If the filter is "all", print the names of all songs.

function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const count = Number(input.shift());
    const filter = input.pop();
    const songsList = [];

    for (let i = 0; i < count; i++) {
        const [typeList, name, time] = input[i].split('_');
        songsList.push(new Song(typeList, name, time));
    }

    if (filter === 'all') {
        songsList.forEach(song => console.log(song.name));
    } else {
        songsList
            .filter(song => song.typeList === filter)
            .forEach(song => console.log(song.name));
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);