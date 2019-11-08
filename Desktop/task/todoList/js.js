window.onload = () => {
   var submit = document.getElementById('submit');
   submit.onclick = () => {
       var inquire = document.getElementById('require').value;
       var newtext = document.createElement('text');
       newtext.innerHTML = inquire;
       var newnode1 = document.createElement('div');
       show.appendChild(newnode1);
       newnode1.appendChild(newtext);
       newnode1.style.cssText = "color:#008B8B;background-color:#40E0D0;display:flex;font-size:20px;line-height:20px;width:600px;height:auto;word-break:break-all;word-wrap:break-word;border:2px solid #FFE4C4"
           //  newnode1.innerHTML=inquire;
       document.getElementById('require').value = "";
       var newnode2 = document.createElement('button');
       newnode2.style.cssText = "display:block;background-color:#EEE8AA;color:#FF6347"
       newnode1.appendChild(newnode2);
       newnode2.innerHTML = "删除";
       newnode2.onclick = () => {
           newnode1.innerHTML = '';
       }
       var newnode3 = document.createElement('button');
       newnode3.style.cssText = "display:block;background-color:#EEE8AA;color:#FF6347"
       newnode1.appendChild(newnode3);
       newnode3.innerHTML = "修改";
       newnode3.onclick = () => {
        if(!document.getElementById('textarea'))
           var newnode4 = document.createElement('input');
           newnode4.type = 'text';
           newnode4.style.cssText="border:0;border-bottom:1 solid black;background-color:#DAA520;"
           newnode4.id='textarea'
        //    if(!document.getElementById('textarea'))
           {newnode1.appendChild(newnode4);}
           window.onkeydown = function(event) {
               if (event.keyCode == 13) {
                   // console.log('b');
                   newtext.innerHTML = newnode4.value;
                   newnode1.removeChild(document.getElementById('textarea')); 
               }
           }
       }
   }
}