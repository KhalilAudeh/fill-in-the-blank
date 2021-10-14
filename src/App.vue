<template>
  <div>
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",

  components: {
    Header,
  },
};
</script>

<style>
.georgia-title {
  font-family: Georgia, serif;
  color: #041b40;
}

.colored-bracket {
  color: orange;
}
</style>
