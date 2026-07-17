// Task: Match Dates.
// Description: Receive a string containing multiple dates.
// Use a regular expression to match all dates in the format "dd{separator}MMM{separator}yyyy".
// Extract the day, month, and year from each match and print the results.

function matchDates(input) {
    let text = input[0];

    let pattern = /\b(?<day>\d{2})([-\.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let matches = text.matchAll(pattern);

    for (let match of matches) {
        let day = match.groups['day'];
        let month = match.groups['month'];
        let year = match.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);        
    }
}
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);