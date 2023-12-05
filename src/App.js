import { Routes, Route} from 'react-router-dom';
//styles 
import './css/app.css'
// components 
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Detalle from './components/Detalle'
import Resultados from './components/Resultados';



function App() {
  return (
    <>
      <Header/>
      <div className='container'> 
      <div className="row">
          <Routes>
              <Route exact path='/' Component={Login}/>
              <Route path='/listado' Component={Listado}/> 
              <Route path='/detalle' Component={Detalle}/> 
              <Route path='/contacto' Component={Contacto}/> 
              <Route path='/resultados' Component={Resultados}/> 
          </Routes>
          </div>
       </div>
      <Footer/>
   
     </>
  
  );
}

export default App;
