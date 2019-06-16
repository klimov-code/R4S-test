<template>
  <b-button-group>
    <b-button
      v-for="(button, index) of options"
      :key="index"
      @click="groupBy(button.value)"
    >{{ button.text }}</b-button>
  </b-button-group>
</template>

<script>
import { mapActions } from "vuex";

import { options } from "../constants";

export default {
  name: "TableButtonGroup",
  data() {
    return {
      options
    };
  },
  methods: {
    groupBy(groupBy) {
      this.$store.dispatch("table/groupBy", { groupBy });
    }
  }
};
</script>
