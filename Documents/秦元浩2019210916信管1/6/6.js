var c, d, e;
function $(name) {
    var a = name.substring(0, 1);
    if (a == '#') {
        c = document.getElementById(name.substring(1, name.length));
    } else if (a == '.') {
        d = document.getElementsByClassName(name.substring(1, name.length));
    } else {
        e = document.getElementsByTagName(name);
    }
}
$('#myid');
$('p');
$('.myClass');
console.log(c);
console.log(d);
console.log(e);