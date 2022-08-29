const numberOfFilms = +prompt('Какое количество фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors : {},
    genres: [],
    privat: false

};

if (personalMovieDB.count < 10) {

       console.log('Мало');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30){

console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {

        console.log('Вы киноман');
}else {
    console.log('error')
}
/*
for (let i = 0; i <= 1; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько его оцените?', '');

    if (a !== null && b !== null && a !== '' && b !== '' && a.length <= 50 && b.length <= 50) {
        personalMovieDB.movies[a] = b;
        console.log('done!');
    }else {
        console.log('error');
        i--;
    }*/

let i = 0;
while (i <= 1) {
    i++;
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
    

console.log(personalMovieDB);
//test2