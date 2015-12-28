// Before
var image = {
    width: 100,
    height: 400,
    title: '100'
};

multiplyNumeric(image);

console.log(image);

function multiplyNumeric(image) {
    for (var field in image) {
        image[field] = (typeof image[field] == 'number') ? image[field]*2 : image[field];
    }
}

