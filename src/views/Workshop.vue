<template>
  <div class="container p-4 p-md-5">
    <div class="row mb-4">
      <div class="col text-lowercase">
        <h1 class="georgia-title section-title d-none d-md-block">
          <strong class="colored-bracket">[ </strong
          >{{ $t("workshop.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title section-title d-block d-md-none">
          <strong class="colored-bracket">[ </strong
          >{{ $t("workshop.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h3>
      </div>
    </div>

    <div class="row mt-md-5">
      <div class="col-12 col-md-6 mb-4">
        <img
          src="@/assets/trees-for-autumn-colour.jpg"
          class="col p-0 shadow shadow-lg rounded"
        />
      </div>

      <div class="col-12 col-md-6 m-auto">
        <h4 class="font-italic d-none d-md-block">
          &#187; {{ $t("workshop.section") }}
        </h4>
        <h5 class="font-italic d-block d-md-none">
          &#187; {{ $t("workshop.section") }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Workshop",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>