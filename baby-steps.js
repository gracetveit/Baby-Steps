'use strict'
const babySteps = function (args) {
    let sum = 0;
    for (let i = 2; i < args.length; i++) {
        sum += parseInt(args[i]);
    }
    return sum;
}

console.log(babySteps(process.argv));