"use strict"

//1  задание
let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start ();

//document.write(numberOfFilms);

//2 задание
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// const a = prompt ('Один из последних фильмов?', ''),
//       b = prompt ('Дайте ему оценку?', ''),
//       c = prompt ('Один из последних фильмов?', ''),
//       d = prompt ('Дайте ему оценку?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const   a = prompt ('Один из последних фильмов?', ''),
                b = prompt ('Дайте ему оценку?', '');    

        if (a != null && b != null &&  a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error!');
            i--;
        }
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
            console.log('malo filmov');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('norm filmov');
        } else if (personalMovieDB.count >= 30) {
            console.log('mnogo filmov');
        } else {
            console.log('Error!');
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt (`Ваш любимый жанр под номером ${i}`, '');
        
        if (genre != null && genre != '') {
            personalMovieDB.genres[i-1] = genre;
            console.log("done!");
        } else {
            console.log("Error!");
            i--;
        }

    }
}
writeYourGenres();
