import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListaCitta.css";

function ListaCitta() {
    const navigate = useNavigate();

    const [ricerca, setRicerca] = useState('');

    const cittaDisponibili = ['Milano', 'Roma', 'Pisa', 'Napoli'];

    const handleVediMeteo = (nomeCitta) => { 
        if (nomeCitta.trim() !== '') {
            navigate(`/meteo/${nomeCitta.toLowerCase()}`);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleVediMeteo(ricerca);
        }
    };

    return (
        <div className="lista-citta-container">
            <h2>Seleziona o cerca una città</h2>
            
            <div className="ricerca-container">
                <input 
                    type="text" 
                    placeholder="Digita una città..." 
                    value={ricerca}
                    onChange={(e) => setRicerca(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="input-ricerca"
                />
                <button onClick={() => handleVediMeteo(ricerca)} className="btn-ricerca">
                    Cerca
                </button>
            </div>

            <div className="cards-grid">
                {cittaDisponibili.map((citta, index) => (
                    <div className="card" key={index}>
                        <h3>{citta}</h3>
                        
                        <button onClick={() => handleVediMeteo(citta)}>
                            Vedi Meteo
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListaCitta;