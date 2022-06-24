import { defineNuxtConfig } from "nuxt";
const path = require("path");

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase", "@nuxtjs/robots"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/_global.scss";',
        },
      },
    },
  },
  plugins: [
    { src: "~/plugin/aos", mode: "client", ssr: false },
    { src: "~/plugin/star-rating", mode: "client", ssr: false },
    { src: "~/plugin/veevalidate-components", mode: "client", ssr: false },
    { src: "~/plugin/veevalidate-rules", mode: "client", ssr: false },
  ],
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(__dirname, "src") + "/$1",
      },
    ],
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      },
    },
  },
  app: {
    head: {
      meta: [
        {
          name: "title",
          content: "NFTERS - Discover, and collect Digital Art NFTs",
        },
        {
          name: "description",
          content:
            "NFTERS is a NFT marketplace powered by Ethereum. Join us and upload / buy your first NFT.",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "NFTERS - Discover, and collect Digital Art NFTs",
        },
        {
          name: "description",
          property: "og:description",
          content:
            "NFTERS is a NFT marketplace powered by Ethereum. Join us and upload / buy your first NFT.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/static/favicon.ico" },
      ],
    },
  },
});
