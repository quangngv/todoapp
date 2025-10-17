import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Thư mục build mặc định
  },
  server: {
    port: 5173, // Cổng khi chạy npm run dev
  },
  // Cấu hình cần thiết để React Router hoạt động đúng khi deploy trên Netlify
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
