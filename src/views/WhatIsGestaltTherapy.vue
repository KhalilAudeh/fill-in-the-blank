<template>
  <div class="container p-4 p-md-5">
    <div class="row mb-4">
      <div class="col text-lowercase">
        <h1 class="georgia-title section-title d-none d-md-block">
          <strong class="colored-bracket">[ </strong
          >{{ $t("what-is-gestalt-therapy.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title section-title d-block d-md-none">
          <strong class="colored-bracket">[ </strong
          >{{ $t("what-is-gestalt-therapy.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h3>
      </div>
    </div>

    <div class="row personal-view">
      <div class="col-12 col-md-5">
        <img
          src="@/assets/dandelion-seeds.jpg"
          class="col p-3 shadow shadow-lg-lg mb-4"
        />
      </div>

      <div class="col-12 col-md-7">
        <p>{{ $t("what-is-gestalt-therapy.personal-view") }}</p>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col">
        <p>{{ $t("what-is-gestalt-therapy.intro-section") }}</p>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col text-lowercase">
        <h3 class="georgia-title d-none d-md-block">
          {{ $t("what-is-gestalt-therapy.page-title-2") }}
        </h3>
        <h4 class="georgia-title d-block d-md-none">
          {{ $t("what-is-gestalt-therapy.page-title-2") }}
        </h4>

        <br />

        <h4 class="georgia-title d-none d-md-block">
          <strong>
            {{ $t("what-is-gestalt-therapy.page-sub-title-1") }}
          </strong>
        </h4>
        <h5 class="georgia-title d-block d-md-none">
          <strong>
            {{ $t("what-is-gestalt-therapy.page-sub-title-1") }}
          </strong>
        </h5>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col">
        <p>{{ $t("what-is-gestalt-therapy.section-1") }}</p>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col text-lowercase">
        <h4 class="georgia-title d-none d-md-block">
          <strong>
            {{ $t("what-is-gestalt-therapy.page-sub-title-2") }}
          </strong>
        </h4>
        <h5 class="georgia-title d-block d-md-none">
          <strong>
            {{ $t("what-is-gestalt-therapy.page-sub-title-2") }}
          </strong>
        </h5>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col">
        <p>{{ $t("what-is-gestalt-therapy.section-2") }}</p>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col text-lowercase">
        <h4 class="georgia-title d-none d-md-block">
          <strong>
            {{ $t("what-is-gestalt-therapy.page-sub-title-3") }}
          </strong>
        </h4>
        <h5 class="georgia-title d-block d-md-none">
          <strong>
            {{ $t("what-is-gestalt-therapy.page-sub-title-3") }}
          </strong>
        </h5>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col">
        <p>{{ $t("what-is-gestalt-therapy.section-3") }}</p>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col text-lowercase">
        <h4 class="georgia-title d-none d-md-block">
          <strong>
            {{ $t("what-is-gestalt-therapy.page-sub-title-4") }}
          </strong>
        </h4>
        <h5 class="georgia-title d-block d-md-none">
          <strong>
            {{ $t("what-is-gestalt-therapy.page-sub-title-4") }}
          </strong>
        </h5>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col">
        <p v-html="section4"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatIsGestaltTherapy",

  data() {
    return {
      section4: this.$t("what-is-gestalt-therapy.section-4"),
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

.personal-view {
  font-weight: 500;
  font-style: italic;
}

h6 {
  line-height: 1.5;
}

@media all and (min-width: 768px) {
  p {
    font-size: 20px;
  }
}
</style>
