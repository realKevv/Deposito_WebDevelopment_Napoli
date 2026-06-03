import { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TeamCard from "./Components/TeamCard/TeamCard";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <section>
          <h2>Incontra il nostro team!!</h2>
          <p>Sviluppatori, Grafici e Manager</p>
        </section>

        <section className="team-section">
          <TeamCard
            name="Pippo"
            role="Sviluppatore fullstack"
            bio="Pippo è un sviluppatore fullstack appassionato di tecnologia e design."
            imageUrl="https://images.pexels.com/photos/8121144/pexels-photo-8121144.jpeg?_gl=1*41weof*_ga*MTMzNTk3OTc1NC4xNzc4NzYwMjQx*_ga_8JE65Q40S6*czE3ODA0OTUwMzAkbzE4JGcxJHQxNzgwNDk1MTY4JGo1MyRsMCRoMA.."
            isPresent={true}
          ></TeamCard>
          <TeamCard
            name="Giulia"
            role="Grafica"
            bio="Giulia è una grafica appassionata di design e creatività."
            imageUrl="https://images.pexels.com/photos/8121144/pexels-photo-8121144.jpeg?_gl=1*41weof*_ga*MTMzNTk3OTc1NC4xNzc4NzYwMjQx*_ga_8JE65Q40S6*czE3ODA0OTUwMzAkbzE4JGcxJHQxNzgwNDk1MTY4JGo1MyRsMCRoMA.."
            isPresent={true}
          ></TeamCard>
          <TeamCard
            name="Luca"
            role="Manager"
            bio="Luca è un manager esperto con una vasta esperienza nella gestione di progetti."
            imageUrl="https://images.pexels.com/photos/8121144/pexels-photo-8121144.jpeg?_gl=1*41weof*_ga*MTMzNTk3OTc1NC4xNzc4NzYwMjQx*_ga_8JE65Q40S6*czE3ODA0OTUwMzAkbzE4JGcxJHQxNzgwNDk1MTY4JGo1MyRsMCRoMA.."
            isPresent={false}
          ></TeamCard>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
