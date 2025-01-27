const titles = document.querySelectorAll('.title');
const descriptions = document.querySelectorAll('.description');

let isDescriptionVisible = Array(titles.length).fill(false);
titles.forEach((title, index) => {
    title.addEventListener('click', () => {
        isDescriptionVisible[index] = !isDescriptionVisible[index];
        descriptions[index].style.display = isDescriptionVisible[index] ? 'block' : 'none';
    });
});