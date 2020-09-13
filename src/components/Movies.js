import React from 'react';
import { movies } from '../data';

const Movie = ({title, time, genres}) => {return(
  <div key = {title} key = {time} key = {genres}>
    {title},
    {time},
     <ul>
      <li>{genres}</li> 
     </ul>
  </div>
)}

const Movies = () => {
  return (
     <div>
        <h1>'Movies Page'</h1>

        { movies.map(Movie)}
         </div>
         
        
       )}
      

    


export default Movies;
