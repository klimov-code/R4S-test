<template>
  <b-table
    hover
    striped
    borderless
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
  mounted() {
    this.$store.dispatch("table/fetchProducts");
  }
};
</script>

<style scoped>
.table {
  background-color: #fff;
}
</style>
