<template>
  <b-container>
    <b-button
      v-for="(button, index) of options"
      :key="index"
      @click="selectedGroupBy(button.value)"
    >{{ button.text }}</b-button>
  </b-container>
</template>

<script>
import { options } from "../constants";

export default {
  name: "TableButtonGroup",
  data() {
    return {
      groupBy: "",
      options
    };
  },
  methods: {
    selectedGroupBy(value) {
      this.groupBy = value;
    }
  }
};
</script>
