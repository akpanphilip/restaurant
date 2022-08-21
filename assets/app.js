let showAll = document.querySelector('.showAll');
let showStarters = document.querySelector('.showStarters');
let showSalad = document.querySelector('.showSalads');
let showSpecialty = document.querySelector('.showSpecialty');

let breakfast = document.querySelector('.breakfast');
let salad = document.querySelector('.salad');
let starters = document.querySelector('.starters');
let specialty = document.querySelector('.specialty');

showAll.addEventListener('click', () => {
    breakfast.style.display = 'block';
    salad.style.display = 'none';
    starters.style.display = 'none';
    specialty.style.display = 'none';
    showAll.classList.add('active-btn');
    showSalad.classList.remove('active-btn');
    showSpecialty.classList.remove('active-btn');
    showStarters.classList.remove('active-btn');
});
showSalad.addEventListener('click', () => {
    salad.style.display = 'block';
    breakfast.style.display = 'none';
    starters.style.display = 'none';
    specialty.style.display = 'none';
    showSalad.classList.add('active-btn');
    showAll.classList.remove('active-btn');
    showSpecialty.classList.remove('active-btn');
    showStarters.classList.remove('active-btn');
});
showStarters.addEventListener('click', () => {
    breakfast.style.display = 'none';
    salad.style.display = 'none';
    starters.style.display = 'block';
    specialty.style.display = 'none';
    showAll.classList.remove('active-btn');
    showSalad.classList.remove('active-btn');
    showSpecialty.classList.remove('active-btn');
    showStarters.classList.add('active-btn');
});
showSpecialty.addEventListener('click', () => {
    breakfast.style.display = 'none';
    salad.style.display = 'none';
    starters.style.display = 'none';
    specialty.style.display = 'block';
    showAll.classList.remove('active-btn');
    showSalad.classList.remove('active-btn');
    showSpecialty.classList.add('active-btn');
    showStarters.classList.remove('active-btn');
});


// showSpecialty.classList = 'sarah_idea';