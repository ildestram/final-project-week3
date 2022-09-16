let displayElementOne = document.querySelector('.display-1');
let displayElementTwo = document.querySelector('.display-2');
let displayElementResult = document.querySelector('.display-result');
let allNumber = document.querySelectorAll('.number');
let allOperation = document.querySelectorAll('.operation');
let operationEqual = document.querySelector('.equal');
let operationClear = document.querySelector('.clear');
let operationAllClear = document.querySelector('.all-clear');
// // ho definito tutte le variabili che mi servono

let displayOne = '';
let displayTwo = '';
let result = null;
let lastOp = '';
let dot = false;

allNumber.forEach( number => {
    number.addEventListener('click', (e)=> {
        if( e.target.innerText === '.' && !dot) {
            dot = true;
        } else if (e.target.innerText === '.' && dot) {
            return;
        }
        displayTwo += e.target.innerText;
        displayElementTwo.innerText = displayTwo;
    })
})

// perchè non mi prende il punto?

// se noi schiacciamo il punto (la prima riga di if) e prima non abbiamo messo un punto nel nostro numero, allora possiamo aggiungere un punto al calcolo
// se invece clicchiamo il punto solo una volta, allora avremo il punto
// se clicchiamo qualsiasi numero c'e lo farà vedere nel display

allOperation.forEach( operation => {
    operation.addEventListener('click', (e) => {
        if (!displayTwo) return;
        dot= false;
        let operationName = e.target.innerText;
        if(displayOne && displayTwo && lastOp) {
            mathOperation();
        }else {
            result = parseFloat(displayTwo);
        }
        console.log(result);
    })
})




