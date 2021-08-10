<template>
  <div >
    <v-btn color="success" @click="clicked(msg)" class="ma-3"
      >toggle btn two</v-btn
    >
    <Form />
    <alert :color="color" :msg="msg" :alert="alert" />
  </div>
</template>

<script>
import alertMixin from "../mixins/alertMixin";
import alert from "./alert.vue";
import Form from './form.vue';
export default {
  components: { alert, Form },
  data() {
    return {};
  },
  mixins: [alertMixin],
};
</script>

<style>
</style>