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

const a = prompt ('Один из последних фильмов?', ''),
      b = prompt ('Дайте ему оценку?', ''),
      c = prompt ('Один из последних фильмов?', ''),
      d = prompt ('Дайте ему оценку?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

