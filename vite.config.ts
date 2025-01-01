import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio',
  plugins: [react(), tsconfigPaths(), eslintPlugin()],
})


