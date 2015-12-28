var a = 10, b = 100, str;

for (var i = 0; i < a; i++) {
    str = '';
    for (var j = 0; j < b; j++) {
        str += (i % 2 === j % 2) ? '\#' : ' ';
    }
    console.log(str);
}
