import React from 'react';
import { directors } from '../data';

const Director = ({name, movies}) => {return(
<div key = {name} key = {movies}>
    {name}
     <ul>
      <li>{movies}</li> 
     </ul>
  </div>
)
}

const Directors = () => {
  return (
    <div>
      <h1>'Directors Page'</h1>
      {directors.map(Director)}
    </div>
  );
}

export default Directors
