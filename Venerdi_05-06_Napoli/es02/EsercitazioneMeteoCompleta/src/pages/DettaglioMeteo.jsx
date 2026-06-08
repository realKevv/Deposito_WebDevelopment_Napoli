import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './DettaglioMeteo.css';

function DettaglioMeteo() {
  const { citta } = useParams();
  
  const navigate = useNavigate();

  const [meteo, setMeteo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errore, setErrore] = useState('');

  const API_KEY = '926fae33546ae3ea5f64a7a623e9f793';

  useEffect(() => {
    const fetchMeteo = async () => {
      try {
        setLoading(true);
        setErrore('');
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=${API_KEY}&units=metric&lang=it`;
        
        const response = await axios.get(url);
        
        setMeteo(response.data);
      } catch (err) {
        setErrore('Impossibile recuperare i dati. Controlla la città o aspetta che la tua API Key si attivi.');
      } finally {
        setLoading(false); 
      }
    };

    fetchMeteo();
  }, [citta]); 

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