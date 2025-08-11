import React, { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const togglerRef = useRef(null);
    const collapseRef = useRef(null);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCloseNavbar = () => {
        if (collapseRef.current && collapseRef.current.classList.contains('show')) {
            if (togglerRef.current) {
                togglerRef.current.click();
            }
        }
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm(""); // Limpiar campo de búsqueda
            handleCloseNavbar(); // Cerrar el menú de navegación
        }
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-ligth bg-vet-primary d-block fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand me-5" to="/">
                        <img
                            src="/assets/logo/logo-main.svg"
                            alt="Logo Veterinaria DYL"
                            width="120"
                            height="auto"
                            className="d-inline-block align-text-center"
                            onClick={handleCloseNavbar}
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        ref={togglerRef}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse "
                        id="navbarScroll"
                        ref={collapseRef}
                    >
                        <ul
                            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                            style={{ "--bs-scroll-height": "auto" }}
                        >
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${
                                        location.pathname === "/"
                                            ? "active"
                                            : ""
                                    }`}
                                    to="/"
                                    onClick={handleCloseNavbar}
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#about-me"
                                    onClick={handleCloseNavbar}
                                >
                                    Nosotros
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link active dropdown-toggle"
                                    id="navbarScrollingDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Servicios
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-dark"
                                    aria-labelledby="navbarScrollingDropdown"
                                >
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/vacunacion"
                                            onClick={handleCloseNavbar}
                                        >
                                            Vacunacion
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/desparasitacion"
                                            onClick={handleCloseNavbar}
                                        >
                                            Desparasitación
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/consulta"
                                            onClick={handleCloseNavbar}
                                        >
                                            Consulta general
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/estetica"
                                            onClick={handleCloseNavbar}
                                        >
                                            Estetica canina
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/esterilizacion"
                                            onClick={handleCloseNavbar}
                                        >
                                            Esterilización
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="https://dyl-cuidando-huellitas.blogspot.com/"
                                    onClick={handleCloseNavbar}
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={handleSearchSubmit}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Buscar servicios..."
                                aria-label="Search"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="mt-5 pt-4"></div>
        </header>
    );
};

export default Header;
