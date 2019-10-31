const arr = [1, 2, 3, 4, 4, 3, 2, 1];
var x = arr.length;
function delete1() {
    for (i = 0; i < x; i++) {
        var a = arr[i];
        for (z = i + 1; z < x; z++) {
            let b = arr[z];
            if (a == b) arr.splice(z, 1);

        }
    }
}
delete1();
console.log(arr);