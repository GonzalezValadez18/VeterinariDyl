import React from 'react'
import MapComponent from '../../components/MapComponent'
import WhatsAppButton from '../../components/WhatsAppButton'

const Consulta = () => {
  const whatsappMessage = "Hola, buenas tardes, me gustaria agendar una consulta general para mi mascota 🐶🐱"

  return (
      <>
          {/* Banner */}
          <div className="position-relative overflow-hidden">
              <div className="d-block d-md-none w-100 of-hidden height-200">
                  <img
                      src="/assets/banner/banner-consulta.webp"
                      className="w-100 h-100"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      alt="Banner consulta veterinaria"
                  />
              </div>
              <img
                  src="/assets/banner/banner-consulta.webp"
                  className="img-fluid w-100 d-none d-md-block"
                  alt="Banner consulta veterinaria"
              />
              <div className="card bg-dark bg-opacity-50 position-absolute position-md-relative top-50 start-0 translate-middle-y text-white rounded ms-0 ms-md-0 col-12 col-md-6 text-center h-100 w-100">
                  <div className="card-body fs-3 d-flex flex-column justify-content-center align-items-center h-100">
                      <p className="card-text col-md-6 fs-1 fw-bold">
                          Consulta General
                      </p>
                  </div>
              </div>
          </div>

          {/* Information */}
          <div className="container mt-5">
              <div className="row flex-column flex-md-row align-items-center">
                  <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mb-4 mb-md-0">
                      <img
                          src="/assets/servicios/consulta.webp"
                          className="rounded-circle w-75 w-md-50"
                          alt="Consulta veterinaria"
                      />
                  </div>
                  <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center">
                      <h2 className="text-info fs-1 fw-bold">
                          Consulta General Veterinaria
                      </h2>
                      <p className="mt-3 px-3 px-md-0">
                          Evaluamos la salud de tu mascota con atención
                          personalizada para diagnosticar, tratar y prevenir
                          enfermedades. Nuestro enfoque integral garantiza el
                          bienestar de tu compañero peludo.
                      </p>
                  </div>
              </div>
          </div>

          {/* Services Included */}
          <div className="container mt-5 bg-light">
              <div className="row p-5">
                  <div className="col-12 d-flex flex-column align-items-center text-center justify-content-center m-auto">
                      <h2 className="text-info fs-1 fw-bold">
                          ¿Qué incluye una consulta general?
                      </h2>
                      <div className="row mt-4">
                          <div className="col-md-6">
                              <ul className="fs-5 text-start">
                                  <li>Examen físico completo</li>
                                  <li>Revisión de signos vitales</li>
                                  <li>
                                      Evaluación del peso y condición corporal
                                  </li>
                                  <li>Revisión de ojos, oídos y boca</li>
                              </ul>
                          </div>
                          <div className="col-md-6">
                              <ul className="fs-5 text-start">
                                  <li>Palpación abdominal</li>
                                  <li>Auscultación cardíaca y pulmonar</li>
                                  <li>Revisión de piel y pelaje</li>
                                  <li>Recomendaciones de cuidado</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* When to visit */}
          <div className="container mt-5">
              <div className="row">
                  <div className="col-12 text-center">
                      <h2 className="text-info fs-1 fw-bold">
                          ¿Cuándo traer a tu mascota?
                      </h2>
                      <div className="row mt-4 d-flex justify-content-center gap-3">
                          <div className="card" style={{ width: "18rem" }}>
                              <div className="card-body">
                                  <h5 className="card-title text-info">
                                      Chequeos Preventivos
                                  </h5>
                                  <p className="card-text">
                                      Revisiones anuales o semestrales para
                                      mantener la salud óptima
                                  </p>
                              </div>
                          </div>
                          <div className="card" style={{ width: "18rem" }}>
                              <div className="card-body">
                                  <h5 className="card-title text-info">
                                      Síntomas de Enfermedad
                                  </h5>
                                  <p className="card-text">
                                      Vómitos, diarrea, pérdida de apetito,
                                      letargo o cambios de comportamiento
                                  </p>
                              </div>
                          </div>
                          <div className="card" style={{ width: "18rem" }}>
                              <div className="card-body">
                                  <h5 className="card-title text-info">
                                      Seguimiento
                                  </h5>
                                  <p className="card-text">
                                      Control post-tratamiento o monitoreo de
                                      condiciones crónicas
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* FAQ */}
          <div className="row container col-12 m-auto mt-5">
              <h2 className="text-info fs-1 fw-bold text-center">
                  Preguntas Frecuentes
              </h2>
              <div className="d-block mt-3">
                  <div className="accordion" id="accordionFaq">
                      <div className="accordion-item">
                          <h2 className="accordion-header" id="headingfaq1">
                              <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseFaq1"
                                  aria-expanded="false"
                                  aria-controls="collapseFaq1"
                              >
                                  <strong>
                                      ¿Con qué frecuencia debo traer a mi
                                      mascota a consulta?
                                  </strong>
                              </button>
                          </h2>
                          <div
                              id="collapseFaq1"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFaq1"
                              data-bs-parent="#accordionFaq"
                          >
                              <div className="accordion-body">
                                  Se recomienda una consulta anual para mascotas
                                  jóvenes y sanas, y cada 6 meses para mascotas
                                  mayores de 7 años o con condiciones de salud
                                  específicas.
                              </div>
                          </div>
                      </div>
                      <div className="accordion-item">
                          <h2 className="accordion-header" id="headingfaq2">
                              <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseFaq2"
                                  aria-expanded="false"
                                  aria-controls="collapseFaq2"
                              >
                                  <strong>
                                      ¿Qué debo traer a la consulta?
                                  </strong>
                              </button>
                          </h2>
                          <div
                              id="collapseFaq2"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFaq2"
                              data-bs-parent="#accordionFaq"
                          >
                              <div className="accordion-body">
                                  Trae la cartilla de vacunación, cualquier
                                  medicamento que esté tomando, y una lista de
                                  preguntas o preocupaciones que tengas sobre tu
                                  mascota.
                              </div>
                          </div>
                      </div>
                      <div className="accordion-item">
                          <h2 className="accordion-header" id="headingfaq3">
                              <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseFaq3"
                                  aria-expanded="false"
                                  aria-controls="collapseFaq3"
                              >
                                  <strong>
                                      ¿Cuánto tiempo dura una consulta?
                                  </strong>
                              </button>
                          </h2>
                          <div
                              id="collapseFaq3"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFaq3"
                              data-bs-parent="#accordionFaq"
                          >
                              <div className="accordion-body">
                                  Una consulta general típica dura entre 20 a 30
                                  minutos, dependiendo de las necesidades
                                  específicas de tu mascota.
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Direction */}
          <div className="container mt-5 mb-5 bg-light text-center">
              <div className="container mt-5 p-md-5 m-auto">
                  <div className="row flex-column flex-md-row align-items-center">
                      <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center ">
                          <h2 className="text-info fs-1 fw-bold d-flex align-items-center gap-2 pt-5">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1.2em"
                                  height="1.2em"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                              >
                                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                              </svg>
                              Ubicación
                          </h2>

                          <p className="mt-3 px-3 px-md-0 fs-4 text-center">
                              Espárrago 1002, Geovillas Santa Barbara, 56535
                              Ixtapaluca, Méx.
                          </p>
                      </div>
                      <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mb-4 mb-md-0">
                          <MapComponent />
                      </div>
                  </div>
              </div>
          </div>

          <WhatsAppButton message={whatsappMessage} />
      </>
  );
}

export default Consulta