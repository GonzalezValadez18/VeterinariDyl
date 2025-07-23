import React from 'react'

const WhatsAppButton = ({ message = "Hola, buenas tardes, me gustaria agendar una cita 🐶🐱" }) => {
  const whatsappUrl = `https://wa.me/5550673454?text=${encodeURIComponent(message)}`

  return (
    <div className="whatsapp-container">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        <i className="bi bi-whatsapp"></i>
        <span className="whatsapp-text">Agendar Ahora</span>
      </a>
    </div>
  )
}

export default WhatsAppButton