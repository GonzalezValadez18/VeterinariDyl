import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div className="container py-5" id="about-me">
            <div className="row flex-column-reverse flex-md-row align-items-center">
                {/* Text Section */}
                <div className="col-12 col-md-6 text-center text-md-start">
                    <h2 className="text-info fs-1 fw-bold">Sobre mí</h2>
                    <p className="mt-3 fs-5">
                        Soy una Médica Veterinaria apasionada por el bienestar
                        animal, especializada en la atención de perros y gatos.
                        Mi compromiso es brindar cuidados de calidad, enfocados
                        en la prevención, el diagnóstico certero y un trato
                        empático tanto hacia los animales como hacia sus
                        cuidadores.
                    </p>
                    <p className="fs-5">
                        Egresada de la{" "}
                        <strong>
                            Universidad Autónoma del Estado de México (UAEMéx)
                        </strong>
                        , me he formado con sólidos conocimientos científicos y
                        prácticos que aplico día a día en cada consulta, cirugía
                        o programa de prevención.
                    </p>
                    <p className="fs-5">
                        A lo largo de mi experiencia profesional, he participado
                        activamente en campañas de esterilización, vacunación,
                        desparasitación y atención médica general. Además,
                        cuento con conocimientos en cirugía, oftalmología y
                        estética canina.
                    </p>
                    <p className="fs-5">
                        Mi objetivo es ser una aliada confiable para las
                        familias que buscan lo mejor para sus mascotas,
                        promoviendo siempre una medicina veterinaria ética,
                        responsable y con profundo respeto por la vida animal.
                    </p>
                </div>

                {/* Image Section */}
                <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                    <img
                        src="/assets/secciones/about-me.webp"
                        alt="Veterinaria Ingrid"
                        className="rounded-circle w-75 w-md-75 shadow"
                        style={{ objectFit: "cover", maxHeight: "400px" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;