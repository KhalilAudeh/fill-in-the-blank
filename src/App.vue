<template>
  <div>
    <Header></Header>
    <Home></Home>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Home from "@/views/Home.vue";

export default {
  name: "App",

  components: {
    Header,
    Home
  },
};
</script>

<style>
</style>
