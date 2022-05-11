// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import BootstrapVue from "bootstrap-vue";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import datePicker from "vue-bootstrap-datetimepicker";
import "bootstrap/dist/css/bootstrap.css";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";

// Install VeeValidate rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

// Install VeeValidate components globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(datePicker);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
