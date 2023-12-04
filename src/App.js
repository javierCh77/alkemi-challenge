import { Routes, Route} from 'react-router-dom';
//styles 
import './css/app.css'
// components 
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Contacto from './components/Contacto';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Header/>
      <div className='container mt-3'> 
          <Routes>
              <Route exact path='/' Component={Login}/>
              <Route path='/listado' Component={Listado}/> 
              <Route path='/contacto' Component={Contacto}/> 
          </Routes>
       </div>
      <Footer/>
   
     </>
  
  );
}

export default App;
