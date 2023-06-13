import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:5053,
    watch: {
      usePolling: true,
    },
    proxy:{
      "/api":{
        ws:true,
        changeOrigin: true,
        target: "http://localhost:5050/api/v1/",
        secure: false,
        rewrite: (path)=> path.replace(/^\/api/, "") 
      }
    },
    cors:{
      origin: "*"
    }
  },

})
