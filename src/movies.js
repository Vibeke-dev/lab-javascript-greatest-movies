// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(allMovies) {
  const directorArray = allMovies.map(function (movies) {
    return movies.director;
  });
  return directorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(allMovies) {
  let number = 0;
  const newArray = allMovies.filter(function (movies) {
      if (movies.director === 'Steven Spielberg' && movies.genre.includes ('Drama')){
        number++;
      }
  });
  return number;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(allMovies) {
  if (allMovies.length===0){
    return 0;
  }
  
  let averageNumber = allMovies.reduce(function(sumScore, movies) {
    if (movies.score){
      return sumScore + movies.score;
    }
    else{
      return sumScore;
      } 
  },0);
  
  return ((averageNumber/allMovies.length).toFixed(2))*1;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(allMovies) { 
  let newArray = allMovies.filter(function (movies) {
    return movies.genre == 'Drama';
  });

  if (newArray.length===0){
    return 0;
  }

  const averageNumber = newArray.reduce(function(sumScore, movies) {
      return sumScore + Number(movies.score);
  },0);
  
  return ((averageNumber/newArray.length).toFixed(2))*1;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(allMovies) {
  let moviesArray = Array.from(allMovies); //clone

  moviesArray.sort(function (a, b) {
      if (a.year < b.year) {
        return -1; 
      } 
      else if (a.year > b.year) {
        return 1; 
      } 
      else {
        if (a.title < b.title) {
          return -1; 
        } 
        else if (a.title > b.title) {
          return 1; 
        } 
          return 0;
      } 
  });
  return moviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(allMovies) {  
  let moviesArray = Array.from(allMovies); //clone

  let sortedMovies = moviesArray.sort(function (a, b) {
    if (a.title < b.title) {
      return -1; 
    } 
    else if (a.title > b.title) {
      return 1; 
    } 
      return 0;

  })
  .map((eachMovie) => eachMovie.title)
  .slice(0,20);

  return sortedMovies;
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
