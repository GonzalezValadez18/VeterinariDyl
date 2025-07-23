import React, { useEffect } from 'react'

const MapComponent = () => {
  useEffect(() => {
    // Dynamically load Leaflet
    const loadLeaflet = async () => {
      if (typeof window !== 'undefined' && !window.L) {
        // Load Leaflet CSS
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)

        // Load Leaflet JS
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.onload = initMap
        document.head.appendChild(script)
      } else if (window.L) {
        initMap()
      }
    }

    const initMap = () => {
      if (window.L && document.getElementById('map')) {
        const mapa = window.L.map("map").setView([19.297977207896675, -98.89434270424275], 16)

        window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(mapa)

        const lugares = [
          {
            nombre: "Dyl Santa Barbara",
            coords: [19.297977207896675, -98.89434270424275],
          },
        ]

        lugares.forEach((lugar) => {
          const marker = window.L.marker(lugar.coords)
            .addTo(mapa)
            .bindPopup(
              `<strong>${lugar.nombre}</strong><br><a href="#" class="abrir-maps" data-coords="${lugar.coords.join(",")}">Ver en Google Maps</a>`
            )

          marker.on("popupopen", function (e) {
            setTimeout(() => {
              const link = document.querySelector(".abrir-maps")
              if (link) {
                link.onclick = function (ev) {
                  ev.preventDefault()
                  const coords = this.getAttribute("data-coords")
                  window.open(
                    `https://www.google.com/maps/dir/?api=1&destination=${coords}`,
                    "_blank"
                  )
                }
              }
            }, 100)
          })
        })
      }
    }

    loadLeaflet()
  }, [])

  return <div id="map"></div>
}

export default MapComponent