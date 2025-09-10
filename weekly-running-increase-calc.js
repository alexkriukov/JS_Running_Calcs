/**
 * Function to calculate weekly mileage starting from a given value, 
 * based on the number of weeks before the target start. 
 * The main thing is to increase the value up to 10% per week except relieve week.
 * The last week is always a recovery week.
 *
 * @param {*} weeks - number of weeks until the target start
 * @param {*} startKmValue - starting weekly mileage
 * @param {number} [reliveWeek=3] - recovery week number
 * @returns logs to console the mileage per week + an array of weekly mileage values
 */

function getKilometersPerWeek(weeks, startKmValue, reliveWeek = 3) {
    let kilometersPerWeek = [];
    for (i = 1; i < weeks; i++) {
        if (i % reliveWeek == 0) {
            kilometersPerWeek[kilometersPerWeek.length]= startKmValue;
            console.log(`Relieve week ${i} staying on ${startKmValue} kilometers this week`);
            continue;
        }
        else {
            startKmValue +=  Math.floor(startKmValue*0.1);
            kilometersPerWeek[kilometersPerWeek.length] = startKmValue;
            console.log(`Increasing value on week ${i}. This week you need to run ${startKmValue} kilometers`);
        }
    }
    console.log(`Kilometers per week - ${kilometersPerWeek}`)
}

getKilometersPerWeek(9,25)