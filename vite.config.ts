import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
// import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/',
  define: {
    'process.env': process.env,
    VITE_API_URL: process.env.VITE_API_URL,
    VITE_JAVASCRIPT_KEY: process.env.VITE_JAVASCRIPT_KEY,
    VITE_KAKAO_KEY: process.env.VITE_JAVASCRIPT_KEY,
    VITE_TOKEN: process.env.VITE_TOKEN,
    VITE_K_REST_API_KEY: process.env.VITE_K_REST_API_KEY,
    VITE_NAVER_CLIENT_ID: process.env.VITE_NAVER_CLIENT_ID,
  },
});
