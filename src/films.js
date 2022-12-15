// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
	const result = array.map(element => {
  	return element.director;
  });

  //console.log(`EXERCICE 1: `, result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const allHisMovies = array.filter(movie => {
    return movie.director == director;
  });

  //console.log(`EXERCICE 2: `, allHisMovies);
  return allHisMovies;
}


// Exercise 3: Calculate the average rate of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const allHisMovies = getMoviesFromDirector(array, director);
  const numberOfFilms = allHisMovies.length;

  const initialValue = 0;
  const allTheScores = allHisMovies.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score;
  }, initialValue);
  const allTheScoresTwoDigits = parseFloat(allTheScores.toFixed(2));
  
  const average = parseFloat((allTheScoresTwoDigits/numberOfFilms).toFixed(2));
/*
  console.log('numberOfFilms', numberOfFilms);
  console.log('allTheScores', allTheScores);
  console.log('average',average);
  console.log('average tipo:',typeof average);
*/  
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titlesArray = array.map(element => {
    return element.title;
  });
  
  const orderedArray = titlesArray.sort();
  if (orderedArray.length > 20) {
    orderedArray.length = 20;
  };
  
  return orderedArray;
}

// Exercise 5: Order by year, ascending

function orderByYear(array) {

  const newMovies = [...array];

  const orderedByYear = newMovies.sort((a, b) => { 
    if (a.year < b.year) {
      return -1;
    }
    
    if (a.year > b.year) {
      return 1;
    }

    if (a.year == b.year) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }
  });

  return orderedByYear;
}

// Exercise 6: Calculate the average of the movies in a category

// Build function to calculate averages
function moviesAverage(array) {
  const initialValue = 0;
  const noEmptyValues = array.filter(item => item.score != '');
  const moviesAverageSum = noEmptyValues.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score;
  }, initialValue);

  const numberOfFilms = noEmptyValues.length;
  
  const moviesAverageScore = parseFloat((moviesAverageSum/numberOfFilms).toFixed(2));

  return moviesAverageScore;
}

// Calculate averages
function moviesAverageByCategory(array, category) {
  
  /// Exercise 6.1: Get movies of a certain category
  const moviesFromCategory = array.filter(movie => {
    return movie.genre.includes(category);
  });

  /// Exercise 6.2: Calculate average of the movies
  const moviesAverageScore = moviesAverage(moviesFromCategory);

  return moviesAverageScore;  
}

// Exercise 7: Modify the duration of movies to minutes
// Exercise 7A: Transform duration into minutes
function durationInMinutes(value) {
  const minRegex = /(?<=\s)\d+(?=m)/gm;
  const hourRegex = /\d+(?=h)/gm;
  let minutes = parseInt(value.match(minRegex));
  if (isNaN(minutes)) minutes = 0;
  let hours = parseInt(value.match(hourRegex));
  let newDuration = parseInt(hours*60+minutes);
  return newDuration;
}

// Exercise 7B: Modify the duration of movies to minutes for a given array
function hoursToMinutes(array) {
  const arrayNewMovies = array.map(item => {
    return {...item, duration: durationInMinutes(item.duration)};
  });
  
  return arrayNewMovies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
