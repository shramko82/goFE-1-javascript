var strings = ['������', '������', '����', '����', '����', '����', '������', '������', '8-()' ];

unique = function(arr) {
    obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    var res = [];
    for (prop in obj) {
        res.push(prop);
    }
    return res;
};

console.log( unique(strings) ); // ������, ����, 8-()