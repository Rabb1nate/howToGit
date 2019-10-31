const num = [['a', 0], ['b', 3], ['c', 6], ['d', 9]];
list = [];
for (i = 0; i < num.length; i++) {
    if (i != 0) list.push(num[i])
}
console.log(list);