<template>
  <v-alert
    class="ma-5"
    :value="alert"
    :color="color"
    dark
    :border="alertborder"
    icon="mdi-home"
    transition="scale-transition"
  >
    {{ msg }}
  </v-alert>
</template>

<script>
export default {
  props: {
    msg: String,
    alert: Boolean,
    color: String,
    alertborder: String,
  },
};
</script>

<style>
</style>