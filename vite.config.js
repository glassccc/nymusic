import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// root 경로를 my-webapp 폴더로 설정하지 않음 (상위 경로로부터 빌드)
export default defineConfig({
  base: '', // GitHub Pages 아니라서 base 필요 없음
  plugins: [
    react(),
    VitePWA({ registerType: 'autoUpdate' })
  ]
})
