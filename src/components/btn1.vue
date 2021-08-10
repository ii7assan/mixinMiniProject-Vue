<template>
  <div>
    <v-btn @click="clicked(msg)" color="red" block class="my-3" dark
      >toggle alert</v-btn
    >
    <alert :color="color" :msg="msg" :alert="alert" />
  </div>
</template>

<script>
import alertMixin from "../mixins/alertMixin";
import alert from "./alert.vue";
export default {
  components: { alert },
  data() {
    return {};
  },
  mixins: [alertMixin],
};
</script>

<style>
</style>