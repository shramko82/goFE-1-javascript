var a = 2, b = 10;

function pow(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    console.log(result);
}

pow(a, b);
