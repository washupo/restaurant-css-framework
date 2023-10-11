import path from "path";
import { resolve } from "path";
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/restaurant-css-framework/',
	  root: path.resolve(__dirname, 'src'),
  	resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
        menu: path.resolve(__dirname, "src/menu.html"),
        pictures: path.resolve(__dirname, "src/pictures.html"),
        contact: path.resolve(__dirname, "src/contact.html"),
        restaurants: path.resolve(__dirname, "src/restaurants.html"),
      },
    },
	server: {
    port: 8080,
    hot: true
	},
  },
})

