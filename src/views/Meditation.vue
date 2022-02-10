<template>
  <div class="container p-4 p-md-5">
    <div class="row mb-4">
      <div class="col text-lowercase">
        <h1 class="georgia-title d-none d-md-block">
          <strong class="colored-bracket">[ </strong
          >{{ $t("meditation.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title d-block d-md-none">
          <strong class="colored-bracket">[ </strong
          >{{ $t("meditation.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h3>
      </div>
    </div>

    <div class="row mt-md-5 justify-content-center">
      <div class="col-8 col-md-4 mb-4">
        <img
          src="@/assets/meditation.jpg"
          class="col shadow shadow-lg rounded-circle"
        />
      </div>

      <div class="col-12 col-md-7 m-auto">
        <h3 class="font-italic d-none d-md-block">
          &#187; {{ $t("meditation.section") }}
        </h3>
        <h5 class="font-italic d-block d-md-none">
          &#187; {{ $t("meditation.section") }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Meditation",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
