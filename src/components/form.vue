<template>
  <div>
    <v-form
      @submit.prevent="validate"
      ref="alert"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="form_msg"
        label="alert message"
        required
        clearable
        solo
      ></v-text-field>
      <v-select
        v-model="selectedColor"
        :items="alertColor"
        :rules="[(v) => !!v || 'Color is required']"
        label="alert color"
        required
        solo
      ></v-select>
      <v-select
        v-model="selectedBorder"
        :items="alertBorder"
        :rules="[(v) => !!v || 'border is required']"
        label="alert border"
        required
        solo
      ></v-select>
      <btn-1
        :alertColor="selectedColor"
        :message="form_msg"
        :borders="selectedBorder"
        :alertBorders="selectedBorder"
      />
    </v-form>
  </div>
</template>

<script>
import Btn1 from "../components/btn1.vue";
export default {
  components: {
    Btn1,
  },
  data: () => ({
    valid: true,
    form_msg: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 30 || "Name must be less than 10 characters",
    ],
    errorMsg: "",
    errorRules: [
      (v) => !!v || "error field is required",
      (v) => v.length <= 20 || "Name must be less than 10 characters",
    ],
    selectedColor: null,
    alertColor: ["success", "warning", "error", "info"],
    alertBorder: ["left", "right", "top", "bottom"],
    selectedBorder: null,
  }),
  methods: {
    validate() {
      this.$refs.alert.validate();
      this.$refs.alert.reset();
    },
    reset() {
      this.$refs.alert.reset();
    },
  },
};
</script>

<style>
</style>