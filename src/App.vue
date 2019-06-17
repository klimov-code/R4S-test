<template>
  <div id="app">
    <main class="t-main">
      <section class="t-header">
        <TableButtonGroup></TableButtonGroup>
        <TablePagination></TablePagination>
        <TableDropdownMenu></TableDropdownMenu>
      </section>
      <Table></Table>
    </main>
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

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.t-main {
  background: #fbfbfb;
  width: 100%;
  margin: 60px auto 0;
}

.t-button-group {
  display: inline-flex;
  align-items: center;
}

.t-button {
  margin: 8px;
  background: transparent;
  color: #333;
  white-space: nowrap;

  border: 1px solid #c6cbd4;
  border-radius: 2px;
}

.t-header {
  display: flex;
  height: 64px;
  justify-content: space-between;
}

@media (min-width: 576px) {
  .t-main {
    width: 540px;
  }
}

@media (min-width: 768px) {
  .t-main {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .t-main {
    width: 960px;
  }
}

@media (min-width: 1200px) {
  .t-main {
    width: 1140px;
  }
}
</style>