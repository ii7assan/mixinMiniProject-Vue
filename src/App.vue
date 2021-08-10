<template>
  <v-app :dark="goDark">
    <v-main>
      <tabs />
      <router-view />
    </v-main>
    <div class="ma-3">
      <v-switch :label="`Dark Theme`" v-model="$vuetify.theme.dark"></v-switch>
    </div>
  </v-app>
</template>

<script>
import tabs from "./components/tabs.vue";
export default {
  components: { tabs },
  name: "App",

  data: () => ({
    goDark: true,
  }),
};
</script>
