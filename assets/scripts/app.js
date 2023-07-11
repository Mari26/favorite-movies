const addMovieModal = document.getElementById('add-modal');
const startAddMoveButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirm = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const movies = [];

const updateUI = () =>{
    if (movies.length === 0){
        entryTextSection.style.display = 'block';


    }else {
        entryTextSection.style.display = 'none';
        
    }
}


const deleteMovie=(movieId)=>{
    let movieIndex = 0;
for(const movie of movies){
    if(movie.id===movieId){
break;
    }
    movieIndex++;
}
movies.splice(movieIndex,1);
const listRoot = document.getElementById('movie-list');
listRoot.children[movieIndex].remove();
};




const renderNewMovieElement = (id,title, imageUrl, rating) =>{
const newMovieElement = document.createElement('li');
newMovieElement.className= 'movie-element';
newMovieElement.innerHTML = `
<div class="movie-element__image">
<img src="${imageUrl}" alt="${title}"> 
</div>
<div class="movie-element__info">
<h2>${title}</h2>
<p>${rating}</p>
</div>
`;

newMovieElement.addEventListener('click',deleteMovie.bind(null,id));

const listRoot = document.getElementById('movie-list');
listRoot.appendChild(newMovieElement);
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}


const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
} 

const clearMovieInput = () =>{
for(const userInput of userInputs){
    userInput.value = '';
}
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

const newMovie = {
id: Math.random().toString(),
title: titleValue,
image: imageValue,
rating: ratingValue
};
movies.push(newMovie);
console.log(movies);
toggleMovieModal();
clearMovieInput();
updateUI();
renderNewMovieElement(newMovie.id,newMovie.title,newMovie.image,newMovie.rating);
};


startAddMoveButton.addEventListener('click',toggleMovieModal);
backdrop.addEventListener('click',toggleMovieModal);
cancelAddMovieButton.addEventListener('click',cancelAddMovie);
confirm.addEventListener('click',addMovie);