var arr = ['���', '������', '������', '���', '������', '������', '������'];

var anClean = function(arr) {
    obj = {}, res = [];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i].split('').sort().join('').toLowerCase()] = i;
    }

    for (prop in obj) {
        res.push(arr[obj[prop]]);
    }

    return res;

};

console.log( anClean(arr) ); // '���,������,������' ��� '���,������,������'