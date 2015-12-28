var login = prompt('Enter your login','login');

if (login == 'admin') {
    var password = prompt('Enter your password','password');
    if (password == 'passw0rd') {
        alert('Welcome home!');
    } else if (password === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (login === null) {
    alert('Canceled');
} else {
    alert('Access denied');
}
