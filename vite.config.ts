import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/DropoutDetection/",
  optimizeDeps: {
    include: ['pdfjs-dist/build/pdf.worker.min.mjs'],

  },
});
