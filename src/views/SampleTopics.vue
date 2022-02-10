<template>
  <div class="container p-4 p-md-5">
    <div class="row mb-4">
      <div class="col text-lowercase">
        <h1 class="georgia-title d-none d-md-block">
          <strong class="colored-bracket">[ </strong
          >{{ $t("sample-topics.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h1>
        <h3 class="georgia-title d-block d-md-none">
          <strong class="colored-bracket">[ </strong
          >{{ $t("sample-topics.page-title")
          }}<strong class="colored-bracket"> ]</strong>
        </h3>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-12 col-md-7">
        <p v-html="$t('sample-topics.section')"></p>
      </div>

      <div class="col-12 col-md-5 m-auto">
        <img
          src="@/assets/multi-colorful-leaves.jpg"
          alt=""
          class="img-fluid shadow rounded-lg"
        />
      </div>
    </div>

    <div class="row">
      <div
        class="
          col-12
          p-4
          mb-4
          m-md-4
          shadow
          border
          rounded-lg
          topic-card
        "
        v-for="(topic, index) in topics_blocks"
        :key="index"
      >
        <h4 class="georgia-title d-none d-md-block">
          <strong>{{ topic.topic_title }}</strong>
        </h4>
        <h5 class="georgia-title d-block d-md-none">
          <strong>{{ topic.topic_title }}</strong>
        </h5>

        <br />

        <p class="topic-content">
          {{ topic.topic_content | shortText(450) }}
        </p>

        <button
          type="button"
          class="read-more-btn georgia-title btn rounded-0"
          @click="setTopicDetails(topic)"
        >
          {{ $t("general-content.read-more-btn") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SampleTopics",

  data() {
    return {
      topics_blocks: this.$t("sample-topics.topics-blocks"),
    };
  },

  mounted() {},

  methods: {
    setTopicDetails(topic) {
      this.$store.commit("SET_TOPIC_DETAILS", topic);
      this.$router.push({ path: "topic-details" });
    },
  },

  filters: {
    shortText(value, limit) {
      if (value) {
        return value.substring(0, limit);
      }
    },
  },
};
</script>

<style scoped>
p {
  white-space: break-spaces;
}

.topic-card::before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  border: 30px solid transparent;
  border-right: 30px solid #a27900;
  border-top: 30px solid #d0bc7f;
}

.topic-card:hover:before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  transition: 2s;
  border: 30px solid transparent;
  border-right: 30px solid #a27900;
  border-top: 30px solid #a27900;
}

.topic-content::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 75px;
  width: 100%;
  height: 50px;
  background: linear-gradient(transparent, white);
}

.read-more-btn {
  border: 1px solid #a27900;
}

.read-more-btn:hover {
  color: white !important;
  background-color: #a27900;
}

@media all and (min-width: 768px) {
  p {
    font-size: 20px;
  }
}
</style>
