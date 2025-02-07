import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
// import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/',
  server: {
    proxy: {
      '/api': {
        // '/api'로 시작하는 요청을 프록시 처리
        target: 'https://woogyeol.site', // 백엔드 서버 URL
        changeOrigin: true,
        secure: false, // HTTPS 인증서 오류 무시
      },
    },
  },
});
