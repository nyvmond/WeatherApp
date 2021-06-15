import React from 'react';
import './About.css';

export default function About(){
    return (
        <div className="about_container" >
            <div className="about_part">
                <h3 ><b>Como usar la App</b></h3>
                <p>📌 Ingresar el nombre de una ciudad. Si hay varias ciudades con el mismo nombre, ingresar el pais del cual se desea buscar la ciudad. Ejemplo: Londres, Ar. </p>
                <p>📌 Al lado del nombre de la ciudad aparecera la bandera del pais al cual corresponda.</p>
                <p>📌 Para obtener mas datos sobre el clima hacer click en el nombre de la ciudad deseada.</p>
            </div>
            <div className="about_part">
                <h3><b>Tecnologias utilizadas</b></h3>
                <p>React - React Routing - HTML - CSS</p>
                <p><a href="https://openweathermap.org/api">API: OpenWeather</a> || <a href="https://https://www.soyhenry.com/">SoyHenry</a></p>
                <p><a href="https://www.linkedin.com/in/selva-natalia-carranza-/">Linkedin</a></p>
            </div>
        
        
        </div>
    );
}