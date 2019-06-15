<template>
  <b-container>
    <b-select v-model="perPage" :options="options"></b-select>
    <b-button :disabled="prevDisabled" @click="prevPage">&lsaquo;</b-button>
    <div>{{ displayedProducts }}</div>
    <b-button :disabled="nextDisabled" @click="nextPage">&rsaquo;</b-button>
  </b-container>
</template>

<script>
export default {
  name: "TablePagination",
  data() {
    return {
      total: 100,
      currentPage: 1,
      perPage: 10,
      options: [10, 15, 20]
    };
  },
  computed: {
    displayedProducts() {
      const start = (this.currentPage - 1) * this.perPage + 1;
      const end = this.currentPage * this.perPage;

      return `${start}-${end} of ${this.total}`;
    },
    prevDisabled() {
      return this.currentPage <= 1;
    },
    nextDisabled() {
      return this.currentPage >= Math.ceil(this.total / this.perPage);
    }
  },
  methods: {
    nextPage() {
      this.currentPage += 1;
    },
    prevPage() {
      this.currentPage -= 1;
    }
  }
};
</script>
