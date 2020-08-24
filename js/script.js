"use strict"

//1  задание
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
document.write(numberOfFilms);

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

for (let i = 0; i < 2; i++) {
        const a = prompt ('Один из последних фильмов?', ''),
        b = prompt ('Дайте ему оценку?', '');    

        if (a != null && b != null &&  a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error!');
            i--;
        }
}

if (personalMovieDB.count < 10) {
    console.log('malo filmov');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('norm filmov');
} else if (personalMovieDB.count >= 30) {
    console.log('mnogo filmov');
} else {
    console.log('Error!');
}

console.log(personalMovieDB);

