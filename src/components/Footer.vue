<template>
  <div class="footer container-fluid mt-5">
    <div class="row">
      <div class="col py-4 text-center">
        <h6 class="m-0">
          &copy; Copyright
          <span class="colored-bracket h4 font-weight-bold">[</span> fill in the blank
          <span class="colored-bracket h4 font-weight-bold">]</span>
          , {{ currentYear }}.
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.footer {
  font-family: Georgia, serif;
  color: white;
  background-color: maroon;
  letter-spacing: 0.1rem;
}

@media all and (min-width: 992px) {
  .footer {
    letter-spacing: 0.2rem;
  }
}
</style>
