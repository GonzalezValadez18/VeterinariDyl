L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
}).addTo(mapa);

// Coordenadas aproximadas de ambas colonias
const coordsSantaBarbara = [19.305, -98.892];
const coordsHornos = [19.315, -98.88];

// Cálculo del punto medio
const centro = [
    (coordsSantaBarbara[0] + coordsHornos[0]) / 2,
    (coordsSantaBarbara[1] + coordsHornos[1]) / 2,
];

// Crear el mapa centrado en el punto medio
const mapa = L.map("map").setView(centro, 14);

