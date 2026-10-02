// Task: Book Shelf
// Description: Store shelves and their books using associative arrays.
// Create shelves with unique IDs and genres, add books only to shelves
// with a matching genre, sort shelves by book count, and sort books by title.

function bookShelf(arr) {
    let shelves = {};

    for (let input of arr) {
        if (input.includes(' -> ')) {
            let [id, genre] = input.split(' -> ');

            if (!shelves[id]) {
                shelves[id] = {
                    genre: genre,
                    books: []
                };
            }
        } else {
            let [bookInfo, genre] = input.split(', ');
            let [title, author] = bookInfo.split(':');

            for (let id in shelves) {
                if (shelves[id].genre === genre) {
                    shelves[id].books.push({
                        title,
                        author,
                        genre
                    });

                    break;
                }
            }
        }
    }

    let shelfIds = Object.keys(shelves);

    shelfIds.sort((a, b) => {
        return shelves[b].books.length - shelves[a].books.length;
    });

    for (let id of shelfIds) {
        let shelf = shelves[id];

        console.log(`${id} ${shelf.genre}: ${shelf.books.length}`);

        shelf.books.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });

        for (let book of shelf.books) {
            console.log(`--> ${book.title}:${book.author}`);
        }
    }
}
bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);
// 3 sci-fi: 3
// --> Future of Dawn: Aiden Rose
// --> Losing Dreams: Gail Starr
// --> Name of Earth: Jo Bell
// 1 history: 2
// --> Lions and Rats: Gabe Roads
// --> Pilots of Stone: Brook Jay
// 2 mystery: 1
// --> Child of Silver: Bruce Rich;

bookShelf(['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi']);
// 2 sci-fi: 2
// --> Losing Dreams: Gail Starr
// --> Name of Earth: Jo Bell
// 1 mystery: 1
// --> Child of Silver: Bruce Rich;