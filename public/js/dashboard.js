let createSection = document.querySelector('.createSection');
let createButton = document.querySelector('.createButton');


createSection.style.display = "none";


createButton.addEventListener('click', (event) => {
    event.preventDefault;
    createSection.style.display = "block";
});