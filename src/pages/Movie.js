import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${userId}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error("Error fetching movie:", error));
  }, [userId]);

  if (!movie) {
    return (
      <div>
        <NavBar />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Duration: {movie.time} minutes</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
};

export default Movie;
