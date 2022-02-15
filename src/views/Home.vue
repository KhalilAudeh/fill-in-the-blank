<template>
  <div class="container-fluid p-4 p-md-5">
    <div class="row">
      <div class="col text-lowercase text-center">
        <h1 class="georgia-title d-none d-md-block home-title">
          <strong class="colored-bracket">[ </strong>{{ $t("home.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title d-block d-md-none home-title">
          <strong class="colored-bracket">[ </strong>{{ $t("home.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h3>
      </div>
    </div>

    <div class="row my-5 justify-content-center">
      <div class="col-12 col-md-8">
        <img src="@/assets/brackets.jpg" class="col shadow shadow-lg-lg" />
      </div>

      <div class="col-12 mt-5">
        <div class="row">
          <div class="col p-0 bracket m-auto">&#91;</div>

          <div class="col-9 col-lg-10 p-0">
            <p v-html="$t('home.section-1')" class="px-4"></p>
          </div>

          <div class="col p-0 bracket m-auto">&#93;</div>
        </div>
      </div>
    </div>

    <div class="row my-5">
      <div class="col-12 col-md-5 m-auto">
        <img src="@/assets/emptiness-zen.jpg" class="col shadow shadow-lg-lg border" />
      </div>

      <div class="col-12 col-md-6 m-md-auto mt-5">
        <p v-html="$t('home.section-2')"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home-title {
  letter-spacing: 1rem;
}

p {
  white-space: break-spaces;
}

.bracket {
  color: #a27900;
  font-size: 7rem;
}

@media all and (min-width: 768px) {
  p {
    font-size: 20px;
  }

  .bracket {
    color: #a27900;
    font-size: 15rem;
  }
}
</style>
