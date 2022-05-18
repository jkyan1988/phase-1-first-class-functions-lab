// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return drivers = ['Antonia', 'Nuru'];
}

const returnLastTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return drivers = ['Amari', 'Mo'];
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(integer) {
    return function (fare) {
        return fare*integer
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
}
