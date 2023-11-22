import React from 'react'
import axios from 'axios'
import swal from '@sweetalert/with-react';
import { useNavigate } from "react-router-dom";

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
            swal(
            <div>
                <h2>los campos no pueden estar vacio</h2>
            </div>
            )
            return;
        }
        //validando que el email sea de tipo email y no string
        if (email !== '' && !regexEmail.test(email)){
            console.log ("debes escribir una direccion de correo valida")
            return;
        }
        
        //caso validando que sea el usuario y la clave q indico
        if (email !=='challenge@alkemy.org'|| password !=='react'){
            console.log('credenciales invalidas')
            return;
        }
        
        console.log("ok estamos listo para enviar la informacion");
        
        // aqui con axios cambiar el enpoint por el del backend ya sea local el host publico
        axios
            .post('http://challenge-react.alkemy.org', {email, password})
            .then(res=>{
                swal({
                    title: `Hola ${email}`,
                    text: "Bienvenido al wallet",
                    icon: "success",
                    button: "Aceptar",
                })
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
    <h2>Formulario de Login</h2>
    <form className='container p-4 text-center' onSubmit={submitHandler}> 
        <div >
           <label>
              <span>Email</span><br />
           <input type='text' name='email'/><br />
           </label>
        </div>
        <div>
           <label>
           <span>Contraseña</span><br />
           <input type='password' name='password'/><br />
           </label>
        </div>
        <div className='mt-4'>
             <button className='btn btn-outline-primary col-4' type='submit'>Ingresar</button>
        </div>      
    </form>
  </>
  )
}


