<template>
  <div>
    <v-form
      @submit.prevent="validate"
      ref="alert"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="msg"
        label="alert message"
        required
        clearable
        solo
      ></v-text-field>
      <!-- <v-text-field
        v-model="errorMsg"
        label="test2"
        :counter="20"
        :rules="errorRules"
        required
        clearable
        solo
      ></v-text-field> -->
      <v-select
        v-model="color"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="alert color"
        required
        solo
      ></v-select>
      <btn-1 />
    </v-form>
  </div>
</template>

<script>
import Btn1 from "../components/btn1.vue";
import alertMixin from "../mixins/alertMixin";
export default {
  components: {
    Btn1,
  },
  data: () => ({
    valid: true,
    // nameRules: [
    //   (v) => !!v || "Name is required",
    //   (v) => v.length <= 30 || "Name must be less than 10 characters",
    // ],
    errorMsg: "",
    errorRules: [
      (v) => !!v || "error field is required",
      (v) => v.length <= 20 || "Name must be less than 10 characters",
    ],
    select: null,
    items: ["red", "warning", "error"],
  }),
  mixins: [alertMixin],
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