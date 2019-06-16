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
import { mapGetters, mapState } from "vuex";

export default {
  name: "Table",
  computed: {
    ...mapGetters("table", ["fields"]),
    ...mapState("table", ["currentPage", "perPage", "products"])
  },
  created() {
    this.$store.dispatch("table/fetchProducts");
  }
};
</script>
