import React from "react";
import { Link } from "react-router-dom";

import logout from "../aseets/logout.svg";
import Buscador from "./Buscador";

export default function Header(props) {
  return (
    <header>
      <nav class="navbar  navbar-dark bg-dark fixed-top">
        <div class="container text-center">
          <Link class="navbar-brand" href="#">
            🚀 Movies
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="offcanvas offcanvas-end "
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header  title-nav">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close  bg-light"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body bg-dark  container-menu">
              <ul class="navbar-nav justify-content-center   pe-1">
                <li className="navbar-item">
                  <Link className="nav-link fs-4" to="/">
                    {" "}
                    Home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link className="nav-link fs-4 " to="/listado">
                    {" "}
                    Listado
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link className="nav-link fs-4" to="/favoritos">
                    Favoritos
                  </Link>
                </li>
                <li className="navbar-item d-flex align-items-center">
                  <span className="text-success ">
                    {props.favorites.length > 0 && (
                      <> Cantidad de Favoritos: {props.favorites.length}</>
                    )}
                  </span>
                </li>
              </ul>
              <div className="container text-center  buscador ">
                <Buscador />
              </div>
              <div>
                <button className="btn btn-outline-secondary">
                  <img className="m-1" src={logout} alt="logout"></img>Cerrar
                  Sessión{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
