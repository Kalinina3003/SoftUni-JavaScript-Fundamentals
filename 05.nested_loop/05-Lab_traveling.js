// Task: Travel Savings.
// Description: Receive destinations and the required budget for each trip.
// For every destination, receive saved amounts one by one.
// Use a nested loop to keep adding money until the needed budget is reached.
// When enough money is collected, print "Going to {destination}!".
// Continue with the next destination.
// Stop the program when the destination is "End".

function traveling(arr) {
   let index = 0;
   let destination = arr[index++];

   while (destination !== 'End') {
    let neededMoney = Number(arr[index++]);

    let savedMoney = 0;

    while (savedMoney < neededMoney) {
        let money = Number(arr[index++]);
        savedMoney += money;
    }

    console.log(`Going to ${destination}!`);

    destination = arr[index++];
   }
}
traveling(["Greece",
    "1000",         
    "200",          
    "200",          
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]);