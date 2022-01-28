<template>
  <div class="container p-4 p-md-5">
    <div class="row mb-4">
      <div class="col text-lowercase">
        <h1 class="georgia-title section-title d-none d-md-block">
          <strong class="colored-bracket">[ </strong
          >{{ topic_details.topic_title
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title section-title d-block d-md-none">
          <strong class="colored-bracket">[ </strong
          >{{ topic_details.topic_title
          }}<strong class="colored-bracket"> ]</strong>
        </h3>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p>{{ topic_details.topic_content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicDetails",

  data() {
    return {
      topic_details: this.$store.getters.GET_TOPIC_DETAILS,
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
  p {
    font-size: 20px;
  }
}
</style>
