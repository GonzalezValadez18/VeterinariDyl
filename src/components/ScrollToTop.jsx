import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Hacemos scroll al inicio de la página en cada cambio de ruta
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // 'instant' para que el scroll sea inmediato
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;