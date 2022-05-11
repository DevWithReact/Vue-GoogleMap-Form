<template>
  <validation-provider
    :vid="vid"
    :name="$attrs.name"
    :rules="rules"
    v-slot="validationContext"
  >
    <b-form-group v-bind="$attrs">
      <date-picker v-model="innerValue" :config="options"> </date-picker>
      <b-form-invalid-feedback id="inputLiveFeedback">{{
        validationContext.errors[0]
      }}</b-form-invalid-feedback>
    </b-form-group>
  </validation-provider>
</template>

<script>
export default {
  components: {},
  props: {
    vid: {
      type: String,
    },
    rules: {
      type: [Object, String],
      default: "",
    },
    // must be included in props
    value: {
      type: null,
    },
  },
  data: () => ({
    innerValue: new Date(),
    options: {
      sideBySide: false,
    },
  }),
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  },
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      console.log("newVal", newVal);
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>
