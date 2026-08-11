// Task: Theatre Ticket.
// Description: Calculate the ticket price based on the type of day and the person's age.
// Print the ticket price or "Error!" if the age does not fit any category.

function theatrePromotion(day, age) {
    if (age >= 0 && age <= 18) {
        if (day === 'Weekday') {
            console.log('12$');
        } else if (day === 'Weekend') {
            console.log('15$');
        } else if (day === 'Holiday') {
            console.log('5$');
        }
    } else if (age >= 19 && age <= 64) {
        if (day === 'Weekday') {
            console.log('18$');
        } else if (day === 'Weekend') {
            console.log('20$');
        } else if (day === 'Holiday') {
            console.log('12$');
        }
    } else if (age >= 65 && age <= 122) {
        if (day === 'Weekday') {
            console.log('12$');
        } else if (day === 'Weekend') {
            console.log('15$');
        } else if (day === 'Holiday') {
            console.log('10$');
        }
    } else {
        console.log('Error!');
    }
}
theatrePromotion('Weekday', 42);
theatrePromotion('Holiday', -12);
theatrePromotion('Holiday', 15);