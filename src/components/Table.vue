<template>
  <b-table
    hover
    striped
    borderless
    table-class="t-table"
    thead-tr-class="t-table-head"
    tbody-tr-class="t-table-row"
    :items="products"
    :fields="fields"
    :current-page="currentPage"
    :per-page="perPage"
  >
    <template slot="action" slot-scope="row">
      <button class="t-button t-button-link">
        <img src="../assets/trash.svg" class="t-button-img">Delete
      </button>
    </template>
  </b-table>
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

<style>
.t-table {
  background-color: #fff;
}

.t-table td {
  padding: 0;
  vertical-align: middle;
}

.t-table thead th {
  vertical-align: middle;
}

.t-table thead th::after {
  bottom: 6px !important;
}

.t-table-head {
  border-bottom: 1px solid #ededed;
  height: 57px;
}

.t-table-row {
  height: 49px;
}

.t-table-row td {
  padding: 0 0.75em;
}

.t-table-row td:last-of-type {
  text-align: center;
}

.t-table-row:nth-of-type(even) {
  background-color: #f4f5f8 !important;
}

.t-table-row:nth-of-type(odd) {
  background-color: #fff !important;
}

.t-button-link {
  border: none !important;
  color: #e55b5b !important;
}

.t-button-img {
  position: relative;
  top: -1px;
  right: 7px;
}
</style>
