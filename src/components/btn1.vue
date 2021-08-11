<template>
  <div>
    <v-btn @click="clicked()" color="red" block class="my-3" dark
      >toggle alert</v-btn
    >
    <alert
      :color="alertColor"
      :msg="message"
      :alertborder="borders"
      :alert="alert"
    />
  </div>
</template>

<script>
import alertMixin from "../mixins/alertMixin";
import alert from "./alert.vue";
export default {
  components: { alert },
  props: {
    alertColor: String,
    message: String,
    borders: String,
  },
  mixins: [alertMixin],
};
</script>

<style>
</style>