const numberOfFilms = +prompt('Какое количество фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors : {},
    genres: [],
    privat: false

};

const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько его оцените?', ''),
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = prompt('На сколько его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
//test2