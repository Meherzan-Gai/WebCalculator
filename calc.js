
const clearBtn = document.getElementById('clear-btn');
const deleteBtn = document.getElementById('delete-btn');


const equalBtn = document.getElementById('equal-btn');

const equation = document.getElementById('answer-text');
const inputs = document.querySelectorAll('.input-button');



clearBtn.addEventListener('click', (e)=>{
    equation.innerText = '0';
});

deleteBtn.addEventListener('click', (e)=>{
    if (equation.innerText.length === 1){
        equation.innerText = '0';
    } else if (equation.innerText.length > 1){
        equation.innerText = equation.innerText.slice(0, -1);
    }
} )

equalBtn.addEventListener('click',(e) => {
    equation.innerText = eval(equation.innerText);
});


inputs.forEach(input => {
    input.addEventListener('click', (e)=>{
        if (equation.innerText === '0'){
            equation.innerText = e.target.getAttribute('data-val');
        } else {
            equation.innerText += e.target.getAttribute('data-val');
        }
    });
});
