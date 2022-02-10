<template>
  <div class="container p-4 p-md-5">
    <div class="row mb-4">
      <div class="col text-lowercase">
        <h1 class="georgia-title d-none d-md-block">
          <strong class="colored-bracket">[ </strong
          >{{ $t("practical-info.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title d-block d-md-none">
          <strong class="colored-bracket">[ </strong
          >{{ $t("practical-info.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h3>
      </div>
    </div>

    <div class="row" v-for="(info, index) in practical_info_list" :key="index">
      <div class="col">
        <h3 class="georgia-title d-none d-md-block mt-3">
          <strong> {{ index + 1 }}. {{ info.title }} </strong>
        </h3>
        <h4 class="georgia-title d-block d-md-none mt-3">
          <strong>{{ index + 1 }}. {{ info.title }}</strong>
        </h4>

        <br />

        <p v-html="info.section"></p>

        <div v-if="index === 0">
          <ul v-for="(reason, i) in reasons" :key="i" class="px-3 px-md-4 mb-1">
            <li>{{ reason }}</li>
          </ul>
        </div>

        <br />
      </div>

      <div class="col-12 col-md-5 mb-5" v-if="index === 0">
        <img
          src="@/assets/a-person-holding-maple-leaves.jpg"
          class="col p-4 shadow shadow-lg-lg mb-4"
        />
        <img
          src="@/assets/orjan-profile-1.jpeg"
          class="col p-4 shadow shadow-lg-lg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Practical Info",

  data() {
    return {
      practical_info_list: this.$t("practical-info.practical-info-list"),
      reasons: this.$t(
        "practical-info.practical-info-list[0].break-duty-reasons"
      ),
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

@media all and (min-width: 768px) {
  p,
  ul,
  li {
    font-size: 20px;
  }
}
</style>
