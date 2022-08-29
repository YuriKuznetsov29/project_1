let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Какое количество фильмов вы посмотрели?', '');

    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Какое количество фильмов вы посмотрели?', '');
    }
}

start ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors : {},
    genres: [],
    privat: false

};


function rememberMyFilms() {
    for (let i = 0; i <= 1; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько его оцените?', '');
    
        if (a !== null && b !== null && a !== '' && b !== '' && a.length <= 50 && b.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('done!');
        }else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {

        console.log('Мало');
 } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30){
 
 console.log('Вы классический зритель');
 } else if (personalMovieDB.count > 30) {
 
         console.log('Вы киноман');
 }else {
     console.log('error');
 }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB (personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genere = prompt(`Ваш любимый жарнр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genere;
    }
    
}

function writeYourGenres()


console.log(personalMovieDB);
//test2