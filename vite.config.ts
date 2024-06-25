import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest-setup.js'],
        globals: true
      },
    resolve: {
        alias: {
            "@": "/src"
        },
    },
});
