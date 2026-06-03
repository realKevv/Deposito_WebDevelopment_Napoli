import "./App.css";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import { Welcome } from "./components/Welcome/Welcome";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import { AlertButton } from "./components/AlertButton/AlertButton";
import { Avatar } from "./components/Avatar/Avatar";

function App() {
  const userData = { firstName: "Anna", lastName: "Rossi", role: "Developer" };
  const userSkills = ["React", "JavaScript", "CSS"];


  const handleAlert = () => {
    alert("Azione rilevata dal componente principale!");
  };


  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>

      <main id="servizi" className="services-section">
        <h2>I Nostri Servizi</h2>

        <div className="features-grid">
          <Card
            icona="🚀"
            titolo="Velocità"
            descrizione="Siti web ultra-rapidi ottimizzati con Vite e React."
          />
          <Card
            icona="🎨"
            titolo="Design Custom"
            descrizione="Interfacce moderne, pulite e pixel-perfect."
          />
          <Card
            icona="📱"
            titolo="Responsive"
            descrizione="Layout perfettamente adattabili a smartphone e tablet."
          />

         <div>
            {/* 2. ESEMPIO DI UTILIZZO: Usiamo l'Avatar vicino al benvenuto */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <Avatar size={40} /> {/* Prende l'immagine di default ed è rotondo */}
              <Welcome name="Mario" messageCount={5} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Qui passiamo un'immagine personalizzata e lo facciamo quadrato (isRound={false}) */}
              <Avatar imageUrl="https://picsum.photos/200" size={40}  />
              <Welcome name="Luigi" messageCount={0} />
            </div>
          </div>
        </div>

        <ProfileCard user={userData} skills={userSkills} />

        <ProductDisplay
          products={[
            { id: 1, name: "Prodotto A", price: 29.99 },
            { id: 2, name: "Prodotto B", price: 49.99 },
            { id: 3, name: "Prodotto C", price: 19.99 },
          ]}
        />

        <div className="control-panel">
          <AlertButton label="Avvia Processo" onAction={handleAlert} />
        </div>




        
      </main>
    </div>

    
  );
}

export default App;
