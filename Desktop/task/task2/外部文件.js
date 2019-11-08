window.onload = () => {
    var inquire = document.getElementsByTagName('button');
    inquire[0].onclick = () => {
        inquire[0].style.opacity = '0.5';
        console.log('我的透明度从0.8变为0.5了');
    }
}