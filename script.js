'use strict';

let a, answer;

answer = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: answer,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


for (let i = 0; i < 2; i++) {
    a = prompt("Один из последних просмотренных фильмов?", "");
    personalMovieDB.movies[a] = prompt("На сколько оцените его?", "");
    if (a != null && a != "" && a.length < 50 && personalMovieDB.movies[a] != null && personalMovieDB.movies[a] != "") {
        console.log("Все хорошо");
        continue;
    } else {
        console.log("Все ploho");
        i--;
    }
}

console.log(personalMovieDB);

// if(a != false && a != null &&a.length > 50) {
//     a = prompt("Один из последних просмотренных фильмов?", "Титаник");
//     personalMovieDB.movies[a] = prompt("На сколько оцените его?", "5.0");
// };


if(personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if(personalMovieDB.count > 30) {
    console.log("Вы киноман");
}else {
    console.log("Произошла ошибка");
};
 