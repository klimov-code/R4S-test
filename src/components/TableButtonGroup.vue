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
export default {
  name: "TableButtonGroup",
  data() {
    return {
      groupBy: "",
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
  methods: {
    selectedGroupBy(value) {
      this.groupBy = value;
    }
  }
};
</script>
