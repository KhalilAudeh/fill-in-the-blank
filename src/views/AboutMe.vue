<template>
  <div class="container p-4 p-md-5">
    <div class="row mb-4">
      <div class="col text-lowercase">
        <h1 class="georgia-title d-none d-md-block">
          <strong class="colored-bracket">[ </strong
          >{{ $t("about-me.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title d-block d-md-none">
          <strong class="colored-bracket">[ </strong
          >{{ $t("about-me.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h3>
      </div>
    </div>

    <div class="row mt-md-4">
      <div class="col-12 col-md-6">
        <p v-html="$t('about-me.section-1')" class="font-italic"></p>
      </div>

      <div class="col-12 col-md-6">
        <div class="row justify-content-center">
          <img
            src="@/assets/orjan-profile-2.jpeg"
            class="col-8 shadow shadow-lg-lg rounded-circle border"
          />
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col">
        <h3 class="georgia-title d-none d-md-block">
          <strong>{{ $t("about-me.page-sub-title") }}</strong>
        </h3>
        <h4 class="georgia-title d-block d-md-none">
          <strong>{{ $t("about-me.page-sub-title") }}</strong>
        </h4>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12 col-md-5">
        <div class="row">
          <img src="@/assets/about-me.jpg" class="col-10 p-0 shadow shadow-lg-lg rounded mx-auto mb-5" />
          <img src="@/assets/orjan-profile-3.jpeg" class="col-10 p-0 shadow shadow-lg-lg rounded mx-auto my-5" />
        </div>
      </div>

      <div class="col-12 col-md-7 mt-4 m-md-0">
        <p v-html="$t('about-me.section-2')"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",

  data() {
    return {};
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
