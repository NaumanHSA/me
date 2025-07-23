import { defineConfig } from 'vite';

const my_repo = "/me/"
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? my_repo : '/',
});