const option1 = document.getElementById('op1') ; 
const option2 = document.getElementById('op2') ;
const option3 = document.getElementById('op3') ;

function acaoOp1(){
    const title = document.getElementById('title2'); 
    title.className = '' ;
    title.classList.add('blue');
}
function acaoOp2(){
    const title = document.getElementById('title2'); 
    title.className = '' ;
    title.classList.add('red');
}
function acaoOp3(){
    const title = document.getElementById('title2'); 
    title.className = '' ;
    title.classList.add('yellow');
}

option1.addEventListener('click', acaoOp1);
option2.addEventListener('click', acaoOp2);
option3.addEventListener('click', acaoOp3);
