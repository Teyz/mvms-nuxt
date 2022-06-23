import { defineRule } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import * as rules from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
  defineRule("required", (value) => {
    if (!value || !value.length) {
      return "Ce champ est requis";
    }
    return true;
  });
  defineRule("email", email);
  defineRule("min", min);
  defineRule("max", max);
});
