window.onload = () => {
    var items = document.getElementsByTagName('li');
    let listArr = ['list1', 'list2', 'list3', 'list4', 'list5'];
    // let array=['text1','text2','text3','text4','text5'];
    // console.log(items);
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click',() => {
            // console.log(i);
            items[i].innerHTML = listArr[i];
            // for (let z = 0; z < items.length; z++) {
            //     if (z != i) items[z].innerHTML = array[z];
            // } 
        },false);
    }
}