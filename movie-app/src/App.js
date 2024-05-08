import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import MovieHeader from './components/MovieHeader';
import Favourites from './components/Favourites';




const App =  () => {
  const [movies, setMovies] = useState([]);
  const [Favourites, setFavourites] = useState([])
  const [searchValue, setSearchValue] = useState('');
  
  const getMovieRequest =async (searchValue)=> {
    const URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=114372bb`;
    const response= await fetch(URL);
    const responseJson = await response.json();
    if (responseJson.Search)

    setMovies(responseJson.Search)
  };


useEffect(()=>{
  getMovieRequest(searchValue)
},[searchValue]);

const addFavouriteMovie =(movie)=>{
  const newFavouriteList =[...Favourites, movie];
  setFavourites(newFavouriteList)
}




  
  return (
    <div>
        <div>
     < MovieHeader heading = 'Movies'/>
    </div>
        <div>
    <SearchBar searchValue = {searchValue} setSearchValue = {setSearchValue}/>
    </div>
    
      <div >
        <MovieList movies={movies} 
        handleFavouritesClick ={addFavouriteMovie}
         FavouriteComponent= {Favourites}/>

      
      </div>
 <div>
     <Favourites/>
   </div>

   
    </div>
  )
}
export default App;



