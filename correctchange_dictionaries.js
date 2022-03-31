/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

const cents5 = 0;
const expected5 = {}

const cents6 = 115;
const expected6 = {
    quarters: 4,
    dime: 1,
    nickel: 1
}

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */

/*
1. create a dictionary that maps coin types to their values
2. create output dictionary to store output
2. loop through the dictionary and check if the cents are divisible by the coins value
3. if so, we divide and store the coin type and the cents the division in the output dictionary
4. reassign cents to the cents modulus the coins value
5. return output dictionary
*/

function fewestCoinChange(cents) {
    coins = {
        {coin: quarter, value: 25},
        {dime: 10,
        nickel: 5,
        penny:1
    };
    var remainder = 0;
    var newChange = {};

    return newChange
}
console.log(fewestCoinChange(cents1));


