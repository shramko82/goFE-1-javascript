var num, sum = 0, array = [];

do {
    num = prompt('Insert the number');
    array.push(parseInt(num));
} while (num !== '' && num !== null)

for (var i = 0; i < array.length - 1; i++) {
    sum += array[i];
}

alert('The total is '+sum);