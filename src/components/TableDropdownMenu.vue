<template>
  <b-dropdown :text="selected.length + ' Columns selected'">
    <b-dropdown-form>
      <b-form-checkbox v-model="all" @change="toggle">{{ 'Select All' }}</b-form-checkbox>
      <b-form-checkbox-group v-model="selected" :options="options" stacked></b-form-checkbox-group>
    </b-dropdown-form>
  </b-dropdown>
</template>

<script>
export default {
  name: "TableDropdownMenu",
  data() {
    return {
      all: true,
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
    selected(newVal, oldVal) {
      if (newVal.length === 0) {
        this.all = false;
      } else if (newVal.length === this.options.length) {
        this.all = true;
      } else {
        this.all = false;
      }
    }
  },
  methods: {
    toggle(checked) {
      this.selected = checked
        ? this.options.slice().map(({ value }) => value)
        : [];
    }
  }
};
</script>
