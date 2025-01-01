import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  base: '/knnthdmyo.github.io/',
  plugins: [react(), tsconfigPaths()],
})
