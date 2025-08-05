import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/",
    server: {
        proxy: {
          // Si haces una solicitud a /blogger-feed en tu frontend,
          // Vite la redirigirá a https://dyl-cuidando-huellitas.blogspot.com
          '/blogger-feed': {
            target: 'https://dyl-cuidando-huellitas.blogspot.com',
            changeOrigin: true, // Necesario para hosts virtuales
            rewrite: (path) => path.replace(/^\/blogger-feed/, ''), // Quita /blogger-feed de la URL final
            secure: false, // Si el target es https y tienes problemas de certificado (no suele ser necesario para Blogspot)
          }
        }
      }
});

