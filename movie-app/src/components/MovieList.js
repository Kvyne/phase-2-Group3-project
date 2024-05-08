
import React from "react";

const MovieList = (props) =>{
  const FavouritesComponent = props.FavouritesComponent
  return(
    <>
    {props.movies.map((movie, index)=>
    <div >
      <img src={movie.Poster} alt ="movie"></img>
      <FavouritesComponent/>
    </div>
)}
    </>
  )
}
 export default MovieList;
