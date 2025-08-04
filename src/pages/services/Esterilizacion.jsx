import React from "react";
import MapComponent from "../../components/MapComponent";
import WhatsAppButton from "../../components/WhatsAppButton";

const Esterilizacion = () => {
    const whatsappMessage =
        "Hola, buenas tardes, me gustaría agendar una cita para esterilización de mi mascota. 🐶🐱";

    return (
        <>
            {/* Banner */}
            <div className="position-relative overflow-hidden">
                <div className="d-block d-md-none w-100 of-hidden height-200">
                    <img
                        src="/assets/banner/banner-esterilizacion.webp"
                        className="w-100 h-100"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        alt="Banner esterilización veterinaria"
                    />
                </div>
                <img
                    src="/assets/banner/banner-esterilizacion.webp"
                    className="img-fluid w-100 d-none d-md-block"
                    alt="Banner esterilización veterinaria"
                />
                <div className="card bg-dark bg-opacity-50 position-absolute position-md-relative top-50 start-0 translate-middle-y text-white rounded ms-0 ms-md-0 col-12 col-md-6 text-center h-100 w-100">
                    <div className="card-body fs-3 d-flex flex-column justify-content-center align-items-center h-100">
                        <p className="card-text col-md-6 fs-1 fw-bold">
                            Esterilización
                        </p>
                    </div>
                </div>
            </div>

            {/* Information */}
            <div className="container mt-5">
                <div className="row flex-column flex-md-row align-items-center">
                    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mb-4 mb-md-0">
                        <img
                            src="/assets/servicios/esterilizacion-3.webp"
                            className="w-75 w-md-50"
                            alt="Perro y gato juntos"
                        />
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center">
                        <h2 className="text-info fs-1 fw-bold">
                            Un Acto de Amor y Responsabilidad
                        </h2>
                        <p className="mt-3 px-3 px-md-0">
                            La esterilización es una de las decisiones más
                            importantes que puedes tomar por la salud y
                            bienestar de tu mascota. No solo ayuda a controlar
                            la sobrepoblación animal, sino que también previene
                            enfermedades graves y mejora su comportamiento.
                        </p>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="container mt-5 bg-light">
                <div className="row p-5">
                    <div className="col-12 text-center">
                        <h2 className="text-info fs-1 fw-bold mb-5">
                            Beneficios de la Esterilización
                        </h2>
                        <div className="row d-flex justify-content-center gap-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    src="/assets/servicios/esterilizacion-2.webp"
                                    className="card-img-top rounded-circle p-3"
                                    alt="Prevención de enfermedades"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-info">
                                        Prevención de Enfermedades
                                    </h5>
                                    <p className="card-text">
                                        Reduce el riesgo de cáncer de mama,
                                        útero, ovarios y testículos, así como
                                        infecciones uterinas (piómetra).
                                    </p>
                                </div>
                            </div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    src="/assets/servicios/esterilizacion-1.webp"
                                    className="card-img-top rounded-circle p-3"
                                    alt="Mejora del comportamiento"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-info">
                                        Mejora del Comportamiento
                                    </h5>
                                    <p className="card-text">
                                        Disminuye la agresividad, el marcaje con
                                        orina, las fugas en busca de pareja y el
                                        comportamiento de monta.
                                    </p>
                                </div>
                            </div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    src="/assets/servicios/esterilizacion-4.webp"
                                    className="card-img-top rounded-circle p-3"
                                    alt="Control de sobrepoblación"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-info">
                                        Control de Sobrepoblación
                                    </h5>
                                    <p className="card-text">
                                        Evita camadas no deseadas, contribuyendo
                                        a reducir el número de animales
                                        abandonados en las calles.
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
                            <h2 className="accordion-header" id="headingFaq1">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFaq1"
                                    aria-expanded="false"
                                    aria-controls="collapseFaq1"
                                >
                                    <strong>
                                        ¿Mi mascota cambiará su personalidad o
                                        se volverá perezosa?
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
                                    No, la esterilización no cambia la
                                    personalidad de tu mascota. Puede que notes
                                    una disminución en comportamientos ligados a
                                    las hormonas (como marcaje o agresividad),
                                    pero su carácter seguirá intacto. El aumento
                                    de peso se controla con una dieta adecuada y
                                    ejercicio, no es un efecto directo de la
                                    cirugía.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFaq2">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFaq2"
                                    aria-expanded="false"
                                    aria-controls="collapseFaq2"
                                >
                                    <strong>
                                        ¿La cirugía de esterilización es
                                        peligrosa?
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
                                    Es una de las cirugías más comunes y seguras
                                    en veterinaria. Como en cualquier
                                    procedimiento, existe un riesgo mínimo, pero
                                    utilizamos anestesia moderna y monitoreo
                                    constante para garantizar la máxima
                                    seguridad de tu mascota.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFaq3">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFaq3"
                                    aria-expanded="false"
                                    aria-controls="collapseFaq3"
                                >
                                    <strong>
                                        ¿Mi mascota sufrirá mucho dolor después
                                        de la operación?
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
                                    Manejamos el dolor de forma proactiva. Tu
                                    mascota recibirá analgésicos antes, durante
                                    y después de la cirugía. Te daremos
                                    medicación e indicaciones claras para que su
                                    recuperación en casa sea lo más cómoda
                                    posible.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFaq4">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFaq4"
                                    aria-expanded="false"
                                    aria-controls="collapseFaq4"
                                >
                                    <strong>
                                        ¿Cuál es la mejor edad para esterilizar?
                                    </strong>
                                </button>
                            </h2>
                            <div
                                id="collapseFaq4"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFaq4"
                                data-bs-parent="#accordionFaq"
                            >
                                <div className="accordion-body">
                                    Generalmente, se recomienda antes del primer
                                    celo (alrededor de los 6 meses). Sin
                                    embargo, el momento ideal puede variar según
                                    la raza y tamaño. Lo mejor es consultarnos
                                    para determinar el momento más adecuado para
                                    tu compañero.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFaq5">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFaq5"
                                    aria-expanded="false"
                                    aria-controls="collapseFaq5"
                                >
                                    <strong>
                                        ¿Qué cuidados necesitará mi mascota
                                        después de la cirugía?
                                    </strong>
                                </button>
                            </h2>
                            <div
                                id="collapseFaq5"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFaq5"
                                data-bs-parent="#accordionFaq"
                            >
                                <div className="accordion-body">
                                    La recuperación es rápida. Los cuidados
                                    principales son: restringir el ejercicio
                                    intenso por 7-10 días, evitar que se lama la
                                    herida (con un collar isabelino si es
                                    necesario) y administrar la medicación que
                                    te indiquemos. Te daremos todas las
                                    instrucciones detalladas.
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
                                Hornos de Santa Barbara y Geovillas Santa
                                Barbara, 56535 Ixtapaluca, Méx.
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
};

export default Esterilizacion;
