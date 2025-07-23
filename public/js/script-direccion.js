const mapa = L.map("map").setView([19.297977207896675, -98.89434270424275], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
}).addTo(mapa);

const lugares = [
    {
        nombre: "Dyl Santa Barbara",
        coords: [19.297977207896675, -98.89434270424275],
    },
];

lugares.forEach((lugar) => {
    const marker = L.marker(lugar.coords)
        .addTo(mapa)
        .bindPopup(
            `<strong>${
                lugar.nombre
            }</strong><br><a href="#" class="abrir-maps" data-coords="${lugar.coords.join(
                ","
            )}">Ver en Google Maps</a>`
        );

    marker.on("popupopen", function (e) {
        const popup = e.popup;
        setTimeout(() => {
            const link = document.querySelector(".abrir-maps");
            if (link) {
                link.onclick = function (ev) {
                    ev.preventDefault();
                    const coords = this.getAttribute("data-coords");
                    window.open(
                        `https://www.google.com/maps/dir/?api=1&destination=${coords}`,
                        "_blank"
                    );
                };
            }
        }, 100);
    });
});
