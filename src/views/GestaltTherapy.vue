<template>
  <div class="container my-4 my-md-5">
    <div class="row mb-4 mb-md-5">
      <div class="col text-lowercase text-center">
        <h1 class="georgia-title d-none d-md-block">
          <strong class="colored-bracket">[ </strong
          >{{ $t("gestalt-therapy.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title d-block d-md-none">
          <strong class="colored-bracket">[ </strong
          >{{ $t("gestalt-therapy.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h3>
      </div>
    </div>

    <div class="row justify-content-center">
      <div
        class="col-10 col-sm-5 col-md-3 polaroid text-center mx-sm-3 mx-md-4 mb-4 mb-md-5 p-0 h-100"
        v-for="(category, index) in categories"
        :key="index"
      >
        <router-link :to="`/${category.path}`">
          <img :src="category.image" class="img-fluid" />

          <h5 class="georgia-title py-4 d-none d-md-block">
            <strong class="colored-bracket">[ </strong>{{ category.title
            }}<strong class="colored-bracket"> ]</strong>
          </h5>
          <h6 class="georgia-title py-4 d-block d-md-none">
            <strong class="colored-bracket">[ </strong>{{ category.title
            }}<strong class="colored-bracket"> ]</strong>
          </h6>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GestaltTherapy",

  data() {
    return {
      categories: this.$t("gestalt-therapy.categories"),
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.polaroid {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

a {
  text-decoration: none;
}

.polaroid:hover {
  box-shadow: 8px 8px 5px #a27900;
}

.polaroid:hover h5,
.polaroid:hover h6 {
  font-weight: 700;
}
</style>
