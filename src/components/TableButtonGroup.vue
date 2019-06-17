<template>
  <div class="t-button-group">
    <span class="t-text-bold">Group By:</span>
    <button
      v-for="(button, index) of options"
      :key="index"
      class="t-button-grp"
      :class="{ 't-button-grp--active': button.value === groupBy }"
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
.t-button-grp {
  background-color: transparent;
  border: none;
}

.t-button-grp--active {
  border-radius: 4px;

  background: #4b74ff;
  color: #fff;
}

.t-text-bold {
  font-weight: 600;
  white-space: nowrap;
}
</style>
