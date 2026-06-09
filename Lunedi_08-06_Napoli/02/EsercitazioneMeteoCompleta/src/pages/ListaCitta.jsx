import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListaCitta.css";

function ListaCitta() {
    const navigate = useNavigate();

    const [ricerca, setRicerca] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');

    const cittaDisponibili = [
        'Milano', 'Roma', 'Pisa', 'Napoli', 'Torino', 'Venezia', 'Firenze', 'Bari', 'Catania', 'Palermo', 'Genova'
    ];

    const handleVediMeteo = (nomeCitta) => { 
        if (nomeCitta && nomeCitta.trim() !== '') {
            navigate(`/meteo/${nomeCitta.toLowerCase()}`);
            setShowModal(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleVediMeteo(ricerca);
        }
    };

    const openModal = (citta) => {
        setSelectedCity(citta);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCity('');
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
                    <div className="card" key={index} onClick={() => openModal(citta)}>
                        <h3>{citta}</h3>
                        <p className="card-sub">Clicca per vedere l'elenco completo</p>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Elenco città</h3>
                            <button className="modal-close" onClick={closeModal}>✕</button>
                        </div>

                        <p className="modal-selected">Hai selezionato: <strong>{selectedCity}</strong></p>

                        <div className="modal-list">
                            {cittaDisponibili.map((citta, idx) => (
                                <button key={idx} className="modal-item" onClick={() => handleVediMeteo(citta)}>
                                    {citta}
                                </button>
                            ))}
                        </div>

                        <div className="modal-actions">
                            <button className="btn-ricerca" onClick={() => handleVediMeteo(selectedCity)}>
                                Apri meteo per {selectedCity}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListaCitta;