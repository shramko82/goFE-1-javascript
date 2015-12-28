function isPal(str) {
    return str.toLowerCase() == str.split('').reverse().join('').toLowerCase();
}


console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Vasya')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
