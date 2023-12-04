import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";

export default function Listado() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=6c5de2c59e0791eda5342f635d79ec8d&";
    axios.get(endPoint).then((response) => {
      const apiData = response.data;
      setMoviesList(apiData.results);
    })
    // manipulacion del error 
    .catch(error=> {
      Swal.fire({
        icon: "error",
        title: "Oops... ",
        text: `El usuario ${error}o clave no son validos`,        
});
return;
    })
    }, [setMoviesList]);

  console.log(moviesList);

  // el navigate para navegar
  //const navigate = useNavigate();
  let token = localStorage.getItem("token");

  return (
    <>
      {/* aqui la logiga para mostrar el contenido si tengo el token */}
      {!token && <Navigate to="/" />}

      {moviesList.map((oneMovie, idx) => {
        return (
          <div className="row" key={idx}>
            <div className="col-3 g-3">
              <div className="card my-4">
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    {oneMovie.title.substring(0, 30)}...
                  </h4>
                  <p className="card-text">{oneMovie.overview}</p>
                  <Link to="/" className="btn btn-primary">
                    Ver detalle
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
