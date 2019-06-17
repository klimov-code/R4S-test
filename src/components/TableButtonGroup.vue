<template>
  <div class="t-button-group">
    <span class="t-text-bold">Group By:</span>
    <button
      v-for="(button, index) of options"
      :key="index"
      class="t-button"
      :class="{ 't-button--active': button.value === groupBy }"
      @click="setGroupBy(button.value)"
    >{{ button.text }}</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import { options } from "../constants";

export default {
  name: "TableButtonGroup",
  data() {
    return {
      options
    };
  },
  computed: mapState("table", ["groupBy"]),
  methods: {
    setGroupBy(groupBy) {
      this.$store.dispatch("table/groupBy", { groupBy });
    }
  }
};
</script>

<style scoped>
.t-button--active {
  background: #4b74ff;
  border-radius: 4px;
  color: #fff;
}

.t-text-bold {
  font-weight: 600;
  white-space: nowrap;
}
</style>
