import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function subarraySum2(nums: number[], target: number): number {
    const map = new Map();
    map.set(0, 1);

    let counter = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (map.has(sum - target)) {
            counter += map.get(sum - target);
        }

        let newCounter = (map.has(sum) ? map.get(sum) : 0) + 1;
        map.set(sum, newCounter);
    }
    return counter;
}

function subarraySum(nums: number[], target: number): number {
    let counter = 0;

    for (let i = 0; i < nums.length; i++) {
        let firstNumber = nums[i];
        let total = firstNumber;
        for (let j = i + 1; j < nums.length; j++) {
            let secondNumber = nums[j];
            total += secondNumber;

            if (total === target) {
                counter++;
            }
        }

        if (firstNumber === target) {
            counter++;
        }
    }

    return counter;
}

consoleStart();

validateFxn(subarraySum2([1, 1, 1], 2), 2);

validateFxn(subarraySum([1, 2, 3], 3), 2);
validateFxn(subarraySum([1, 1, 1], 2), 2);

consoleEnd();

export {};
