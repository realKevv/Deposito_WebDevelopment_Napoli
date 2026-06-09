import { create } from 'zustand';
import axios from 'axios';

// Creiamo lo store e lo esportiamo
export const useWeatherStore = create((set) => ({
  meteo: null,
  loading: true,
  errore: '',

  fetchMeteo: async (citta) => {
    set({ loading: true, errore: '', meteo: null });
    
    const API_KEY = '926fae33546ae3ea5f64a7a623e9f793';
    
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=${API_KEY}&units=metric&lang=it`;
      const response = await axios.get(url);
      
      // Successo! Salviamo i dati
            console.log(response.data);
      set({ meteo: response.data, loading: false });
    } catch (err) {
      set({ 
        errore: 'Impossibile recuperare i dati. Controlla la città o aspetta che la tua API Key si attivi.', 
        loading: false 
      });
    }
  }
}));