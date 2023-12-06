import React from "react";
import { Link } from "react-router-dom";


import Buscador from './Buscador'




export default function Header(props) {
  return (
    <header>
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/"> Alkemy Movies</Link>
          <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <Link className="nav-link" to="/"> Home</Link>
              </li>
              <li className="navbar-item">
                <Link className="nav-link" to="/listado"> Listado</Link>
              </li>
              <li className="navbar-item">
                <Link className="nav-link" to="/favoritos">Favoritos</Link>
              </li>
              <li className="navbar-item d-flex align-items-center">
               <span className="text-success ">
                {props.favorites.length >0 && <> Cantidad de Favoritos: {props.favorites.length}</>}
               </span>
              </li>
            </ul>
          </div>
          <Buscador/>
        </div>
      </nav>
    </header>
  );
}
