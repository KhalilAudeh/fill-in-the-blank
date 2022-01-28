<template>
  <div class="container p-4 p-md-5">
    <div class="row mb-4">
      <div class="col text-lowercase">
        <h1 class="georgia-title section-title d-none d-md-block">
          <strong class="colored-bracket">[ </strong>{{ $t("prices.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title section-title d-block d-md-none">
          <strong class="colored-bracket">[ </strong>{{ $t("prices.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h3>
      </div>
    </div>

    <div class="row">
      <div class="col table-responsive">
        <!-- tr: table row -->
        <!-- td: table data -->
        <!-- th: table header -->
        <table
          class="table table-hover table-bordered"
          style="border-collapse: unset"
        >
          <thead class="thead-dark text-capitalize">
            <tr>
              <th scope="col">{{ $t("prices.column-1-title") }}</th>
              <th scope="col">{{ $t("prices.column-2-title") }}</th>
              <th scope="col">{{ $t("prices.column-3-title") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(service, index) in prices_table"
              :key="index"
              class="table-secondary"
            >
              <td>{{ service.service }}</td>
              <td>{{ service.time_allocated }}</td>
              <td v-html="service.price"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row mt-md-5">
      <div class="col">
        <h3 class="georgia-title d-none d-md-block text-capitalize">
          <strong>{{ $t("prices.page-sub-title-1") }}</strong>
        </h3>
        <h4 class="georgia-title d-block d-md-none text-capitalize">
          <strong>{{ $t("prices.page-sub-title-1") }}</strong>
        </h4>

        <br />

        <p v-html="$t('prices.section-1')"></p>
      </div>
    </div>

    <!-- <div class="row mt-5">
      <div class="col-12 col-md-7">
        <h3 class="georgia-title d-none d-md-block text-capitalize">
          <strong>{{ $t("prices.page-sub-title-2") }}</strong>
        </h3>
        <h4 class="georgia-title d-block d-md-none text-capitalize">
          <strong>{{ $t("prices.page-sub-title-2") }}</strong>
        </h4>

        <br />

        <p v-html="$t('prices.section-2')"></p>

        <ul
          v-for="(reason, index) in reasons"
          :key="index"
          class="px-3 px-md-4 mb-1"
        >
          <li>{{ reason }}</li>
        </ul>
      </div>

      <div class="col-12 col-md-5 my-5">
        <img
          src="@/assets/a-person-holding-maple-leaves.jpg"
          class="col p-4 shadow shadow-lg-lg mb-4"
        />
        <img
          src="@/assets/orjan-profile-1.jpeg"
          class="col p-4 shadow shadow-lg-lg"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Prices",

  data() {
    return {
      prices_table: this.$t("prices.prices-table"),
      reasons: this.$t("prices.break-duty-reasons"),
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
  ul li,
  table {
    font-size: 20px;
  }
}
</style>