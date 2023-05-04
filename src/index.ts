import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

// dominating XOR - failed on long arrays
function subarraySum(nums: number[]): number {
    let counter = 0;
    let map = new Set();

    for (let i = 0; i < nums.length; i++) {
        let firstNumber = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            let secondNumber = nums[j];

            let xor = firstNumber ^ secondNumber;
            let and = firstNumber & secondNumber;
            if (xor > and) {
                counter++;
            }
        }
    }

    return counter;
}

//api call to an api - passed on all expect 1 case
const axios = require('axios');

async function getDiscountedPrice(barcode) {
    if (!barcode) {
        return -1;
    }

    let response = await axios.get(
        'https://jsonmock.hackerrank.com/api/inventory?barcode=' + barcode
    );

    console.log(response.data);

    if (!response.data.data[0] || !response.data || !response.data.data[0]) {
        return -1;
    }

    let { price, discount } = response.data.data[0];
    let discountedPrice = price - (discount / 100) * price;

    return Math.floor(discountedPrice);
}

consoleStart();

validateFxn(subarraySum([4, 3, 5, 2]), 4);

consoleEnd();

export {};
