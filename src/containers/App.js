import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Styles from './App.css';
import About from '../components/About.jsx';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import Ciudad from '../components/Ciudad.jsx';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/find?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {

        if(recurso.count>0){
          recurso = recurso.list[0]
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            country: recurso.sys.country
          };

          var flag = true
          for (let i of cities) { 
            if (i.id === ciudad.id){ 
              flag = false; 
              alert("Ya esta esta ciudad!") 
            } 
          }
          if (flag){
            setCities(oldCities => [...oldCities, ciudad]);
          } 

        } else {
          alert("Ciudad no encontrada");
        }

        
        
      });
      
  }
   
   
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      {/* Aca invocamos a render porque le tiene que pasar props a Nav, con about NO pasa lo mismo. */}
      <Route path='/' 
      render={() => <Nav onSearch={onSearch} />} 
      /> 

      <Route 
      exact path='/'
      render={()=> <Cards cities = {cities} onClose={onClose}  />}
      />

      <Route
      exact path='/ciudad/:ciudadId'
      render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
      />

      <Route 
      path='/about' 
      component={About}
      />

      
      
    </div>
  );
}

export default App;
