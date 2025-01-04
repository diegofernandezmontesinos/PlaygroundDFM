import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    include: ['**/*.test.jsx'],
    environment: 'happy-dom',
    setupFiles: './src/setupTests.js',
  },
});
