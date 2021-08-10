<template>
  <v-tabs  grow>
       <v-tabs-slider color="red"></v-tabs-slider>
    <v-tab  to="/">Home</v-tab>
    <v-tab  to="/About">About</v-tab>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
    };
  },
  computed: {

  },
};
</script>

<style>
</style>