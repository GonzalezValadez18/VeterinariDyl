import React from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Importa el nuevo componente
import "./styles/animations.css"; // Importa los estilos de animación
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Vacunacion from "./pages/services/Vacunacion";
import Desparasitacion from "./pages/services/Desparasitacion";
import Estetica from "./pages/services/Estetica";
import Consulta from "./pages/services/Consulta";
import Esterilizacion from "./pages/services/Esterilizacion";
import WhatsAppButton from "./components/WhatsAppButton";
import SearchResults from "./pages/SearchResults"; // Importa la nueva página
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog"; // Importa el componente Blog

// Componente para renderizar el contenido y aplicar la animación en cada cambio de ruta
const AppContent = () => {
    const location = useLocation();
    return (
        <main className="fade-in" key={location.pathname}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vacunacion" element={<Vacunacion />} />
                <Route path="/desparasitacion" element={<Desparasitacion />} />
                <Route path="/estetica" element={<Estetica />} />
                <Route path="/consulta" element={<Consulta />} />
                <Route path="/esterilizacion" element={<Esterilizacion />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/search" element={<SearchResults />} />{" "}
                <Route path="/blog" element={<Blog />} />{" "}
            </Routes>
        </main>
    );
};

function App() {
    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                <Header />
                <AppContent />
                <WhatsAppButton />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
