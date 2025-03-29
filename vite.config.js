import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"


export default defineConfig({
  server: {
    proxy: {
      "/api": "http://192.168.1.4:3000",
    },
    port: 5173,
  },
  plugins: [react()],
});
