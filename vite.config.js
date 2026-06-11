import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  // Inline everything into a single self-contained index.html so the build
  // can be opened by double-clicking, with no server required.
  plugins: [react(), viteSingleFile()],
});
