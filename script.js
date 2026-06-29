let display = document.querySelector('.display');
let btns = document.querySelector('.btns');
let clear = document.querySelector('.clear');


clear.addEventListener('click', ()=>{
    display.innerText = '';
})

function appendValue(text){
    display.innerText = `${display.innerText}${text}`;
}

function calculate(){
    display.innerText = eval(display.innerText)
}

calculate();