const titles = document.querySelectorAll('.title');
const descriptions = document.querySelectorAll('.description');

let isDescriptionVisible = Array(titles.length).fill(false);
titles.forEach((title, index) => {
    title.addEventListener('click', () => {
        isDescriptionVisible[index] = !isDescriptionVisible[index];
        descriptions[index].style.display = isDescriptionVisible[index] ? 'block' : 'none';
    }); 
});

const checkBtns = document.querySelectorAll('.check-btn');
const answers = document.querySelectorAll('.answer');
let userInput = Array.from(document.querySelectorAll('.user-input'));

let isAnswerVisible = Array(checkBtns.length).fill(false);

checkBtns.forEach((checkBtn, index) => {
    checkBtn.addEventListener('click', () => {
        isAnswerVisible[index] = !isAnswerVisible[index];
        
        if (userInput[index].value === answers[index].textContent) {
            answers[index].style.display = 'block';
            answers[index].textContent = `Correct! ${answers[index].style.display.block}`;
        } else {
            answers[index].style.display = isAnswerVisible[index] ? 'block' : 'none';
        }
    });
});

userInput.forEach((input, index) => {
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            isAnswerVisible[index] = !isAnswerVisible[index];
            if (input.value === answers[index].textContent) {
                answers[index].style.display = 'block';
                answers[index].textContent = `Correct!`;
            } else {
                answers[index].style.display = isAnswerVisible[index] ? 'block' : 'none';
            }
        }
    });
});



userInput.forEach(input => {
    input.setAttribute('spellcheck', 'false');
});
