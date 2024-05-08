import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Favourites from './components/Favourites';
import SearchBar from './components/SearchBar';
import MovieHeader from './components/MovieHeader';


const App =  () => {
  const [movies, setMovies] = useState([]);
  
  const getMovieRequest =async ()=> {
    const URL = 'http://www.omdbapi.com/?s=movies&apikey=114372bb';
    const response= await fetch(URL);
    const responseJson = await response.json();

    setMovies(responseJson.Search)
  };


useEffect(()=>{
  getMovieRequest()
},[]);



  
  return (
    <div>
        <div>
     < MovieHeader heading = 'Movies'/>
    </div>
        <div>
    <SearchBar/>
    </div>
    
      <div >
        <MovieList movies={movies} FavouritesComponent= {Favourites}/>

      
      </div>
 <div>
     <Favourites/>
   </div>

   
    </div>
  )
}
export default App;



