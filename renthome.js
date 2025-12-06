let m=document.getElementById('minus');
let p=document.getElementById('plus');
let q=document.getElementById('qty');
let qnt=1;
p.addEventListener('click',function(){
    qnt++
    q.textContent=qnt+" BHK";
})
m.addEventListener('click',function(){
    if (qnt>1){
        qnt--
        q.textContent=qnt + " BHK";
    }
})