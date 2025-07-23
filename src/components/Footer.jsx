import React from "react";

const Footer = () => {
    return (
        <footer className="text-center bg-body-tertiary">
            {/* Grid container */}
            <div className="container pt-4">
                {/* Section: Social media */}
                <section className="mb-4">
                    {/* Facebook */}
                    <a
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-google"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </section>
            </div>
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                <p className="text-body">
                    {" "}
                    © 2025 Copyright: Dyl Veterinaria
                </p>
            </div>
        </footer>
    );
};

export default Footer;
