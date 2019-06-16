<template>
  <b-container>
    <b-select v-model="perPage" :options="options"></b-select>
    <b-button :disabled="prevDisabled" @click="prevPage">&lsaquo;</b-button>
    <span>{{ displayedProducts }}</span>
    <b-button :disabled="nextDisabled" @click="nextPage">&rsaquo;</b-button>
  </b-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "TablePagination",
  data() {
    return {
      options: [10, 15, 20]
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
