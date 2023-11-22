import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


import './login.css'



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
            .post('http://challenge-react.alkemy.org', {email, password})
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
                localStorage.setItem('token', tokenRecibido)
                //redireccion si tengo el token ok a la vista listado
                navigate('/listado')
              
            })
            
    }


  return (
  <>
    <div className='container-fluid container-main'>
    <form className='p-4 ' onSubmit={submitHandler}> 
        <div className='container-form text-center'>
        <div className=''>
           <label>
              <span>Email</span><br />
           <input className='form-control email mt-2' type='text' name='email'/><br />
           </label>
        </div>
        <div className=''>
           <label>
           <span>Contraseña</span><br />
           <input className='form-control password mt-2' type='password' name='password'/><br />
           </label>
        </div>
        <div className='mt-4'>
             <button className='btn btn-outline-light col-8' type='submit'>Ingresar</button>
        </div> 
        </div>
    </form>
         <div className='container d-flex '>
            <div className='container-a'>
                  <span className="loader"></span>
            </div>
            <div className='container-b'>
                 <h3 >Impulsamos <br/>tu dinero <br/> hasta el <br/> Espacio</h3>
                
            </div>
            </div>
    
    </div>
    
 
    
  </>
  )
}


