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
        console.log(movieData);
        setMovie(movieData)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieID]);

  return (
    <>
      {!token && <Navigate to="/" />}
      { movie && ( 
         <>
            <h2>TITULO :{movie.title} </h2>
             <div className="row">
               <div className="col-4">Imagen</div>
                 <div className="col-8">
                  <h5>Fecha estreno: </h5>
                  <h5>Reseña: </h5>
                  <h5>Genero: </h5>
                     <ul>
                        <li>genero 1</li>
                        <li>genero 2</li>
                        <li>genero 3</li>
                     </ul>
               </div>
             </div>
         </> 
        )}
    </>
      
  );
}
