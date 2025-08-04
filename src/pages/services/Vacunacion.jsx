import React from "react";
import MapComponent from "../../components/MapComponent";
import WhatsAppButton from "../../components/WhatsAppButton";

const Vacunacion = () => {
    const whatsappMessage =
        "Hola, buenas tardes, me gustaria agendar una cita para vacunación🐶💉";

    return (
        <>
            {/* Banner */}
            <div className="position-relative overflow-hidden">
                <div className="d-block d-md-none w-100 of-hidden height-200">
                    <img
                        src="/assets/banner/banner-vac.webp"
                        className="w-100 h-100"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        alt="Banner veterinaria"
                    />
                </div>
                <img
                    src="/assets/banner/banner-vac.webp"
                    className="img-fluid w-100 d-none d-md-block"
                    alt="Banner horarios veterinaria"
                />
                <div className="card bg-dark bg-opacity-50 position-absolute position-md-relative top-50 start-0 translate-middle-y text-white rounded ms-0 ms-md-0 col-12 col-md-6 text-center h-100 w-100">
                    <div className="card-body fs-3 d-flex flex-column justify-content-center align-items-center h-100">
                        <p className="card-text col-md-6 fs-1 fw-bold">
                            Vacunación
                        </p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="row container col-12 m-auto mt-5">
                <h2 className="text-info fs-1 fw-bold text-center">
                    Protege la salud de tu mascota hoy mismo
                </h2>
                <p className="mt-3 px-3 px-md-0 fs-3 text-center">
                    🧠 <strong>¿Sabías que...? </strong>
                    <br />
                    👉 El 70% de las enfermedades mortales en mascotas se pueden
                    prevenir con una simple vacuna.
                </p>
                <p className="mt-3 px-3 px-md-0 fs-5 text-start">
                    Vacunar a tu mascota es una forma sencilla y efectiva de
                    proteger su salud. Las vacunas previenen enfermedades graves
                    como el moquillo, la rabia o el parvovirus. Además, muchas
                    son obligatorias para viajar o ingresar a parques. En
                    nuestra clínica aplicamos vacunas seguras, con personal
                    profesional y trato cariñoso. ¡Agenda tu cita y dale a tu
                    peludo el cuidado que merece!
                </p>
            </div>

            {/* Benefits */}
            <div className="row container col-12 m-auto mt-5">
                <h2 className="text-info fs-1 fw-bold text-center">
                    Beneficios de vacunar a tu mascota
                </h2>
                <div className="row container col-12 m-auto mt-5 d-flex justify-content-center gap-5">
                    <div className="card" style={{ width: "18rem" }}>
                        <img
                            src="/assets/servicios/vacunacion-1.webp"
                            className="card-img-top rounded-circle"
                            alt="Vacuna prevencion"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Evita enfermedades graves como rabia, moquillo,
                                parvovirus
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img
                            src="/assets/servicios/vacunacion-2.webp"
                            className="card-img-top rounded-circle"
                            alt="Vacuna estilo de vida"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Mejora la calidad y expectativa de vida
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img
                            src="/assets/servicios/vacunacion-3.webp"
                            className="card-img-top rounded-circle"
                            alt="Vacuna socializacion"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Es obligatoria para viajar o pasear en parques
                                públicos
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vaccination Table */}
            <div className="container py-5">
                <h2 className="text-info fs-1 fw-bold text-center">
                    Calendario de vacunacion
                </h2>
                <h3 className="text-info fs-2 text-start mt-3">Perros</h3>
                {/* Tabla en escritorio */}
                <div className="table-responsive d-none d-md-block">
                    <table className="table table-bordered table-hover">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">VACUNAS EN PERROS</th>
                                <th scope="col">VACUNAS EN CACHORROS</th>
                                <th scope="col">
                                    VACUNACION INICIAL EN ADULTO
                                </th>
                                <th scope="col">REVACUNACION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-info">
                                    OCTUPLE O SEXTUPLE
                                </td>
                                <td>
                                    1. DOSIS DESDE LAS 8-9 SEMANAS DE EDAD{" "}
                                    <br />
                                    2. DOSIS 11-12 SEMANAS
                                    <br />
                                    3. DOSIS 14-16 SEMANAS
                                </td>
                                <td>2 DOSIS SEPARADAS CADA 3-4 SEMANAS</td>
                                <td>ANUAL 1 DOSIS</td>
                            </tr>
                            <tr>
                                <td className="table-info">
                                    VACUNA ANTIRRABICA
                                </td>
                                <td>
                                    1. DOSIS A LOS 2 MESES <br />
                                    2. DOSIS AL AÑO DE VIDA
                                </td>
                                <td>1 DOSIS</td>
                                <td>SEGUN EL FABRICANTE CADA 1 0 3 AÑOS</td>
                            </tr>
                            <tr>
                                <td className="table-info">
                                    VACUNA VIVA BORDETELLA BRONCHISEPTICA (
                                    VACUNA KC)
                                </td>
                                <td>
                                    1. DOSIS PRESENTACION ORAL DESDE LAS 7
                                    SEMANAS DE EDAD
                                </td>
                                <td>1 DOSIS</td>
                                <td>1 VEZ AL AÑO</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Acordeón en móvil */}
                <div className="d-block d-md-none">
                    <div className="accordion" id="accordionPerros">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingPerro1">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapsePerro1"
                                    aria-expanded="false"
                                    aria-controls="collapsePerro1"
                                >
                                    OCTUPLE O SEXTUPLE
                                </button>
                            </h2>
                            <div
                                id="collapsePerro1"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingPerro1"
                                data-bs-parent="#accordionPerros"
                            >
                                <div className="accordion-body">
                                    <div>
                                        <strong>Vacunas en cachorros:</strong>{" "}
                                        1. DOSIS DESDE LAS 8-9 SEMANAS DE EDAD{" "}
                                        <br />
                                        2. DOSIS 11-12 SEMANAS
                                        <br />
                                        3. DOSIS 14-16 SEMANAS
                                    </div>
                                    <div>
                                        <strong>
                                            Vacunación inicial en adulto:
                                        </strong>{" "}
                                        2 DOSIS SEPARADAS CADA 3-4 SEMANAS
                                    </div>
                                    <div>
                                        <strong>Revacunación:</strong> ANUAL 1
                                        DOSIS
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingPerro2">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapsePerro2"
                                    aria-expanded="false"
                                    aria-controls="collapsePerro2"
                                >
                                    VACUNA ANTIRRABICA
                                </button>
                            </h2>
                            <div
                                id="collapsePerro2"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingPerro2"
                                data-bs-parent="#accordionPerros"
                            >
                                <div className="accordion-body">
                                    <div>
                                        <strong>Vacunas en cachorros:</strong>{" "}
                                        1. DOSIS A LOS 2 MESES <br />
                                        2. DOSIS AL AÑO DE VIDA
                                    </div>
                                    <div>
                                        <strong>
                                            Vacunación inicial en adulto:
                                        </strong>{" "}
                                        1 DOSIS
                                    </div>
                                    <div>
                                        <strong>Revacunación:</strong> SEGUN EL
                                        FABRICANTE CADA 1 0 3 AÑOS
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingPerro3">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapsePerro3"
                                    aria-expanded="false"
                                    aria-controls="collapsePerro3"
                                >
                                    VACUNA VIVA BORDETELLA BRONCHISEPTICA
                                    (VACUNA KC)
                                </button>
                            </h2>
                            <div
                                id="collapsePerro3"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingPerro3"
                                data-bs-parent="#accordionPerros"
                            >
                                <div className="accordion-body">
                                    <div>
                                        <strong>Vacunas en cachorros:</strong>{" "}
                                        1. DOSIS PRESENTACION ORAL DESDE LAS 7
                                        SEMANAS DE EDAD
                                    </div>
                                    <div>
                                        <strong>
                                            Vacunación inicial en adulto:
                                        </strong>{" "}
                                        1 DOSIS
                                    </div>
                                    <div>
                                        <strong>Revacunación:</strong> 1 VEZ AL
                                        AÑO
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="text-info fs-2 text-start mt-3">Gatos</h3>
                {/* Tabla en escritorio */}
                <div className="table-responsive d-none d-md-block">
                    <table className="table table-bordered table-hover">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">VACUNAS EN GATOS</th>
                                <th scope="col">VACUNAS EN GATITOS</th>
                                <th scope="col">
                                    VACUNACION (MAYOR A LAS 16 SEMANAS)
                                </th>
                                <th scope="col">REVACUNACION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-info">TRIPLE FELINA</td>
                                <td>
                                    1. DOSIS DESDE LAS 7 U 8 SEMANAS DE EDAD
                                    <br />
                                    2. DOSIS 1O-12 SEMANAS
                                    <br />
                                    3. DOSIS 13-16 SEMANAS
                                </td>
                                <td>2 DOSIS SEPARADAS CADA 2-4 SEMANAS</td>
                                <td>CADA 1 AÑO</td>
                            </tr>
                            <tr>
                                <td className="table-info">
                                    VACUNA ANTIRRABICA
                                </td>
                                <td>
                                    1. DOSIS A LOS 2 MESES <br />
                                    2. DOSIS AL AÑO DE VIDA
                                </td>
                                <td>1 DOSIS</td>
                                <td>SEGUN EL FABRICANTE CADA 1 0 3 AÑOS</td>
                            </tr>
                            <tr>
                                <td className="table-info">
                                    VACUNA DE LA LEUCEMIA(REALIZAR TEST DE
                                    LEUCEMIA ANTES DE VACUNAR)
                                </td>
                                <td>
                                    1. DOSIS A LA 8VA SEMANA DE VIDA <br />
                                    2. DOSIS 3 A 4 SEMANA
                                </td>
                                <td>2 DOSIS POR SEPARADAS POR 3-4 SEMANAS.</td>
                                <td>
                                    AL AÑO DE LA ULTIMA DOSIS VACUNAR ANUALMETE
                                    A GATOS CON ALTO RIESGO Y CADA 2-3 AÑOS A
                                    GATOS CON BAJO RIESGO.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Acordeón en móvil */}
                <div className="d-block d-md-none">
                    <div className="accordion" id="accordionGatos">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingGato1">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseGato1"
                                    aria-expanded="false"
                                    aria-controls="collapseGato1"
                                >
                                    TRIPLE FELINA
                                </button>
                            </h2>
                            <div
                                id="collapseGato1"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingGato1"
                                data-bs-parent="#accordionGatos"
                            >
                                <div className="accordion-body">
                                    <div>
                                        <strong>Vacunas en gatitos:</strong> 1.
                                        DOSIS DESDE LAS 7 U 8 SEMANAS DE EDAD
                                        <br />
                                        2. DOSIS 1O-12 SEMANAS
                                        <br />
                                        3. DOSIS 13-16 SEMANAS
                                    </div>
                                    <div>
                                        <strong>
                                            Vacunación (mayor a las 16 semanas):
                                        </strong>{" "}
                                        2 DOSIS SEPARADAS CADA 2-4 SEMANAS
                                    </div>
                                    <div>
                                        <strong>Revacunación:</strong> CADA 1
                                        AÑO
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingGato2">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseGato2"
                                    aria-expanded="false"
                                    aria-controls="collapseGato2"
                                >
                                    VACUNA ANTIRRABICA
                                </button>
                            </h2>
                            <div
                                id="collapseGato2"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingGato2"
                                data-bs-parent="#accordionGatos"
                            >
                                <div className="accordion-body">
                                    <div>
                                        <strong>Vacunas en gatitos:</strong> 1.
                                        DOSIS A LOS 2 MESES <br />
                                        2. DOSIS AL AÑO DE VIDA
                                    </div>
                                    <div>
                                        <strong>
                                            Vacunación (mayor a las 16 semanas):
                                        </strong>{" "}
                                        1 DOSIS
                                    </div>
                                    <div>
                                        <strong>Revacunación:</strong> SEGUN EL
                                        FABRICANTE CADA 1 0 3 AÑOS
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingGato3">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseGato3"
                                    aria-expanded="false"
                                    aria-controls="collapseGato3"
                                >
                                    VACUNA DE LA LEUCEMIA (REALIZAR TEST DE
                                    LEUCEMIA ANTES DE VACUNAR)
                                </button>
                            </h2>
                            <div
                                id="collapseGato3"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingGato3"
                                data-bs-parent="#accordionGatos"
                            >
                                <div className="accordion-body">
                                    <div>
                                        <strong>Vacunas en gatitos:</strong> 1.
                                        DOSIS A LA 8VA SEMANA DE VIDA <br />
                                        2. DOSIS 3 A 4 SEMANA
                                    </div>
                                    <div>
                                        <strong>
                                            Vacunación (mayor a las 16 semanas):
                                        </strong>{" "}
                                        2 DOSIS POR SEPARADAS POR 3-4 SEMANAS.
                                    </div>
                                    <div>
                                        <strong>Revacunación:</strong> AL AÑO DE
                                        LA ULTIMA DOSIS VACUNAR ANUALMETE A
                                        GATOS CON ALTO RIESGO Y CADA 2-3 AÑOS A
                                        GATOS CON BAJO RIESGO.
                                    </div>
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
                                        ¿Por qué debo vacunar a mi mascota?
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
                                    Las vacunas protegen a tu mascota de
                                    enfermedades graves y contagiosas que pueden
                                    afectar su salud y bienestar.
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
                                        ¿Es necesario vacunar a una mascota que
                                        no sale de casa?
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
                                    Sí. Aunque no salga, puede estar expuesta a
                                    virus que llegan en tu ropa o calzado.
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
                                        {" "}
                                        ¿Puedo vacunar a mi mascota si está
                                        enferma?
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
                                    No. Debe estar sana para garantizar la
                                    efectividad de la vacuna.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingfaq4">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFaq4"
                                    aria-expanded="false"
                                    aria-controls="collapseFaq4"
                                >
                                    <strong>
                                        {" "}
                                        ¿Puedo vacunar a mi mascota si está
                                        tomando algún medicamento?
                                    </strong>
                                </button>
                            </h2>
                            <div
                                id="collapseF aq4"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFaq4"
                                data-bs-parent="#accordionFaq"
                            >
                                <div className="accordion-body">
                                    Depende del caso. Es importante informar al
                                    veterinario antes de aplicar cualquier
                                    vacuna.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingfaq5">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFaq5"
                                    aria-expanded="false"
                                    aria-controls="collapseFaq5"
                                >
                                    <strong>
                                        {" "}
                                        ¿Entrega cartilla de vacunación a mi
                                        mascota?
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
                                    Si, se entrega llenado con los datos del
                                    paciente y las vacunas aplicadas, al igual
                                    que si se desparasito.
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

export default Vacunacion;
