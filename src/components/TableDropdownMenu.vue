<template>
  <b-dropdown :text="selectedFields.length + ' Columns selected'">
    <b-dropdown-form>
      <b-form-checkbox v-model="selectAll" @change="toggleSelectAll">{{ 'Select All' }}</b-form-checkbox>
      <b-form-checkbox-group v-model="selectedFields" :options="options" stacked></b-form-checkbox-group>
    </b-dropdown-form>
  </b-dropdown>
</template>

<script>
import { mapState } from "vuex";

import { options } from "../constants";

export default {
  name: "TableDropdownMenu",
  data() {
    return {
      selectAll: true,
      options
    };
  },
  computed: {
    selectedFields: {
      get() {
        return this.$store.state.table.selectedFields;
      },
      set(selectedFields) {
        this.$store.dispatch("table/selectedFields", { selectedFields });
      }
    }
  },
  watch: {
    selectedFields(newValue) {
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
      const selectedFields = checked
        ? this.options.slice().map(({ value }) => value)
        : [];
      this.$store.dispatch("table/selectedFields", { selectedFields });
    }
  }
};
</script>
