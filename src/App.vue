<template>
  <div id="app">
    <TableButtonGroup></TableButtonGroup>
    <TableDropdownMenu></TableDropdownMenu>
    <Table></Table>
    <TablePagination></TablePagination>
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>