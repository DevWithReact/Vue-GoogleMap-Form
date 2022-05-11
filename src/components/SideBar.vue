<template>
  <div class="mb-2">
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
        <BTextInputWithValidation
          rules="required"
          type="text"
          label="Origin address:"
          name="originText"
          v-model="originText"
          description="Please input origin address"
          placeholder="e.g. Norwich, UK"
        />
        <BTextInputWithValidation
          rules="required"
          type="text"
          label="Destination address:"
          name="destinationText"
          v-model="destinationText"
          description="Please input destination address"
          placeholder="e.g. London, UK"
        />
        <BDatePickerWithValidation
          rules="required"
          type="text"
          label="Departure Date:"
          name="departureDate"
          v-model="departureDate"
          description="Please input departure date"
          placeholder=""
        />
        <BDatePickerWithValidation
          rules="required"
          type="text"
          label="Return Date:"
          name="returnDate"
          v-model="returnDate"
          description="Please input return date"
          placeholder=""
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
import BDatePickerWithValidation from "./inputs/BDatePickerWithValidation";
export default {
  components: {
    BTextInputWithValidation,
    BDatePickerWithValidation,
  },
  data() {
    return {
      originText: "",
      destinationText: "",
      departureDate: new Date(),
      returnDate: new Date(),
      originLat: "",
      originLong: "",
      destinationLat: "",
      destinationLong: "",
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
      this.originText = "";
      this.destinationText = "";
      this.departureDate = new Date();
      this.returnDate = new Date();
      this.originLat = "";
      this.originLong = "";
      this.destinationLat = "";
      this.destinationLong = "";
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