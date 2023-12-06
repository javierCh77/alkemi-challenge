import React from 'react'
import { Link, useNavigate } from 'react-router-dom';





export default function Favoritos(props) {

  let token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <>
    
    { token && navigate('/') }
    
    
    <h2>Seccion de Favoritos</h2>
    <div className='row'>
    {!props.favorites.length && <h4 className='col-12 text-danger'>No tienes Favoritos</h4>}

    {props.favorites.map((oneMovie, idx) => {
      return (
        <div className="col-12 col-md-3" key={idx}>
          <div className="card my-4">
            <img
              className="card-img-top"
              src={oneMovie.imgURL}
              alt="Title"
            />

            <button
              className="favourite-btn"
              onClick={props.addOrRemoveFromFavs}
              data-movie-id = {oneMovie.id}
            >
              🖤
            </button> 
            <div className="card-body">
              <h4 className="card-title">
                {oneMovie.title.substring(0, 10)}...
              </h4>
              <p className="card-text">
                {oneMovie.overview.substring(0, 20)}
              </p>
              <Link
                className= "btn btn-primary"
                to={`/detalle?movieID=${oneMovie.id}`}
                
              >
                Ver detalle
              </Link>
            </div>
          </div>
        </div>
      );
    })}
    </div>
  </>
  )
}
