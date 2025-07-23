import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <>
          {/* Banner */}
          <div className="position-relative overflow-hidden">
              <div className="d-block d-md-none w-100 of-hidden height-200">
                  <img
                      src="/assets/banner/banner-vet-3.webp"
                      className="w-100 h-100"
                      style={{ objectFit: "cover", objectPosition: "right" }}
                      alt="Banner veterinaria"
                  />
              </div>
              <img
                  src="/assets/banner/banner-vet-3.webp"
                  className="img-fluid w-100 d-none d-md-block"
                  alt="Banner veterinaria"
              />
              <div className="card bg-secondary bg-opacity-25 position-absolute position-md-relative top-50 start-0 translate-middle-y text-white rounded ms-0 ms-md-0 col-12 col-md-6 text-center h-100">
                  <div className="card-body fs-3 d-flex flex-column justify-content-center align-items-center h-100">
                      <p className="card-text col-md-6">
                          ¡Cuidamos a tus mascotas con todo el amor que se
                          merecen!
                      </p>
                      <a href="#" className="btn btn-vet text-dark w-auto">
                          Conócenos
                      </a>
                  </div>
              </div>
          </div>

          {/* About Me */}
          <div className="container mt-5" id="about-me">
              <div className="row flex-column flex-md-row align-items-center">
                  <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mb-4 mb-md-0">
                      <img
                          src="/assets/secciones/about-me.webp"
                          className="rounded-circle w-75 w-md-50"
                          alt="Descripción de la foto"
                      />
                  </div>
                  <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center">
                      <h2 className="text-info fs-1 fw-bold">Sobre mí</h2>
                      <p className="mt-3 px-3 px-md-0">
                          Veterinaria comprometida con la salud y el bienestar
                          de perros y gatos. Brindo atención médica integral con
                          enfoque preventivo, basada en la ética, la ciencia y
                          un profundo respeto por la vida animal.
                      </p>
                      <a href="#about-me" className="btn btn-vet mt-3 w-auto">
                          Leer más
                      </a>
                  </div>
              </div>
          </div>

          {/* Services */}
          <div className="row container col-12 m-auto mt-5">
              <h2 className="text-center text-info fs-1 fw-bold">Servicios</h2>
          </div>
          <div className="row container col-12 m-auto mt-5 d-flex justify-content-center gap-5">
              <div className="card" style={{ width: "18rem" }}>
                  <img
                      src="/assets/secciones/services-vacunacion.webp"
                      className="card-img-top rounded-circle"
                      alt="..."
                  />
                  <div className="card-body">
                      <h5 className="card-title">Vacunacion</h5>
                      <p className="card-text">
                          Aplicamos vacunas esenciales para prevenir
                          enfermedades y fortalecer su sistema inmunológico.
                      </p>
                      <Link to="/vacunacion" className="btn btn-vet w-auto">
                          Reservar
                      </Link>
                  </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                  <img
                      src="/assets/secciones/services-desparacitacion.webp"
                      className="card-img-top rounded-circle"
                      alt="..."
                  />
                  <div className="card-body">
                      <h5 className="card-title">Desparacitacion</h5>
                      <p className="card-text">
                          Eliminamos parásitos internos y externos para proteger
                          la salud de tu mascota y prevenir enfermedades.
                      </p>
                      <Link
                          to="/desparasitacion"
                          className="btn btn-vet w-auto"
                      >
                          Reservar
                      </Link>
                  </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                  <img
                      src="/assets/secciones/services-estetica.webp"
                      className="card-img-top rounded-circle"
                      alt="..."
                  />
                  <div className="card-body">
                      <h5 className="card-title">Estetica canina</h5>
                      <p className="card-text">
                          Ofrecemos baño, corte y cuidado estético para mantener
                          a tu perro limpio, sano y con una apariencia
                          impecable.
                      </p>
                      <Link to="/estetica" className="btn btn-vet w-auto">
                          Reservar
                      </Link>
                  </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                  <img
                      src="/assets/secciones/services-consulta.webp"
                      className="card-img-top rounded-circle"
                      alt="..."
                  />
                  <div className="card-body">
                      <h5 className="card-title">Consultas</h5>
                      <p className="card-text">
                          Evaluamos la salud de tu mascota con atención
                          personalizada para diagnosticar, tratar y prevenir
                          enfermedades.
                      </p>
                      <Link to="/consulta" className="btn btn-vet w-auto">
                          Reservar
                      </Link>
                  </div>
              </div>
          </div>

          {/* Testimonials */}
          <div className="position-relative mt-5 bg-section w-100 h-100 px-2 py-3 border-0">
              <h2 className="text-center text-info fs-1 fw-bold mb-4">
                  Testimonios
              </h2>
              <div className="d-flex flex-row flex-nowrap overflow-auto gap-4 pb-3 w-100">
                  <div
                      className="card mx-auto"
                      style={{
                          width: "18rem",
                          height: "350px",
                          flex: "0 0 auto",
                      }}
                  >
                      <div className="card-body">
                          <h2 className="card-title text-center">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="64"
                                  height="64"
                                  viewBox="0 0 24 24"
                                  fill="#2e2e35"
                              >
                                  <path d="M7.5 9c1.38 0 2.5 1.12 2.5 2.5S8.88 14 7.5 14c-.17 0-.34-.02-.5-.05.33.61.73 1.26 1.17 1.92.19.29.12.67-.16.88a.644.644 0 0 1-.88-.16C5.51 14.77 4.5 12.96 4.5 11.5 4.5 10.12 5.62 9 7 9h.5zm9 0c1.38 0 2.5 1.12 2.5 2.5S17.88 14 16.5 14c-.17 0-.34-.02-.5-.05.33.61.73 1.26 1.17 1.92.19.29.12.67-.16.88a.644.644 0 0 1-.88-.16c-1.62-2.19-2.63-4-2.63-5.46C13.5 10.12 14.62 9 16 9h.5z" />
                              </svg>
                          </h2>
                          <p className="card-text">
                              <strong>Consulta general</strong>
                          </p>
                          <p className="card-text">
                              "Siempre llevo a mi perro a consulta aquí. La
                              doctora es muy profesional y se nota que ama lo
                              que hace. ¡Total confianza!"
                          </p>
                          <p className="card-name">
                              {" "}
                              <em>Carla, dueña de Nala</em>
                          </p>
                      </div>
                  </div>
                  <div
                      className="card mx-auto"
                      style={{
                          width: "18rem",
                          height: "350px",
                          flex: "0 0 auto",
                      }}
                  >
                      <div className="card-body">
                          <h2 className="card-title text-center">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="64"
                                  height="64"
                                  viewBox="0 0 24 24"
                                  fill="#2e2e35"
                              >
                                  <path d="M7.5 9c1.38 0 2.5 1.12 2.5 2.5S8.88 14 7.5 14c-.17 0-.34-.02-.5-.05.33.61.73 1.26 1.17 1.92.19.29.12.67-.16.88a.644.644 0 0 1-.88-.16C5.51 14.77 4.5 12.96 4.5 11.5 4.5 10.12 5.62 9 7 9h.5zm9 0c1.38 0 2.5 1.12 2.5 2.5S17.88 14 16.5 14c-.17 0-.34-.02-.5-.05.33.61.73 1.26 1.17 1.92.19.29.12.67-.16.88a.644.644 0 0 1-.88-.16c-1.62-2.19-2.63-4-2.63-5.46C13.5 10.12 14.62 9 16 9h.5z" />
                              </svg>
                          </h2>
                          <p className="card-text">
                              <strong>Vacunacion</strong>
                          </p>
                          <p className="card-text">
                              "Vacuné a mi gato sin problemas. Todo rápido,
                              limpio y con la mejor atención. ¡Gracias por
                              cuidarlo tan bien!"
                          </p>
                          <p className="card-name">
                              {" "}
                              <em>Miguel, dueña de Gulin</em>
                          </p>
                      </div>
                  </div>
                  <div
                      className="card mx-auto"
                      style={{
                          width: "18rem",
                          height: "350px",
                          flex: "0 0 auto",
                      }}
                  >
                      <div className="card-body">
                          <h2 className="card-title text-center">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="64"
                                  height="64"
                                  viewBox="0 0 24 24"
                                  fill="#2e2e35"
                              >
                                  <path d="M7.5 9c1.38 0 2.5 1.12 2.5 2.5S8.88 14 7.5 14c-.17 0-.34-.02-.5-.05.33.61.73 1.26 1.17 1.92.19.29.12.67-.16.88a.644.644 0 0 1-.88-.16C5.51 14.77 4.5 12.96 4.5 11.5 4.5 10.12 5.62 9 7 9h.5zm9 0c1.38 0 2.5 1.12 2.5 2.5S17.88 14 16.5 14c-.17 0-.34-.02-.5-.05.33.61.73 1.26 1.17 1.92.19.29.12.67-.16.88a.644.644 0 0 1-.88-.16c-1.62-2.19-2.63-4-2.63-5.46C13.5 10.12 14.62 9 16 9h.5z" />
                              </svg>
                          </h2>
                          <p className="card-text">
                              <strong>Estetica Canina</strong>
                          </p>
                          <p className="card-text">
                              "Mi perrita salió hermosa después de su baño y
                              corte. ¡Hasta le pusieron un moñito! Súper
                              recomendados."
                          </p>
                          <p className="card-name">
                              {" "}
                              <em>Veronica, dueña de Pelusa</em>
                          </p>
                      </div>
                  </div>
                  <div
                      className="card mx-auto"
                      style={{
                          width: "18rem",
                          height: "350px",
                          flex: "0 0 auto",
                      }}
                  >
                      <div className="card-body">
                          <h2 className="card-title text-center">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="64"
                                  height="64"
                                  viewBox="0 0 24 24"
                                  fill="#2e2e35"
                              >
                                  <path d="M7.5 9c1.38 0 2.5 1.12 2.5 2.5S8.88 14 7.5 14c-.17 0-.34-.02-.5-.05.33.61.73 1.26 1.17 1.92.19.29.12.67-.16.88a.644.644 0 0 1-.88-.16C5.51 14.77 4.5 12.96 4.5 11.5 4.5 10.12 5.62 9 7 9h.5zm9 0c1.38 0 2.5 1.12 2.5 2.5S17.88 14 16.5 14c-.17 0-.34-.02-.5-.05.33.61.73 1.26 1.17 1.92.19.29.12.67-.16.88a.644.644 0 0 1-.88-.16c-1.62-2.19-2.63-4-2.63-5.46C13.5 10.12 14.62 9 16 9h.5z" />
                              </svg>
                          </h2>
                          <p className="card-text">
                              <strong>Desparacitacion</strong>
                          </p>
                          <p className="card-text">
                              "Desde que seguimos el plan de desparasitación, mi
                              gato está más activo y feliz. Excelente
                              orientación."
                          </p>
                          <p className="card-name">
                              {" "}
                              <em>Damian, dueño de Simba</em>
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          {/* Gallery */}
          <div className="container py-5">
              <h2 className="text-center text-info fs-1 fw-bold mb-3">
                  Mascotas Felices
              </h2>
              <p className="m-auto mt-3 px-3 py-3 px-md-0 text-center fs-5">
                  Clientes satisfechos comparten sus experiencias con nosotros.
                  Aquí están algunas de las adorables
              </p>
              <div className="carousel-wrapper">
                  <div className="carousel-track">
                      {/* Primer grupo de imágenes */}
                      <div className="carousel-item-img">
                          <img
                              src="/assets/testimonios/testimonio-1.webp"
                              alt="1"
                          />
                      </div>
                      <div className="carousel-item-img">
                          <img
                              src="/assets/testimonios/testimonio-2.webp"
                              alt="2"
                          />
                      </div>
                      <div className="carousel-item-img">
                          <img
                              src="/assets/testimonios/testimonio-3.webp"
                              alt="3"
                          />
                      </div>
                      <div className="carousel-item-img">
                          <img
                              src="/assets/testimonios/testimonio-4.webp"
                              alt="4"
                          />
                      </div>
                      <div className="carousel-item-img">
                          <img
                              src="/assets/testimonios/testimonio-5.webp"
                              alt="5"
                          />
                      </div>
                      <div className="carousel-item-img">
                          <img
                              src="/assets/testimonios/testimonio-6.webp"
                              alt="6"
                          />
                      </div>

                      {/* Duplicado para bucle infinito */}
                      <div className="carousel-item-img">
                          <img
                              src="/assets/testimonios/testimonio-1.webp"
                              alt="1"
                          />
                      </div>
                      <div className="carousel-item-img">
                          <img
                              src="/assets/testimonios/testimonio-2.webp"
                              alt="2"
                          />
                      </div>
                      <div className="carousel-item-img">
                          <img
                              src="/assets/testimonios/testimonio-3.webp"
                              alt="3"
                          />
                      </div>
                      <div className="carousel-item-img">
                          <img
                              src="/assets/testimonios/testimonio-4.webp"
                              alt="4"
                          />
                      </div>
                      <div className="carousel-item-img">
                          <img
                              src="/assets/testimonios/testimonio-5.webp"
                              alt="5"
                          />
                      </div>
                      <div className="carousel-item-img">
                          <img
                              src="/assets/testimonios/testimonio-6.webp"
                              alt="6"
                          />
                      </div>
                  </div>
              </div>
          </div>

          {/* Horary */}
          <div className="position-relative overflow-hidden mt-5">
              <div className="d-block d-md-none w-100 of-hidden height-200">
                  <img
                      src="/assets/banner/banner-horary.webp"
                      className="w-100 h-100"
                      style={{ objectFit: "cover", objectPosition: "right" }}
                      alt="Banner veterinaria"
                  />
              </div>
              <img
                  src="/assets/banner/banner-horary.webp"
                  className="img-fluid w-100 d-none d-md-block"
                  alt="Banner horarios veterinaria"
              />
              <div className="card bg-dark bg-opacity-75 position-absolute position-md-relative top-50 start-0 translate-middle-y text-white rounded ms-0 ms-md-0 col-12 col-md-6 text-center h-100 w-100">
                  <div className="card-body fs-3 d-flex flex-column justify-content-center align-items-center h-100">
                      <p className="card-text col-md-6 fs-3 fw-bold">
                          Horarios de atencion!
                      </p>
                      <p className="card-text col-md-6 fs-5">
                          Lunes a Sabado de 11:00 a 17:00 hrs
                      </p>
                      <p className="card-text col-md-6 fs-5">Domingo cerrado</p>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Home