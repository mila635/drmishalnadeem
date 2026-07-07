import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    viteReact(),
    tanstackStart({
      // Remove any Lovable-specific options
    }),
    nitro({
      preset: 'vercel'
    }),
    tsconfigPaths()
  ],
  server: {
    port: 3000
  }
});
