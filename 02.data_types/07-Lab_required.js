// Task: Required Reading
// Description: Calculate how many hours per day are needed to finish a book for a given number of days.

function requiredReading(numOfPages, pagesInHour, numOfDays) {
    let hoursPerDay = numOfPages / pagesInHour / numOfDays;
    
    console.log(hoursPerDay);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);