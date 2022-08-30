
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Какое количество фильмов вы посмотрели?', '');

        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Какое количество фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i <= 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько его оцените?', '');

            if (a !== null && b !== null && a !== '' && b !== '' && a.length <= 50 && b.length <= 50) {
                personalMovieDB.movies[a] = b;
                console.log('done!');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {

            console.log('Мало');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30){
        
        console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
        
                console.log('Вы киноман');
        }else {
            console.log('error');
        }

    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 1; i++) {
            let generes = prompt(`Введите фильмы через ,`).toLowerCase();
            if (generes === null || generes === '') {
                i--;
            }else {
            personalMovieDB.genres = generes.split(', ');
            personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((value, index) => {console.log ( `Любимый жанр ${index + 1} - это ${value}` )});
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
            console.log(personalMovieDB.privat);
        } else {
            personalMovieDB.privat = true;
            console.log(personalMovieDB.privat);
        }
        
    }

};

