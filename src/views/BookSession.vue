<template>
  <div class="container p-4 p-md-5">
    <div class="row mb-4">
      <div class="col text-lowercase">
        <h1 class="georgia-title section-title d-none d-md-block">
          <strong class="colored-bracket">[ </strong
          >{{ $t("book-session.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title section-title d-block d-md-none">
          <strong class="colored-bracket">[ </strong
          >{{ $t("book-session.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h3>
      </div>
    </div>

    <div class="row mt-md-5">
      <div class="col-12 col-md-6 mb-4">
        <img
          src="@/assets/book-session-banner.jpg"
          class="col p-0 shadow shadow-lg-lg"
        />
      </div>

      <div class="col-12 col-md-6">
        <p class="font-weight-bold font-italic">
          {{ $t("book-session.section") }}
        </p>

        <ul class="px-4">
          <li>{{ $t("book-session.first-name") }}</li>
          <li>{{ $t("book-session.last-name") }}</li>
          <li>{{ $t("book-session.e-mail") }}</li>
          <li>{{ $t("book-session.phone") }}</li>
          <li>{{ $t("book-session.interested-service") }}</li>
          <li>{{ $t("book-session.request") }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookSession",

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
  p,
  ul li {
    font-size: 20px;
  }
}
</style>