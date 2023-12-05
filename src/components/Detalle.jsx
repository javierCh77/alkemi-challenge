import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function Detalle() {
  let token = sessionStorage.getItem("token");
  // aqui capturo el parametro local y lo almaceno en una variable para buscar el identificador unico
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");
  ///////////////////////////////////////////////////
  
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=6c5de2c59e0791eda5342f635d79ec8d&`
    axios.get(endPoint).then((response) => {
        const movieData = response.data;
        setMovie(movieData)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieID]);

  return (
    <>
      {!token && <Navigate to="/" />}
      {/* renderizado condicional siempre y cuando tenga informacion en la variable movie */}
      { !movie && <div className="d-flex justify-content-center text-center">
                    <div className="spinner-border" role="status"></div>
                  </div>}
                  
      { movie && ( 
         <>
            <h2>TITULO :{movie.title} </h2>
            <div className="container">
             <div className="row text-right">
               <div className="col-4 ">
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt=""></img>
                </div>
                 <div className="col-8">
                  <h5>Fecha estreno:<b className="text-info"> {movie.release_date}</b></h5>
                  <h5>Reseña:</h5>
                  <p>{movie.overview}</p>
                  <h5>Rating: <b className="text-info">{movie.vote_average}</b></h5>
                  <h5>Generos: </h5>
                     <ul>
                     {movie.genres.map(oneGenre=> <li key={oneGenre.id} className="text-info">{oneGenre.name}</li>)}
                     </ul>
               </div>
             </div>
             </div>
         </> 
        )}
    </>
      
  );
}
