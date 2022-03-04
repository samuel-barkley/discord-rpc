import { defineConfig } from "vite";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  base: path.resolve(__dirname, "./dist/")
});
