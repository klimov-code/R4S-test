<template>
  <div id="app">
    <Dropdown></Dropdown>
    <Table></Table>
  </div>
</template>

<script>
import Dropdown from "./components/Dropdown";
import Table from "./components/Table";

export default {
  name: "App",
  components: {
    Dropdown,
    Table
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