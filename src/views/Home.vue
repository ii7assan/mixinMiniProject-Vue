<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col class="text-center text-capitalize" cols="5">
        <h2>form for btn one</h2>
        <Form />
      </v-col>
      <v-divider vertical></v-divider>
      <v-col class="text-center text-capitalize" cols="5">
        <h2>form for btn two</h2>
        <Form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Btn1 from "../components/btn1.vue";
// import Btn2 from "../components/btn2.vue";
import Form from "../components/form.vue";
export default {
  name: "Home",

  components: { Form },
};
</script>
