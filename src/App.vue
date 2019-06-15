<template>
  <div id="app">
    <Dropdown></Dropdown>
    <Table></Table>
    <Pagination></Pagination>
  </div>
</template>

<script>
import Dropdown from "./components/Dropdown";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

export default {
  name: "App",
  components: {
    Dropdown,
    Table,
    Pagination
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>