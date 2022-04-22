import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Unocss({
    //   presets: [
    //     presetUno(),
    //     presetAttributify(),
    //     presetIcons()],
    // })
    ,],
  server: {
    port: 5000,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5001/",
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
          //console.log(proxy, options);
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "@/assets/style/mian.scss";'
  //     }
  //   }
  // }
});
