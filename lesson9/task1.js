function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    });
}

console.log( sum([1, 2, 3]) ); // 6 (=1+2+3)

function sumArgs() {
    //arguments
    return [].reduce.call(arguments, (function(a, b) {
        return a + b;
    }));
}

console.log( sumArgs(1, 5, 2) ); // 6, ��������� �������� ����� �������, ��� �������