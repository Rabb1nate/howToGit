var num1 = prompt("数字1=", "");
var num2 = prompt("数字2=", "");
let change = function(num1, num2) {
    let a;
    a = num2;
    num2 = num1;
    console.log(a, num2);
}
change(num1, num2);