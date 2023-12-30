const option1 = document.getElementById('op1') ; 
const option2 = document.getElementById('op2') ;
const option3 = document.getElementById('op3') ;
const option1HF = document.getElementById('op1HF') ; 
const option2HF = document.getElementById('op2HF') ;
const option3HF = document.getElementById('op3HF') ;

function acaoOp1(){
    const title = document.getElementById('title2'); 
    title.classList.remove('red');
    title.classList.remove('yellow');
    title.classList.add('blue');
}
function acaoOp2(){
    const title = document.getElementById('title2'); 
    title.classList.remove('yellow');
    title.classList.remove('blue');
    title.classList.add('red');
}
function acaoOp3(){
    const title = document.getElementById('title2'); 
    title.classList.remove('red');
    title.classList.remove('blue');
    title.classList.add('yellow');
}


function acaoOp1HF(){
    const header = document.getElementById('headercolor')
    const footer = document.getElementById('footercolor')
    header.style.backgroundColor = 'blue';
    footer.style.backgroundColor = 'blue';
}
function acaoOp2HF(){
    const header = document.getElementById('headercolor')
    const footer = document.getElementById('footercolor')
    header.style.backgroundColor = 'red';
    footer.style.backgroundColor = 'red';
}
function acaoOp3HF(){
    const header = document.getElementById('headercolor')
    const footer = document.getElementById('footercolor')
    header.style.backgroundColor = 'yellow';
    footer.style.backgroundColor = 'yellow';
}

option1.addEventListener('click', acaoOp1);
option2.addEventListener('click', acaoOp2);
option3.addEventListener('click', acaoOp3);
option1HF.addEventListener('click', acaoOp1HF);
option2HF.addEventListener('click', acaoOp2HF);
option3HF.addEventListener('click', acaoOp3HF);