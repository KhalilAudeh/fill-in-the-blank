<template>
  <div class="container p-4 p-md-5">
    <div class="row mb-4">
      <div class="col text-lowercase">
        <h1 class="georgia-title d-none d-md-block">
          <strong class="colored-bracket">[ </strong
          >{{ $t("book-session.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title d-block d-md-none">
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
        <p
          v-html="$t('book-session.section')"
          class="font-weight-bold"
        ></p>

        <ul class="px-4">
          <li>{{ $t("book-session.first-name") }}</li>
          <li>{{ $t("book-session.last-name") }}</li>
          <!-- <li>{{ $t("book-session.e-mail") }}</li> -->
          <li>{{ $t("book-session.phone") }}</li>
          <li>{{ $t("book-session.interested-service") }}</li>
          <li>{{ $t("book-session.request") }}</li>
        </ul>

        <p
          class="font-weight-bold font-italic"
        >{{ $t("book-session.note") }}</p>

      </div>
    </div>

    <!-- <div class="row mt-5 justify-content-center">
      <div class="col-12 col-md-10 col-lg-6">
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control form-control-lg" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2"
              >Example multiple select</label
            >
            <select
              multiple
              class="form-control form-control-lg"
              id="exampleFormControlSelect2"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              class="form-control form-control-lg"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    </div> -->
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
    font-size: 18px;
  }
}
</style>
