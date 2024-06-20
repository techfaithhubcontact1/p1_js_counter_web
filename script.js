const counterValue = document.querySelector('.counter_value');
const decrement = document.querySelector('.decrement');     
const increment = document.querySelector('.increment'); 
let inputV = document.querySelector('.change_count input'); 
let reset = document.querySelector('.reset'); 
          
decrement.addEventListener('click', ()=>{
     let val = parseInt(inputV.value)
     counterValue.innerText -= val;
})
increment.addEventListener('click', ()=>{
     let val1 = parseInt(inputV.value);
     counterValue.innerText = parseInt(counterValue.innerText) + val1;
})
reset.addEventListener('click', ()=>{
     counterValue.innerText = 0;
})
