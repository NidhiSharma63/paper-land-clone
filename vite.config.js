import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  // build: {
  //   outDir: "dist", // This is the default, change it to 'build' if you prefer
  // },
});

 // "dev": "vite",
    // "build": "vite build",
    // "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    // "preview": "vite preview",
    // "deploy": "gh-pages -d dist",
    // "predeploy": "npm run build"