import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import fs from"vite-plugin-fs";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), fs()],
});
