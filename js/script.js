"use strict"

//1  задание
let numberOfFilms = "0";
numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

document.write(numberOfFilms);

//2 задание
let moviesDB = {};
let actorsDB = {};
let genresDB = [];

let personalMovieDB = {
    count: numberOfFilms,
    movies: moviesDB,
    actors: actorsDB,
    genres: genresDB,
    privat: false
};
