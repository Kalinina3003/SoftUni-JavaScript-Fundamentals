// Task: Comments
// Description: Store users, articles, and valid comments using associative arrays.
// Add users and articles, save comments only for existing users and articles,
// sort articles by comment count, and print comments grouped by article
// and sorted by usernames in ascending order.

function comments(arr) {
    let users = {};
    let articles = {};

    for (let input of arr) {
        if (input.startsWith('user ')) {
            let username = input.split(' ')[1];
            users[username] = true;
        } else if (input.startsWith('article ')) {
            let articleName = input.split(' ')[1];
            articles[articleName] = [];
        } else {
            let [leftPart, rightPart] = input.split(': ');
            let [username, , , articleName] = leftPart.split(' ');
            let [title, content] = rightPart.split(', ');

            if (users[username] && articles[articleName]) {
                articles[articleName].push({
                    username,
                    title,
                    content
                });
            }
        }
    }

    let articleNames = Object.keys(articles);

    articleNames.sort((a, b) => {
        return articles[b].length - articles[a].length;
    });

    for (let articleName of articleNames) {
        if (articles[articleName].length === 0) {
            continue;
        }

        console.log(`Comments on ${articleName}`);

        articles[articleName].sort((a, b) => {
            return a.username.localeCompare(b.username);
        });

        for (let comment of articles[articleName]) {
            console.log(`--- From user ${comment.username}: ${comment.title} - ${comment.content}`);
        }
    }
}
comments(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);
// Comments on Movies
// --- From user someUser: Like - I also like movies very much
// --- From user uSeR4: I also like movies - I really do
// Comments on Books
// --- From user uSeR4: I like books - I do really like them
// Comments on Shopping
// --- From user someUser: title - I go shopping every day;

comments(['user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby',
    'article Steven',
    'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like']);
// Comments on Bobby
// --- From user Mark: Is - I do really like them
// Comments on Steven
// --- From user Mark: title - Run;