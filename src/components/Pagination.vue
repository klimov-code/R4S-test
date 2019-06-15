<template>
  <b-container>
    <b-select v-model="perPage" :options="options"></b-select>
    <b-button :disabled="prevDisabled" @click="prevPage">&lt;</b-button>
    <div>{{ currentPage }}</div>
    <b-button :disabled="nextDisabled" @click="nextPage">&gt;</b-button>
  </b-container>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      total: 100,
      currentPage: 1,
      perPage: 10,
      options: [10, 15, 20]
    };
  },
  computed: {
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
