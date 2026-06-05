import React, { useState } from "react";

export default function Contatore() {
  const [count, setCount] = useState(0);

  const incrementa = () => {
    setCount(count + 1);
  };

  const dividi = () => {
    setCount(Math.floor(count / 2));
  };

  const isMultiploDi5 = count !== 0 && count % 5 === 0;

  return (
    <div>
      <h1>Contatore: {count}</h1>
      <button onClick={incrementa}>Incrementa</button>
      <button onClick={dividi}>Dividi</button>

      {/* Ora la variabile corrisponde a quella definita sopra */}
      {isMultiploDi5 && <div className="messaggio">è un multiplo di 5</div>}
    </div>
  );
}
