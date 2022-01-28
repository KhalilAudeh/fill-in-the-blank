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

    <div class="row my-4">
      <div
        class="col-12 col-md-6 col-lg-3 text-center"
        v-for="(service, index) in services_offered_list"
        :key="index"
      >
        <h5>
          <a
            class="georgia-title text-capitalize card p-2 rounded-0"
            :href="'#' + service.title"
          >
            {{ service.title }}
          </a>
        </h5>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <img
          src="@/assets/services-offered-banner.jpg"
          class="col p-0 shadow shadow-lg-lg"
        />
      </div>
    </div>

    <br /><br />

    <div
      class="row"
      v-for="(service, index) in services_offered_list"
      :key="index"
    >
      <div class="col" :id="service.title">
        <h3 class="georgia-title d-none d-md-block text-capitalize mt-3">
          <strong> {{ index + 1 }}. {{ service.title }} </strong>
        </h3>
        <h4 class="georgia-title d-block d-md-none text-capitalize mt-3">
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

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: unset;
  background-color: white;
  border: 1px solid #a27900;
}

a:hover {
  color: white;
  background-color: #a27900;
}

@media all and (min-width: 768px) {
  p {
    font-size: 20px;
  }
}
</style>
