<template>
  <div class="t-button-group">
    <select v-model="perPage" class="t-select">
      <option v-for="option of options" :key="option.value" :value="option.value">{{option.text}}</option>
    </select>
    <button :disabled="prevDisabled" @click="prevPage" class="t-button t-button-pagination">&lsaquo;</button>
    <span>{{ displayedProducts }}</span>
    <button :disabled="nextDisabled" @click="nextPage" class="t-button t-button-pagination">&rsaquo;</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "TablePagination",
  data() {
    return {
      options: [
        { value: 10, text: "10 Per Page" },
        { value: 15, text: "15 Per Page" },
        { value: 20, text: "20 Per Page" }
      ]
    };
  },
  computed: {
    displayedProducts() {
      const start = (this.currentPage - 1) * this.perPage + 1;
      const end = this.currentPage * this.perPage;

      return `${start}-${end} of ${this.productsCount}`;
    },
    prevDisabled() {
      return this.currentPage <= 1;
    },
    nextDisabled() {
      return this.currentPage >= Math.ceil(this.productsCount / this.perPage);
    },
    perPage: {
      get() {
        return this.$store.state.table.perPage;
      },
      set(perPage) {
        this.$store.dispatch("table/perPage", { perPage });
      }
    },
    ...mapState("table", ["currentPage"]),
    ...mapGetters("table", ["productsCount"])
  },
  methods: {
    ...mapActions("table", ["prevPage", "nextPage"])
  }
};
</script>

<style>
.t-select {
  width: 109px;
  height: 32px;

  background-color: transparent;
}

.t-button-pagination {
  width: 32px;
  height: 32px;
}
</style>
