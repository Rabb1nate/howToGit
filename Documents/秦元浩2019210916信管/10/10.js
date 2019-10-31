window.onload = function() {

    const items = document.getElementsByClassName('item');
    const week = ['!_!', '@_@', '#_#', '$_$', '^_^'];
    for (let i = 0; i < items.length; i++) {
        //onclick为鼠标点击事件
        items[i].onclick = function() {
            items[i].innerHTML = week[i];
            items[i].style.color = 'black';
            for (z = 0; z < items.length; z++) {
                if (z != i) items[z].innerHTML = z + 1;

            }

        }

    }
}