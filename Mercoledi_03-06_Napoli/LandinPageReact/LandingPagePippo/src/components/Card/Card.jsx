import "./Card.css";


export default function Card({ titolo, descrizione, icona }) {
    return (
        <div className="card-container">
            <div className="card-icon">{icona}</div>
            <h3 className= "card-title">{titolo}</h3>
            <p className="card-description"> {descrizione}</p>
        </div>
    );
};