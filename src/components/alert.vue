<template>
    <v-alert
      class="ma-5"
      :value="alert"
      :color="color"
      dark
      border="left"
      icon="mdi-home"
      transition="scale-transition"
    >
      {{ this.msg }}
    </v-alert>
</template>

<script>
export default {
props: {
    msg: String,
    alert: Boolean,
    color: String
}
}
</script>

<style>

</style>