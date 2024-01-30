import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate, Navigate } from "react-router-dom";

import movie from '../aseets/movie.svg'


export default function Login() {
    //para redireccionar
  
    const navigate = useNavigate();
    console.log(navigate)

    
    const submitHandler = e =>{
    //obligatorio para q no refresque la pantalla
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        //regex para validar que el input sea de tipo email
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        
        //validando que los campos no esten vacios
        if (email === '' || password === ''){
            Swal.fire({
                icon: "warning",
                title: `Oops...`,
                text: `Los campos no pueden estar vacios`,        
            });
            return;
        }
        //validando que el email sea de tipo email y no string
        if (email !== '' && !regexEmail.test(email)){
            Swal.fire({
                icon: "warning",
                title: `Oops... `,
                text: `La usuario ${email} no es un correo valido`,        
            });
            return;
        }
        
        //caso validando que sea el usuario y la clave q indico
        if (email !=='challenge@alkemy.org'|| password !=='react'){
            Swal.fire({
                         icon: "error",
                         title: "Oops... ",
                         text: `El usuario ${email}o clave no son validos`,        
            });
            return;
        }
        
        console.log("ok estamos listo para enviar la informacion");
        
        // aqui con axios cambiar el enpoint por el del backend ya sea local el host publico
        axios
            .post('https://challenge-react.alkemy.org', {email, password})
            .then(res=>{
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: `Bienvenido/a <b>${email}</b> </br>Sesión iniciada correctamente`
                  });
                console.log(res.data);
                // almacenar token en localStorage persistiendo el token cuando recibo la info de la api correcta
                const tokenRecibido = res.data.token;
                sessionStorage.setItem('token', tokenRecibido)
                //redireccion si tengo el token ok a la vista listado
                navigate('/listado')   
            })    
    }

  let token = sessionStorage.getItem('token');

  return (
  <>
    {/* validacion si tengo el token que me redireccione a listado */}
    { token && <Navigate to='/listado'/>}
    <div className='container-login '>
     <img src={movie} className='' alt=''/>
    <form className='p-4 col-12' onSubmit={submitHandler}> 
        <div className='col-12'>
        <div className=''>
           <label className='col-8 col-md-8'>
              <span>Email</span><br />
              <input className='form-control email mt-2' type='text' name='email'/><br />
           </label>
        </div>
        <div className='col-12'>
           <label className='col-8 col-md-8'>
           <span>Contraseña</span><br />
           <input className='form-control password mt-2 ' type='password' name='password'/><br />
           </label>
        </div>
        <div className='mt-4'>
             <button className='btn btn-outline-light col-4' type='submit'>Ingresar</button>
        </div> 
        
        <div className='mt-4 btn btn-outline-warning'>
          <h6>Email= challenge@alkemy.org | password= react</h6>
        </div>
        </div>
    </form>  
    </div> 
  </>
  )
}


