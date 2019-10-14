import React, { useState, useEffect, Component } from "react";
import { Movie } from "./types/Movie";

//Prøvde først dette, men hadde ikke tid til å fortsette på denne måten. 

interface Imovie { 
  movie: Movie
}
export const Title: React.FC = () => {
  const [movie, setMovie] = useState<Imovie[]>([])

  async function fetchMovie1() {
    const response = await fetch ("http://www.omdbapi.com/?i=tt0120338&apikey=9edb6465"); 
    const movie = await response.json();
    const newMovie: Imovie[] = [movie.Title, movie.Year, movie.Rated]
    setMovie(newMovie)
  } 

  useEffect(() => {
    fetchMovie1();
  },[]);

  return (
    <div>
  
    <section>
        {movie.map((movie: Imovie, index: number) => (
          <div key={index}>{movie}</div>
        ))}
      </section>
     
      <hr />
     
    </div>
  );
  }



export default Title; 