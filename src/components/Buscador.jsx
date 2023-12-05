import React from "react";

import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'



export default function Buscador() {

    const navigate = useNavigate();

const submitHandle = e =>{
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim()
    
    /////////////////////// QUERY STRING ///////////////////

    
    
    
    
    
    // aplico la condicion si no tiene ningun valor o menor que 4 caractere que dispare un swalert como alerta
    if(keyword.length === 0){
        Swal.fire("Tienes que escribir una palabra");
    // validacion aplicando la regla que tenga q escribir mas de 4 caracteres
    }else if (keyword.length < 4){
        Swal.fire("Tienes que escribir mas de 4 caracteres");
    }else{
        // limpio el campo del input
       e.currentTarget.keyword.value = '';
       navigate(`/resultados?keyword=${keyword}`)
    }
    
    
    
   

}


  return (
    <form className="d-flex align-items-center" onSubmit={submitHandle}>
      <label className="form-label mb-0 mx-2">
        <input className="form-control " placeholder="Escriba una palabra clave" type="text" name="keyword"/>
      </label>
      <button className="btn btn-success " type="submit">
        Buscar
      </button>
    </form>
  );
}
