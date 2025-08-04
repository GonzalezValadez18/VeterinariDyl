// src/pages/SearchResults.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    // Datos para la búsqueda, incluyendo servicios y otras secciones/páginas
    const searchableItems = [
        {
            id: 1,
            name: "Vacunación",
            path: "/vacunacion",
            description: "Servicio de vacunación para mascotas.",
            type: "service",
            keywords: ["vacunas", "inmunización", "prevención enfermedades"],
        },
        {
            id: 2,
            name: "Desparasitación",
            path: "/desparasitacion",
            description: "Eliminamos parásitos internos y externos.",
            type: "service",
            keywords: [
                "pulgas",
                "garrapatas",
                "gusanos",
                "tratamiento parásitos",
            ],
        },
        {
            id: 3,
            name: "Consulta general",
            path: "/consulta",
            description: "Evaluación completa de la salud de tu mascota.",
            type: "service",
            keywords: ["revisión médica", "diagnóstico", "chequeo general"],
        },
        {
            id: 4,
            name: "Estética canina",
            path: "/estetica",
            description: "Baño, corte y cuidado estético para perros.",
            type: "service",
            keywords: [
                "peluquería canina",
                "baño perro",
                "corte de pelo mascota",
                "grooming",
            ],
        },
        {
            id: "about-us",
            name: "Nosotros",
            path: "/about-me", // Asegúrate que esta ruta exista en App.jsx
            description:
                "Conoce más sobre la Veterinaria DYL, nuestra historia, misión, y el equipo de profesionales dedicados al cuidado de tu mascota.",
            type: "page",
            keywords: [
                "quienes somos",
                "historia dyl",
                "equipo veterinario",
                "mision",
                "vision",
                "acerca de",
                "sobre mi",
            ],
        },
        {
            id: "appointments",
            name: "Agendar Citas",
            path: "/#date", // Esto apunta a un ancla en la página de inicio. Si tienes una página /citas, cámbialo.
            description:
                "Agenda una cita para tu mascota de forma fácil y rápida. Ofrecemos citas para consultas, vacunación, estética y más.",
            type: "info",
            keywords: [
                "reservar cita",
                "pedir hora",
                "calendario veterinario",
                "programar visita",
                "ubicacion",
            ],
        },
        {
            id: "esterilization",
            name: "Esterilización",
            path: "/esterilizacion", // Esto apunta a un ancla en la página de inicio. Si tienes una página /citas, cámbialo.
            description:
                "La esterilización es una de las decisiones más importantes que puedes tomar por la salud y bienestar de tu mascota.",
            type: "info",
            keywords: [
                "esterilización",
                "castración",
                "prevención enfermedades",
                "control de población animal",
                "beneficios esterilización",    
                "beneficios esterilización mascota",
                "esteril"
            ],
        },
        // Agrega más items aquí para otras secciones de tu página
        // Ejemplo:
        // {
        //     id: "home-contact",
        //     name: "Contacto",
        //     path: "/#contact-section", // Suponiendo un ancla en la home
        //     description: "Información de contacto, ubicación y horarios de atención.",
        //     type: "info",
        //     keywords: ["teléfono", "dirección", "mapa", "horarios", "email"]
        // }
    ];

    const normalizeText = (text) => {
        if (!text) return "";
        return text
            .toLowerCase()
            .normalize("NFD") // Separa los caracteres base de los diacríticos (acentos)
            .replace(/[\u0300-\u036f]/g, ""); // Elimina los diacríticos
    };

    useEffect(() => {
        if (query) {
            setLoading(true);
            const normalizedQuery = normalizeText(query);
            // Filtra los items basándose en el nombre, descripción y palabras clave
            const filteredResults = searchableItems.filter(
                (item) =>
                    normalizeText(item.name).includes(normalizedQuery) ||
                    normalizeText(item.description).includes(normalizedQuery) ||
                    (item.keywords &&
                        item.keywords.some((keyword) =>
                            normalizeText(keyword).includes(normalizedQuery)
                        ))
            );
            setResults(filteredResults);
            setLoading(false);
        } else {
            setResults([]);
            setLoading(false);
        }
    }, [query]); // searchableItems es constante dentro del componente, no necesita ser dependencia aquí.

    if (loading) {
        return (
            <div className="container mt-5 pt-5">
                <p>Cargando resultados...</p>
            </div>
        );
    }

    return (
        <div className="container mt-5 pt-5 mb-5">
            <h1 className="mb-4">Resultados de búsqueda para: "{query}"</h1>
            {results.length > 0 ? (
                <div className="list-group">
                    {results.map((result) => (
                        <Link
                            key={result.id}
                            to={result.path}
                            className="list-group-item list-group-item-action"
                        >
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{result.name}</h5>
                                {result.type && (
                                    <small className="text-muted">
                                        {result.type === "service"
                                            ? "Servicio"
                                            : "Página"}
                                    </small>
                                )}
                            </div>
                            <p className="mb-1">{result.description}</p>
                        </Link>
                    ))}
                </div>
            ) : (
                <p>
                    No se encontraron resultados para "{query}". Intenta con
                    otro término.
                </p>
            )}
        </div>
    );
};

export default SearchResults;
