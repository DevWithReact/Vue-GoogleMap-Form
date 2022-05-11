<template>
  <div>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
        <BTextInputWithValidation
          rules="required|email"
          type="email"
          label="Origin address:"
          name="Email"
          v-model="email"
          description="Please input origin address"
          placeholder="e.g. Norwich, UK"
        />
        <BTextInputWithValidation
          rules="required|email"
          type="email"
          label="Destination address:"
          name="Email"
          v-model="email"
          description="Please input destination address"
          placeholder="e.g. London, UK"
        />
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button class="ml-2" @click="resetForm()">Reset</b-button>
      </b-form>
    </validation-observer>
  </div>
</template>

<style>
body {
  padding: 1rem;
}
</style>

<script>
import BTextInputWithValidation from "./inputs/BTextInputWithValidation";
export default {
  components: {
    BTextInputWithValidation,
  },
  data() {
    return {
      email: "",
      password: "",
      confirmation: "",
      subject: "",
      choices: [],
      foods: [
        { value: null, text: "Choose..." },
        { value: "apple", text: "Apple" },
        { value: "orange", text: "Orange" },
      ],
      form: {
        name: null,
        food: null,
      },
    };
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    resetForm() {
      this.form = {
        name: null,
        food: null,
      };

      this.$nextTick(() => {
        this.$refs.observer.reset();
      });
    },
    onSubmit() {
      alert("Form submitted!");
    },
  },
};
</script>