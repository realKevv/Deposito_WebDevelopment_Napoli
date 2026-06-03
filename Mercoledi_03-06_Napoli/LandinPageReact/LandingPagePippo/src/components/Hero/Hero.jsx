export default function Hero() {
  const titolo = "Il posto di Pippo.";
  const sottoTitolo = "Ristorante pizzeria Pippo, il posto dove mangiare bene sempre.";

  return (
    <header className="hero">
      <h1>{titolo}</h1>
      <p>{sottoTitolo}</p>
      <div className="hero-buttons">
        <button className="btn-primary">Inizia Ora</button>
        <button className="btn-secondary">Scopri di più</button>
      </div>
    </header>
  );
}