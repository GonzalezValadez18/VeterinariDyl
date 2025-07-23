import React from 'react'
import MapComponent from '../../components/MapComponent'
import WhatsAppButton from '../../components/WhatsAppButton'

const Desparasitacion = () => {
  const whatsappMessage = "Hola, buenas tardes, me gustaria agendar una cita para desparasitar a mi mascota.🐶🐱💊"

  return (
      <>
          {/* Banner */}
          <div className="position-relative overflow-hidden">
              <div className="d-block d-md-none w-100 of-hidden height-200">
                  <img
                      src="/assets/banner/banner-desparacitacion.png"
                      className="w-100 h-100"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      alt="Banner desparasitacion veterinaria"
                  />
              </div>
              <img
                  src="/assets/banner/banner-desparacitacion.png"
                  className="img-fluid w-100 d-none d-md-block"
                  alt="Banner desparasitacion veterinaria"
              />
              <div className="card bg-dark bg-opacity-50 position-absolute position-md-relative top-50 start-0 translate-middle-y text-white rounded ms-0 ms-md-0 col-12 col-md-6 text-center h-100 w-100">
                  <div className="card-body fs-3 d-flex flex-column justify-content-center align-items-center h-100">
                      <p className="card-text col-md-6 fs-1 fw-bold">
                          Desparasitación
                      </p>
                  </div>
              </div>
          </div>

          {/* Information */}
          <div className="container mt-1">
              <div className="row flex-column flex-md-row align-items-center">
                  <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mb-4 mb-md-0">
                      <img
                          src="/assets/servicios/desparasitacion-1.webp"
                          className="rounded-circle w-75 w-md-50"
                          alt="Descripción de la foto"
                      />
                  </div>
                  <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center">
                      <h2 className="text-info fs-1 fw-bold">
                          Prevención frente a parásitos internos
                      </h2>
                      <p className="mt-3 px-3 px-md-0">
                          Si su mascota presenta nematodos (gusanos redondos) o
                          cestodos (gusanos planos o tenias), tu veterinario
                          hará un chequeo exhaustivo para determinar tanto la
                          especie como la gravedad de la infestación.
                      </p>
                  </div>
              </div>
          </div>

          {/* What is */}
          <div className="container mt-5 bg-light">
              <div className="row p-5">
                  <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center justify-content-center m-auto">
                      <h2 className="text-info fs-1 fw-bold">
                          ¿Qué es la desparasitación?
                      </h2>
                      <p
                          className="mt-3 px-3 px-md-0 fs-6"
                          style={{ textAlign: "justify" }}
                      >
                          Tanto los animales como los humanos pueden presentar
                          distintos tipos de parásitos internos.
                          <br />
                          <br />
                          Los principales parásitos internos que presentan
                          nuestras mascotas son los nematodos intestinales y los
                          cestodos (tenias), aunque también existen nematodos
                          pulmonares, cardiacos y oculares.
                          <br />
                          <br />
                          Las mascotas pueden contraerlos al entrar en contacto
                          con alimentos, agua, tierra, heces o roedores
                          contaminados. Además, muchos cachorros se parasitan
                          directamente a través de la leche materna.
                          <br />
                          <br />
                          Muchos de estos parásitos producen enfermedades
                          zoonósicas, lo que quiere decir que se transmiten a
                          los humanos.
                          <br />
                          <br />
                          Por todo esto, es muy importante desparasitar
                          periódicamente a nuestras mascotas con el fin de
                          prevenir las enfermedades parasitarias en ellas y en
                          nuestras familias.
                      </p>
                  </div>
              </div>
          </div>

          {/* Symptoms */}
          <div className="container mt-5">
              <div className="row flex-column flex-md-row align-items-center">
                  <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mb-4 mb-md-0">
                      <img
                          src="/assets/servicios/desparasitacion-2.webp"
                          className="w-75 w-md-50"
                          alt="Descripción de la foto"
                      />
                  </div>
                  <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center">
                      <h2 className="text-info fs-1 fw-bold">
                          ¿Cuáles son los síntomas de los parásitos internos en
                          nuestras mascotas?
                      </h2>
                      <p className="mt-3 px-3 px-md-0 fs-5">
                          Los nematodos y cestodos pueden causar:
                      </p>
                      <ul className="mt-3 px-3 px-md-0 text-start fs-6">
                          <li>Vómitos y diarreas</li>
                          <li>Pérdida de peso</li>
                          <li>Aumento del apetito</li>
                          <li>Debilidad</li>
                          <li>Dilatación abdominal</li>
                          <li>Toses y problemas respiratorios</li>
                          <li>Insuficiencia cardiaca</li>
                          <li>Conjuntivitis</li>
                      </ul>
                  </div>
              </div>
          </div>

          {/* FAQ */}
          <div className="row container col-12 m-auto mt-5">
              <h2 className="text-info fs-1 fw-bold text-center">
                  Preguntas frecuentes sobre desparasitación de mascotas
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
                                      ¿Pueden contagiarse los humanos?
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
                                  Los humanos pueden ser infestados por
                                  nemátodos y cestodos, siendo los niños los más
                                  vulnerables. Los síntomas incluyen tos,
                                  dolores de cabeza y dolor de estómago. En
                                  raras ocasiones, las larvas de nemátodos
                                  pueden infectar órganos y causar síntomas
                                  graves como fatiga y pérdida de peso.
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
                                      {" "}
                                      ¿Como puedo proteger a mi mascotas contra
                                      parasitos internos?
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
                                  La mejor forma de proteger a su mascota es con
                                  desparasitaciones periódicas y frecuentes. No
                                  dudes en consultar a tu veterinario sobre las
                                  mejores opciones de tratamiento disponibles.
                                  También debes llevar a cabo otras medidas
                                  preventivas como desinfectar regularmente los
                                  cuencos de comida y agua de tu mascota,
                                  retirar los excrementos de tu mascota,
                                  desinfectar las zonas donde defecan y lavarte
                                  bien las manos después.
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

export default Desparasitacion