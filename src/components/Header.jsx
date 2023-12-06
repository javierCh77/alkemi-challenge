import React from "react";
import { Link } from "react-router-dom";

import logout from '../aseets/logout.svg'
import Buscador from './Buscador'




export default function Header(props) {
  return (
    <header>
    <nav class="navbar  navbar-dark bg-dark fixed-top">
  <div class="container text-center">
    <Link class="navbar-brand" href="#">🚀 Movies</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header  title-nav">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body bg-dark">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
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
        <div className="container text-center  buscador ">
        <Buscador/>
        </div>
        <div>
          <button className="btn btn-outline-danger"><img className="m-1" src={logout}alt="logout"></img>Cerrar Sessión </button>
        </div>
        
      </div>
    </div>
  </div>
</nav>
    </header>
  );
}
