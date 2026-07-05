const fibonacci = function(number) {
    if (typeof number !== "number") {
        number = parseInt(number);
    };

    if (number === 1 || number === 2) {return 1};
    if (number === 0) {return 0};
    if (number < 0) {return "OOPS"};
    firstPos = 1;
    secPos = 1;

    if(number > 2) {
        for (let i = 2; i < number; i++) {
            current = firstPos + secPos;
            secPos = firstPos;
            firstPos = current;
        };
        return current;
    }
};

// Do not edit below this line
module.exports = fibonacci;
