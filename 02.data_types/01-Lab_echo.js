// Task: Echo Type
// Description: Print the type of a parameter and display its value only if it is a string or a number.

function echoType(parameter) {
    let valueParameter = typeof parameter; 
    console.log(valueParameter);

    if (valueParameter == 'string' || valueParameter == 'number') {
        console.log(parameter);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
echoType('Hello, JavaScript!');
echoType(18);
echoType(null);
