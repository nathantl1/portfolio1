import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // v4!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // v4 plugin integrado
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 3030,
    open: true,
  },
});
