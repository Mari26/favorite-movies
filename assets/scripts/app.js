const addMovieModal = document.getElementById('add-modal');
const startAddMoveButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirm = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');


const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}


const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
} 

const backdropClick = () => {
    toggleMovieModal();
}

const cancelAddMovie = () => {
    toggleMovieModal();
}

const addMovie = () =>{
const titleValue = userInputs[0].value;
const imageValue = userInputs[1].value;
const ratingValue = userInputs[2].value;

if (titleValue.trim() ==='' || 
imageValue.trim() ==='' || 
ratingValue.trim()==='' || 
+ratingValue < 1 ||
+ratingValue > 5){
alert ('blablablaaa');
return;
}
}



startAddMoveButton.addEventListener('click',toggleMovieModal);
backdrop.addEventListener('click',toggleMovieModal);
cancelAddMovieButton.addEventListener('click',cancelAddMovie);
confirm.addEventListener('click',addMovie);