import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Vacunacion from './pages/services/Vacunacion'
import Desparasitacion from './pages/services/Desparasitacion'
import Estetica from './pages/services/Estetica'
import Consulta from './pages/services/Consulta'
import WhatsAppButton from './components/WhatsAppButton'
import SearchResults from './pages/SearchResults' // Importa la nueva página
import AboutMe from './pages/AboutMe'
import Blog from './pages/Blog'; // Importa el componente Blog


function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <main className="fade-in">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/vacunacion" element={<Vacunacion />} />
                      <Route
                          path="/desparasitacion"
                          element={<Desparasitacion />}
                      />
                      <Route path="/estetica" element={<Estetica />} />
                      <Route path="/consulta" element={<Consulta />} />
                      <Route path="/about-me" element={<AboutMe />} />
                      <Route path="/search" element={<SearchResults />} />{" "}
                      {/* Añade la ruta de búsqueda */}
                      <Route path="/blog" element={<Blog />} />{" "}
                      {/* Agrega la ruta para el blog */}
                  </Routes>
              </main>
              <WhatsAppButton />
              <Footer />
          </div>
      </Router>
  );
}

export default App