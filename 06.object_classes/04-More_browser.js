// Task: Browser History.
// Description: Process browser actions,
// open and close tabs, update recently closed tabs and logs,
// clear history and cache when requested,
// and print the final browser state.

function browserHistory(browser, actions) {
    for (let action of actions) {

        if (action === 'Clear History and Cache') {

            browser['Open Tabs'] = [];
            browser['Recently Closed'] = [];
            browser['Browser Logs'] = [];

        } else if (action.startsWith('Open')) {
            let site = action.split(' ')[1];

            browser['Open Tabs'].push(site);
            browser['Browser Logs'].push(action);

        } else if (action.startsWith('Close')) {
            let site = action.split(' ')[1];

            if (browser['Open Tabs'].includes(site)) {
                let index = browser['Open Tabs'].indexOf(site);

                browser['Open Tabs'].splice(index, 1);
                browser['Recently Closed'].push(site);
                browser['Browser Logs'].push(action);
            }
        }
    }

    console.log(browser['Browser Name']);
    console.log(`Open Tabs: ${browser['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browser['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browser['Browser Logs'].join(', ')}`);
}
browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);