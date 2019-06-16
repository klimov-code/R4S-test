<template>
  <b-table
    responsive
    bordered
    hover
    striped
    :items="products"
    :fields="fields"
    :current-page="currentPage"
    :per-page="perPage"
  ></b-table>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Table",
  data() {
    return {
      fields: [
        {
          key: "product",
          label: "Dessert (100g serving)",
          sortable: true
        },
        {
          key: "calories",
          label: "Calories",
          sortable: true
        },
        {
          key: "fat",
          label: "Fat (g)",
          sortable: true
        },
        {
          key: "carbs",
          label: "Carbs (g)",
          sortable: true
        },
        {
          key: "protein",
          label: "Protein (g)",
          sortable: true
        },
        {
          key: "iron",
          label: "Iron (%)",
          sortable: true
        }
      ]
    };
  },
  computed: {
    ...mapState("table", ["currentPage", "perPage", "products"])
  },
  created() {
    this.$store.dispatch("table/fetchProducts");
  }
};
</script>
