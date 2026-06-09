import { BrowserRouter, Routes, Route  } from "react-router-dom";


import Navbar from "./Components/Navbar/Navbar";
import ListaCitta from "./pages/ListaCitta";
import DettaglioMeteo from "./pages/DettaglioMeteo";


function App() {

  return(
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={<ListaCitta />}> </Route>

      <Route path="/meteo/:citta" element={<DettaglioMeteo/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;