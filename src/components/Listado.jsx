import React ,{ useEffect} from 'react'
import { useNavigate } from "react-router-dom";



export default function Listado() {
  // el navigate para navegar
  const navigate = useNavigate();
  // ago use efect para la instancia
  useEffect(() => {  
        const token = localStorage.getItem('token')
  
        if (token === null){
            navigate('/');
        }
  },[]);

  
  return (
    <div>
      Listado
    </div>
  )

  }

