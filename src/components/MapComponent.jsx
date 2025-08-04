import React, { useEffect } from "react";

const MapComponent = () => {
    useEffect(() => {
        const loadLeaflet = async () => {
            if (typeof window !== "undefined" && !window.L) {
                // Cargar CSS
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
                document.head.appendChild(link);

                // Cargar JS
                const script = document.createElement("script");
                script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
                script.onload = initMap;
                document.head.appendChild(script);
            } else if (window.L) {
                initMap();
            }
        };

        const initMap = () => {
            if (window.L && document.getElementById("map")) {
                // Coordenadas promedio entre Santa Bárbara y Hornos de Santa Bárbara
                const centro = [(19.305 + 19.315) / 2, (-98.892 + -98.88) / 2];

                const mapa = window.L.map("map").setView(centro, 14);

                window.L.tileLayer(
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    {
                        attribution: "© OpenStreetMap contributors",
                    }
                ).addTo(mapa);
            }
        };

        loadLeaflet();
    }, []);

    return (
        <div
            id="map"
            style={{
                width: "100%",
                height: "500px",
            }}
        />
    );
};

export default MapComponent;
