// Task: Messaging Manager.
// Description: Manage users and their sent and received messages.
// Add new users, send messages, and remove users when needed.
// Delete a specific user or all users from the records.
// Print the remaining users and their total number of messages.

function messagesManager(arr) {
    let capacity = Number(arr.shift());
    let users = {};

    while (arr[0] !== 'Statistics') {
        let tokens = arr.shift().split('=');
        let command = tokens[0];

        switch (command) {
            case 'Add':
                let username = tokens[1];
                let sent = Number(tokens[2]);
                let received = Number(tokens[3]);

                if (!users.hasOwnProperty(username)) {
                    users[username] = { sent, received };
                }
                break;

            case 'Message':
                let sender = tokens[1];
                let receiver = tokens[2];

                if (users.hasOwnProperty(sender) && users.hasOwnProperty(receiver)) {
                    users[sender].sent++;

                    if (users[sender].sent + users[sender].received >= capacity) {
                        delete users[sender];
                        console.log(`${sender} reached the capacity!`);
                    }

                    users[receiver].received++;

                    if (users[receiver].sent + users[receiver].received >= capacity) {
                        delete users[receiver];
                        console.log(`${receiver} reached the capacity!`);
                    }
                }

                break;

            case 'Empty':
                let user = tokens[1];

                if (user === 'All') {
                    users = {};
                } else if (users.hasOwnProperty(user)) {
                    delete users[user];
                }

                break;
        }
    }

    console.log(`Users count: ${Object.keys(users).length}`);

    for (let username in users) {
        let totalMessages = users[username].sent + users[username].received;
        console.log(`${username} - ${totalMessages}`);
    }
}
messagesManager(["10",
    "Add=Berg=9=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Add=Mark=5=4",
    "Statistics"]);
messagesManager(["20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"]);
messagesManager(["12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"]);