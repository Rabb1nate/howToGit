let arr = [5, 3, 8, 1];
var x = arr.length;
let filtered = [];
function filterRange(name, num1, num2) {
    for (i = 0; i < x; i++) {
        if (num1 <= arr[i] && num2 >= arr[i]) filtered.push(arr[i]);
    }
}
filterRange(arr, 1, 4);
console.log(filtered);