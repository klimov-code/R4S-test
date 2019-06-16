<template>
  <b-dropdown :text="selected.length + ' Columns selected'">
    <b-dropdown-form>
      <b-form-checkbox v-model="selectAll" @change="toggleSelectAll">{{ 'Select All' }}</b-form-checkbox>
      <b-form-checkbox-group v-model="selected" :options="options" stacked></b-form-checkbox-group>
    </b-dropdown-form>
  </b-dropdown>
</template>

<script>

import { options } from "../constants";

export default {
  name: "TableDropdownMenu",
  data() {
    return {
      selectAll: true,
      options
    };
  },
  watch: {
    selected(newValue) {
      if (newValue.length === 0) {
        this.selectAll = false;
      } else if (newValue.length === this.options.length) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
    }
  },
  methods: {
    toggleSelectAll(checked) {
      this.selected = checked
        ? this.options.slice().map(({ value }) => value)
        : [];
    }
  }
};
</script>
