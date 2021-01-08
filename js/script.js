"use strict";

let humansPersonal = {
    count: [1, 2, 3],
    movies: {},
    actors: [],
    genres: [],
    privat: false
};

function showDB(hidden) {
    if (!hidden) {
        console.log(humansPersonal);
    }
}

showDB(humansPersonal.privat);