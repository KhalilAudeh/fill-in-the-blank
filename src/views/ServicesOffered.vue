<template>
  <div class="container p-4 p-md-5">
    <div class="row mb-4">
      <div class="col text-lowercase">
        <h1 class="georgia-title section-title d-none d-md-block">
          <strong class="colored-bracket">[ </strong
          >{{ $t("services-offered.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title section-title d-block d-md-none">
          <strong class="colored-bracket">[ </strong
          >{{ $t("services-offered.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h3>
      </div>
    </div>

    <div class="row">
      <div class="col-12 p-0">
        <img src="@/assets/services-offered-banner.jpg" class="col p-0 shadow shadow-lg-lg" />
      </div>
    </div>

    <br /><br />

    <div
      class="row"
      v-for="(service, index) in services_offered_list"
      :key="index"
    >
      <div class="col">
        <h3 class="georgia-title d-none d-md-block">
          <strong> {{ index + 1 }}. {{ service.title }} </strong>
        </h3>
        <h4 class="georgia-title d-block d-md-none">
          <strong>{{ index + 1 }}. {{ service.title }}</strong>
        </h4>

        <br />

        <p v-html="service.section"></p>

        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesOffered",

  data() {
    return {
      services_offered_list: this.$t("services-offered.services-offered-list"),
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
p {
  white-space: break-spaces;
}

@media all and (min-width: 768px) {
  p {
    font-size: 20px;
  }
}
</style>