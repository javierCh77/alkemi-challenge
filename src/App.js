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
import Favoritos from './components/Favoritos';
import { useState } from 'react';
import { useEffect } from 'react';



function App() {
///////////////////LOGICA PARA FAVORITOS //////////////////////
  const [favorites, setFavorites] = useState([]);

  useEffect(() =>{
    const favsInLocal = localStorage.getItem('favs');
    if( favsInLocal !==null ){
      const favsArray = JSON.parse(favsInLocal);
      setFavorites(favsArray);
    }
  },[]);
////////////////////////////////////////////////////////////////


  const addOrRemoveFromFavs = e =>{
    
    const favMovies = localStorage.getItem('favs');
    let tempMoviesInFavs;
     
    if (favMovies === null) {
      tempMoviesInFavs = [];
    }else{
      tempMoviesInFavs = JSON.parse(favMovies);
    }
    
    
    
    
  // capturo el boton y el padre
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    //capturo la el source del elemepto padre de la imagen
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h4').innerText;
    const overview = parent.querySelector('p').innerText;
    // construyendo el objeto literal trayendo id y los datos necesarios
    const movieData = {
      imgURL, title, overview,
      id: btn.dataset.movieId
    }
    //valido si esta repetido el elemento 
    let movieIsInArray = tempMoviesInFavs.find(oneMovie => {
     return  oneMovie.id === movieData.id
    })
    if(!movieIsInArray ) {
      //aqui inserto la nueva pelicula a favorito a mi array
      tempMoviesInFavs.push(movieData);
     localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
     setFavorites(tempMoviesInFavs);
     console.log('se agrego la pelicula')
    }else {
      let moviesLeft = tempMoviesInFavs.filter(oneMovies =>{
        return oneMovies.id !== movieData.id
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavorites(moviesLeft);
      console.log('Se elimino la pelicula')
    }
    
  }




  return (
    <>
      <Header favorites={favorites}/>
      <div className='container mt-4 p-4'> 
      <div className="row mt-4">
          <Routes>
              <Route exact path='/' Component={Login} />
              <Route path='/listado' Component={ (props) => <Listado addOrRemoveFromFavs={addOrRemoveFromFavs}{...props} /> } /> 
              <Route path='/detalle' Component={Detalle}/> 
              <Route path='/contacto' Component={Contacto}/> 
              <Route path='/resultados' Component={Resultados}/> 
              <Route path='/favoritos' Component={(props) => <Favoritos favorites={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs}{...props}/>}/> 
          </Routes>
          </div>
       </div>
      <Footer/>
   
     </>
  
  );
}

export default App;
