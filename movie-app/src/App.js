
  

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([{
    "Title": "Teen Titans GO! To the Movies",
    "Year": "2018",
    "imdbID": "tt7424200",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTZhMTIwZDUtYjZjZS00MmViLTg3NzEtNWE5NzI1NDUwNDJmXkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_SX300.jpg"
  },
  {
    "Title": "The Life and Movies of Ersan Kuneri",
    "Year": "2022–",
    "imdbID": "tt13238304",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDI2N2VlYzQtYzc1My00YjRhLWE3OWMtMzFiN2YyN2ZkN2UzXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg"
  },
  {
    "Title": "Home Movies",
    "Year": "1999–2004",
    "imdbID": "tt0197159",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWViOTRmMGUtYWY3ZS00ZTY0LWE1YjktOGY3NDhhNmIyOTk5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "Title": "The Movies That Made Us",
    "Year": "2019–2021",
    "imdbID": "tt10681222",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGY1NzAyYTQtYmQxZi00NjQ3LWFkMzUtYjA0ZjRhYjI0MTRkXkEyXkFqcGdeQXVyNjAzOTE0OTI@._V1_SX300.jpg"
  },
  {
    "Title": "The New Scooby-Doo Movies",
    "Year": "1972–1973",
    "imdbID": "tt0068112",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWEwYTZhMGQtMDU0ZC00NmYyLTk0OWEtMjg1OTY5OTY5N2EyXkEyXkFqcGdeQXVyMTEzNjA2NzM@._V1_SX300.jpg"
  },
  {
    "Title": "A Personal Journey with Martin Scorsese Through American Movies",
    "Year": "1995",
    "imdbID": "tt0112120",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGRkMWFkZjgtYzc2My00MjljLTkwNTEtMGZhOTUyM2I3OGMxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "Title": "I Like Movies",
    "Year": "2022",
    "imdbID": "tt14913282",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjY3MzI1NTktOTcwZi00NTY2LWE2MWYtMDkxNjBhYjk1NGY3XkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_SX300.jpg"
  },
  {
    "Title": "Midnight Movies: From the Margin to the Mainstream",
    "Year": "2005",
    "imdbID": "tt0457414",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTIzNTc4MzQyMF5BMl5BanBnXkFtZTcwODM1OTc3MQ@@._V1_SX300.jpg"
  },
  {
    "Title": "The Movies",
    "Year": "2019",
    "imdbID": "tt10468676",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Skin: A History of Nudity in the Movies",
    "Year": "2020",
    "imdbID": "tt11245776",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTFmZjVjNjYtNTYyZS00Yzg3LWI5MmItMDJiNThhMDZlNDc5XkEyXkFqcGdeQXVyMzU1ODg2NDg@._V1_SX300.jpg"
  }]);
  return (
    <div >
      <div >
        <MovieList movies={movies}/>
      
      </div>
      
    </div>
  )
}
export default App