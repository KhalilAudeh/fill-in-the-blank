<template>
  <div>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },
};
</script>

<style>
.georgia-title {
  font-family: Georgia, serif;
  color: maroon !important;
}

.colored-bracket {
  color: #a27900;
}
</style>
