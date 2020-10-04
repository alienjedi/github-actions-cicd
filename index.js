/*
 * Simple calculator for testing ci/cd with github actions
 *
 */

const add = function(num1, num2, ...num3) {
    let total = num1+num2;
    num3.forEach((val, idx, arr) => {
        total+=val;
    });
    return total;
};

const sub = function(num1, num2, ...num3) {
    let res = num1-num2;
    num3.forEach((val, idx, arr) => {
        res-=val;
    });
    return res;
};

module.exports = { add, sub };
