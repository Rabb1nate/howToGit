window.onload = () => {
    var flag;
    var show = document.getElementById('show');
    var items = [];
    var left = [];
    var right = [];
    var buttons = document.getElementsByTagName('button')
    var arr = [];
    buttons[0].onclick = () => {
        var require = document.getElementById('text').value;
        console.log(require);
        if (isNaN(require)) {
            alert('别皮，这个只能输数字')
        } else if (!require) {
            alert('宁瞅啥？')
        } else {
            console.log(items);
            var newnode = document.createElement('div');
            var text = document.createElement('text');
            text.innerHTML = require;
            newnode.appendChild(text);
            var x = require
            console.log(items.length);
            console.log(x);
            newnode.style.cssText = "text-align:center;background-color:#D8BFD8;border:1px solid #FFB6C1;color:blue;font-weight:800;"
            newnode.style.height = x + 'px';
            newnode.style.width = 100 + 'px';
            if (x > 700) {
                alert('放不下了！');
            } else if (!document.getElementById('1')) {
                show.appendChild(newnode);
                newnode.id = '1';
                left.push('1');
                items.unshift(newnode);
            } else {
                for (let i = 1; i <= left.length + 1; i++) {
                    var total;
                    if (i === left.length + 1) {
                        var total = i;
                        newnode.id = total;
                        console.log(newnode.id);
                        left.push(newnode.id);
                        console.log(left);
                        break;
                    }
                }
                show.insertAdjacentElement('afterbegin', newnode);
                items.unshift(newnode);
            }
            buttons[2].onclick = () => {
                if (flag != 1) {
                    for (let z = 1; z <= left.length; z++) {
                        if (z === left.length) {
                            console.log(left);
                            show.removeChild(document.getElementById(z));
                            left.splice(z - 1, 1);
                            console.log(left);
                            items.splice(z - 1, 1);
                            break;
                        }
                    }
                } else {
                    show.removeChild(newitems[0]);
                }
            }

            //   var x = 100+require
            //   var y = 100/items.length;
        }
    }
    buttons[1].onclick = () => {
        var require = document.getElementById('text').value;
        console.log(require);
        if (isNaN(require)) {
            alert('别皮，这个只能输数字')
        } else if (!require) {
            alert('宁瞅啥？')
        } else {
            console.log(items);
            var newnode2 = document.createElement('div');
            var text = document.createElement('text');
            text.innerHTML = require;
            newnode2.appendChild(text);
            var x = require
            console.log(items.length);
            console.log(x);
            newnode2.style.cssText = "border:1px solid #FFB6C1;text-align:center;background-color:#D8BFD8;color:blue;font-weight:800;"
            newnode2.style.height = x + 'px';
            newnode2.style.width = 100 + 'px';
            if (x > 700) {
                alert('放不下了！');
            } else if (!document.getElementById('11')) {
                show.appendChild(newnode2);
                newnode2.style.marginLeft = 'auto';
                newnode2.id = '11';
                right.push('11');
                items.push(newnode2);
            } else {
                for (let i = 11; i <= right.length + 11; i++) {
                    var total1;
                    if (i === right.length + 11) {
                        total1 = i;
                        newnode2.id = total1;
                        console.log(newnode2.id);
                        right.push(newnode2.id);
                        break;
                    }
                }
                show.insertAdjacentElement('beforeEnd', newnode2);
                items.push(newnode2)
            }
            buttons[3].onclick = () => {
                if (flag != 1) {
                    for (let z = 11; z <= right.length + 10; z++) {
                        if (z === right.length + 10) {
                            console.log(right);
                            show.removeChild(document.getElementById(z));
                            right.splice(z - 11, 1);
                            console.log(right);
                            items.splice(z - 12 + items.length, 1);
                            break;
                        }
                    }
                } else {
                    show.removeChild(newitems[newitems.length - 1]);
                }
                //   var x = 100+require
                //   var y = 100/items.length;
            }
        }
    }
    var a;
    buttons[4].onclick = () => {
        if (!a) {
            a = 1;
            var newitems = [];
            var itemsheight = [];
            for (let i = 0; i < items.length; i++) {
                itemsheight.push(items[i].clientHeight);
            }

            function sortarr(arr) {
                for (i = 0; i < arr.length - 1; i++) {
                    for (j = 0; j < arr.length - 1 - i; j++) {
                        if (arr[j] > arr[j + 1]) {
                            var temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                    }
                }
                return arr;
            }
            sortarr(itemsheight);
            show.innerHTML = '';

            for (let i = 0; i < itemsheight.length; i++) {
                var newnode3 = document.createElement('div');
                var text = document.createElement('text');
                text.innerHTML = itemsheight[i];
                newnode3.appendChild(text);
                var k = itemsheight[i];
                newnode3.style.cssText = "border:1px solid #FFB6C1;text-align:center;background-color:#D8BFD8;color:blue;font-weight:800;"
                newnode3.style.height = k + 'px';
                newnode3.style.width = 100 + 'px';
                show.appendChild(newnode3);
                newitems.push(newnode3);
                flag = 1;
                console.log(newitems);
            }
            itemsheight.innerHTML = '';
        }
    }
    buttons[5].onclick = () => {
        show.innerHTML = '';
    }
    buttons[6].onclick = () => {
        var div = [];
        var itemsheight1 = []
        for (let i = 0; i < arr.length; i++) {
            itemsheight1.push(div[i].clientHeight);
        }
        for (let i = 1; i <= 20; i++) {
            arr.push(Math.floor(Math.random() * 91 + 10));
        }
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            var newnode4 = document.createElement('div');
            var text = document.createElement('text');
            text.innerHTML = arr[i];
            newnode4.appendChild(text);
            var l = arr[i];
            newnode4.style.cssText = "border:1px solid #FFB6C1;text-align:center;background-color:#D8BFD8;color:blue;font-weight:800;"
            newnode4.style.height = l + 'px';
            newnode4.style.width = 100 + 'px';
            show.appendChild(newnode4);
            div.push(newnode4);
            a = 1;
        }

    }
}