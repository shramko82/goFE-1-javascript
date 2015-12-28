
//my code

function Calculator() {
    this.methods = {
        '+': function(a, b) {return parseInt(a)+parseInt(b)},
        '-': function(a, b) {return parseInt(a)-parseInt(b)}
    };

    this.calculate = function(str) {
        var expression = str.split(' ');
        var func = this.methods[expression[1]];
        try {
            return func(expression[0], expression[2]);
        } catch(e) {
            console.log('Invalid parameters of calculate() function');
        }
    };

    this.addMethod = function(symbol, func) {
        this.methods[symbol] = func;
    }

}

//part 1

/*var calc = new Calculator;

console.log( calc.calculate('3 + 7') ); // 10
console.log( calc.calculate('3 - 7') ); // -4*/

//part2


var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
    return a * b;
});
powerCalc.addMethod('/', function(a, b) {
    return a / b;
});
powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});

console.log( powerCalc.calculate('2 ** 3'));
console.log( powerCalc.calculate('2 * 3'));
console.log( powerCalc.calculate('2 / 3'));
console.log( powerCalc.calculate('2 % 3'));

