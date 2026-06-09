import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './DettaglioMeteo.css';
import { useWeatherStore } from '../store/store';

function DettaglioMeteo() {
  const { citta } = useParams();
  const navigate = useNavigate();

  // Tiriamo fuori TUTTO ciò che ci serve con una sola riga da Zustand
  const { meteo, loading, errore, fetchMeteo } = useWeatherStore();

  useEffect(() => {
    fetchMeteo(citta);
  }, [citta, fetchMeteo]);

  if (loading) {
    return <div className="meteo-container"><h2>Caricamento in corso... ⏳</h2></div>;
  }

  if (errore) {
    return (
      <div className="meteo-container">
        <h2 className="error-text">{errore}</h2>
        <button className="btn-back" onClick={() => navigate(-1)}>Torna indietro</button>
      </div>
    );
  }

  if (!meteo) return null;

 return (
    <div className="meteo-container">
      <div className="meteo-card">
        
        <h2>{meteo.name}</h2>
        
        <div className="meteo-icona-container">
          <img 
            src={`https://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`} 
            alt="Icona meteo" 
            className="icona"
          />
          <h1 className="temperatura">{Math.round(meteo.main.temp)}°C</h1>
        </div>
        
        <p className="descrizione">
          {meteo.weather[0].description.charAt(0).toUpperCase() + meteo.weather[0].description.slice(1)}
        </p>
        
        <div className="dettagli-extra">
          <div className="dettaglio">
            <span>💧 Umidità:</span>
            <strong>{meteo.main.humidity}%</strong>
          </div>
          <div className="dettaglio">
            <span>💨 Vento:</span>
            <strong>{meteo.wind.speed} m/s</strong>
          </div>
        </div>

        <button className="btn-back" onClick={() => navigate(-1)}>
          ⬅ Torna alla Home 
        </button>
      </div>
    </div>
  );
}

export default DettaglioMeteo;