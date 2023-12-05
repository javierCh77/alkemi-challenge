import React from "react";
import Swal from 'sweetalert2'
import {Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Resultados() {
  //////////////////// query string //////////////////
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");
  
  //// DECLARO VARIABLE DONDE VOY A ALMACENAR LOS RESULTADOS DEL ENPOINT DE BUSQUEDA ///////////
  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
  
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=6c5de2c59e0791eda5342f635d79ec8d&query=${keyword}`;

    axios.get(endPoint).then((response) => {
        const movieArray = response.data.results;
        /////// VALIDACION DE ERRORES /////////
        if(movieArray.length === 0) {
			Swal.fire("Tu busqueda no arrojo resultados");
        }
        setMoviesResults(movieArray);
      })
      .catch((error) => {
		Swal.fire("Tienes que escribir mas de 4 caracteres");
      });
  },[keyword]);





  return (
    <>
      <h2>
        Buscaste: <em className="text-success">{keyword}</em>
      </h2>
      {moviesResults.length === 0 && <h3>No hay resultados</h3> }
      
      <div className="row">
        {moviesResults.map((oneMovie, idx) => {
          return (
            <div className="col-4" key={idx}>
              <div className="card my-4">
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    {oneMovie.title.substring(0, 10)}...
                  </h4>
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 20)}
                  </p>
                  <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">
                    Ver detalle
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
