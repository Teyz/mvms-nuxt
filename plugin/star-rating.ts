import StarsRatings from "vue-star-rating";

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.vueApp.component("StarsRatings", StarsRatings);
  }
});
