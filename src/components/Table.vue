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
      <button :id="`trash-button-${row.item.id}`" class="t-button t-button-link">
        <img src="../assets/trash.svg" class="t-button-img">Delete
      </button>
      <b-popover :target="`trash-button-${row.item.id}`" placement="bottom" triggers="click">
        <p>
          Are you sure you want to
          <strong>delete item</strong>?
        </p>
        <button class="t-button t-popover-button" @click="onCancel()">Cancel</button>
        <button
          class="t-button t-popover-button t-popover-button-confirm"
          @click="onConfirm(row.item.id)"
        >Confirm</button>
      </b-popover>
    </template>
  </b-table>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "Table",
  computed: {
    ...mapGetters("table", ["fields"]),
    ...mapState("table", ["currentPage", "perPage", "products"])
  },
  methods: {
    onConfirm(id) {
      this.$store.dispatch("table/deleteProduct", { id });
      this.onCancel();
    },
    onCancel(id) {
      this.$root.$emit("bv::hide::popover");
    }
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

.t-popover {
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
}

.popover .arrow {
  visibility: hidden;
}

.t-popover-button {
  padding: 0 1rem;
  height: 32px;
  border-radius: 4px;
}

.t-popover-button-confirm {
  background: #4b74ff !important;
  color: #fff !important;
}
</style>
