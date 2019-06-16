<template>
  <b-dropdown :text="selected.length + ' Columns selected'">
    <b-dropdown-form>
      <b-form-checkbox v-model="selectAll" @change="toggleSelectAll">{{ 'Select All' }}</b-form-checkbox>
      <b-form-checkbox-group v-model="selected" :options="options" stacked></b-form-checkbox-group>
    </b-dropdown-form>
  </b-dropdown>
</template>

<script>
export default {
  name: "TableDropdownMenu",
  data() {
    return {
      selectAll: true,
      selected: ["product", "calories", "fat", "carbs", "protein", "iron"],
      options: [
        { text: "Dessert (100g serving)", value: "product" },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ]
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
