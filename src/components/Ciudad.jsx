import React from "react";
import './Ciudad.css';

export default function Ciudad({city}) {
    var array = [
        ["Temperatura:", city.temp + " °C"], 
        ["Minimo:", city.min +" °C" ],
        ["Maximo:", city.max +" °C"],
        ["Clima: ", city.weather],
        ["Viento: ", city.wind +" km/h"],
        ["Cantidad de nubes:", city.clouds],
        ["Latitud:", city.latitud +"º"],
        ["Longitud:", city.longitud +"º"]

    ];
    var datos = array.map(([dato, valor]) =>{
        return <div><b>{dato}</b> {valor}</div>
    })
     
    return (
        <div className="ciudad">
                <div className="container">
                    <h1 className="city">{city.name}</h1>
                    <nav className="info">
                        {datos}
                        {/* <div><b>Temperatura:</b> {city.temp} ºC</div>
                        <div><b>Minimo:</b> {city.min} ºC</div>
                        <div><b>Maximo:</b> {city.max} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div> */}
                    </nav>
            </div>
        </div>
    )
}