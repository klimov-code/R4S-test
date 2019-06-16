<template>
  <div id="app">
    <section class="header">
      <TableButtonGroup></TableButtonGroup>
      <TablePagination></TablePagination>
      <TableDropdownMenu></TableDropdownMenu>
    </section>
    <Table></Table>
  </div>
</template>

<script>
import Table from "./components/Table";
import TableButtonGroup from "./components/TableButtonGroup";
import TableDropdownMenu from "./components/TableDropdownMenu";
import TablePagination from "./components/TablePagination";

export default {
  name: "App",
  components: {
    Table,
    TableButtonGroup,
    TableDropdownMenu,
    TablePagination
  }
};
</script>

<style>
#app {
  font-family: apple-system, "Source Sans Pro", sans-serif;
  font-size: 14px;
  line-height: 24px;

  width: 100%;
  background: #fbfbfb;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
}

.button-group {
  display: inline-flex;
  align-items: center;
}

.header {
  display: flex;
  height: 64px;
  justify-content: space-between;
}

@media (min-width: 576px) {
  #app {
    width: 540px;
  }
}

@media (min-width: 768px) {
  #app {
    width: 720px;
  }
}
@media (min-width: 992px) {
  #app {
    width: 960px;
  }
}

@media (min-width: 1200px) {
  #app {
    width: 1140px;
  }
}
</style>