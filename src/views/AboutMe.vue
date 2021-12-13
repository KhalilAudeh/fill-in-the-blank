<template>
  <div>
    <div class="container p-4 p-md-5">
      <div class="row mb-4">
        <div class="col text-lowercase">
          <h1 class="georgia-title section-title d-none d-md-block">
            <strong class="colored-bracket">[ </strong
            >{{ $t("about-me.page-title")
            }}<strong class="colored-bracket"> ]</strong>
          </h1>
          <h3 class="georgia-title section-title d-block d-md-none">
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

          <div class="row mt-md-3 justify-content-between">
            <img
              src="@/assets/orjan-profile-1.jpeg"
              class="col-5 shadow shadow-lg-lg rounded-circle border"
            />

            <img
              src="@/assets/orjan-profile-3.jpeg"
              class="col-5 shadow shadow-lg-lg rounded-circle border"
            />
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col">
          <p v-html="$t('about-me.section-2')"></p>
        </div>
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