const findTheOldest = function(array) {
curDate = new Date()
const names = array.reduce((previous,current) => {
    let curAge;
    let prevAge;
    if (current.yearOfDeath) {
         curAge = current.yearOfDeath - current.yearOfBirth
    }
    else {
        curAge = curDate.getFullYear() - current.yearOfBirth
    }
    if (previous.yearOfDeath) {
        prevAge = previous.yearOfDeath - previous.yearOfBirth
    }
    else {
        prevAge = curDate.getFullYear() - previous.yearOfBirth
    }
    return curAge>prevAge ? current: previous;
}, array[0])
return names;
}


// Do not edit below this line
module.exports = findTheOldest;
