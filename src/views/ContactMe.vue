<template>
  <div class="container p-4 p-md-5">
    <div class="row mb-4">
      <div class="col text-lowercase">
        <h1 class="georgia-title d-none d-md-block">
          <strong class="colored-bracket">[ </strong
          >{{ $t("contact-me.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title d-block d-md-none">
          <strong class="colored-bracket">[ </strong
          >{{ $t("contact-me.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h3>
      </div>
    </div>

    <div class="row mt-md-5 justify-content-center">
      <div class="col-6 col-md-6 col-lg-3">
        <img
          src="@/assets/orjan-leaf.jpg"
          class="col p-0 shadow shadow-lg-lg rounded"
        />
      </div>

      <div class="col-12 col-md-6 col-lg-6 my-4">
        <p v-html="$t('contact-me.section')"></p>
      </div>

      <div class="col-6 col-md-6 col-lg-3">
        <img
          src="@/assets/orjan-profile-2.jpeg"
          class="col p-0 shadow shadow-lg rounded"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMe",

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

@media all and (min-width: 992px) {
  p {
    font-size: 20px;
  }
}
</style>
