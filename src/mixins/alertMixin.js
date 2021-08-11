export default {
  data() {
    return {
      msg: "",
      alert: false,
      color: "",
    };
  },
  methods: {
    clicked(params) {
      this.msg = params;
      this.alert = !this.alert;
    },
  },
};
