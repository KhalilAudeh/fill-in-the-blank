<template>
  <div>
    <nav>
      <!--FOR WEB USE HEADER LOGO-->
      <label class="d-none d-lg-inline-block logo-title-web"
        ><strong style="font-size: 30px;">[</strong> fill in the blank
        <strong style="font-size: 30px;">]</strong></label
      >

      <!--FOR MOBILE USE HEADER LOGO WITH ICON-->
      <label for="drop" class="toggle">
        <div class="logo-title-mobile">
          <strong style="font-size: 25px;">[</strong> fill in the blank
          <strong style="font-size: 25px;">]</strong>
        </div>
        <i class="fa fa-bars" aria-hidden="true"></i>
      </label>

      <input type="checkbox" id="drop" />

      <ul class="nav text-lowercase">
        <li @click="closeSideMenu">
          <router-link :to="`/`">{{ $t("headings.heading-1") }}</router-link>
        </li>

        <li>
          <label for="drop-2" class="toggle">
            <p>
              {{ $t("headings.heading-2") }} &nbsp;&nbsp;
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </p>
          </label>

          <router-link :to="`/gestalt-therapy`"
            ><p>
              {{ $t("headings.heading-2") }}&nbsp;&nbsp;
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </p>
          </router-link>

          <input type="checkbox" id="drop-2" />

          <ul>
            <!-- <li @click="closeSideMenu">
              <router-link :to="`/gestalt-therapy`" class="d-md-none sub-title"
                >{{ $t("headings.heading-2") }}
              </router-link>
            </li> -->

            <li @click="closeSideMenu">
              <router-link :to="`/why-gestalt-therapy`" class="sub-title">{{
                $t("gestalt-sub-headings.sub-heading-1")
              }}</router-link>
            </li>

            <li @click="closeSideMenu">
              <router-link :to="`/services-offered`" class="sub-title">{{
                $t("gestalt-sub-headings.sub-heading-2")
              }}</router-link>
            </li>

            <li @click="closeSideMenu">
              <router-link :to="`/book-session`" class="sub-title">{{
                $t("gestalt-sub-headings.sub-heading-3")
              }}</router-link>
            </li>

            <li @click="closeSideMenu">
              <router-link :to="`/prices`" class="sub-title">{{
                $t("gestalt-sub-headings.sub-heading-4")
              }}</router-link>
            </li>

            <li @click="closeSideMenu">
              <router-link :to="`/practical-info`" class="sub-title">{{
                $t("gestalt-sub-headings.sub-heading-5")
              }}</router-link>
            </li>

            <li @click="closeSideMenu">
              <router-link :to="`/sample-topics`" class="sub-title">{{
                $t("gestalt-sub-headings.sub-heading-6")
              }}</router-link>
            </li>

            <li @click="closeSideMenu">
              <router-link :to="`/workshop`" class="sub-title">{{
                $t("gestalt-sub-headings.sub-heading-8")
              }}</router-link>
            </li>
          </ul>
        </li>

        <li @click="closeSideMenu">
          <router-link :to="`/about-me`">{{
            $t("headings.heading-3")
          }}</router-link>
        </li>

        <li @click="closeSideMenu">
          <router-link :to="`/meditation`">{{
            $t("headings.heading-4")
          }}</router-link>
        </li>

        <li @click="closeSideMenu">
          <router-link :to="`/contact-me`">{{
            $t("headings.heading-5")
          }}</router-link>
        </li>

        <!-- <LanguageSwitcher></LanguageSwitcher> -->
      </ul>
    </nav>
  </div>
</template>

<script>
// import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

export default {
  name: "Header",

  // components: {
  //   LanguageSwitcher,
  // },

  methods: {
    closeSideMenu() {
      if (window.innerWidth <= 992) {
        document.getElementById("drop").checked = false;
        document.getElementById("drop-2").checked = false;
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.toggle,
#drop,
#drop-2 {
  display: none;
}

nav {
  margin: 0;
  padding: 0;
  background-color: maroon;
  font-family: Georgia, serif;
}

nav:after {
  content: "";
  display: table;
  clear: both;
}

nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
  float: right;
  position: relative;
}

nav ul li {
  margin: 0;
  display: inline-block;
  float: left;
  background-color: maroon;
}

nav a,
.logo-title-web {
  display: block;
  padding: 20px 25px;
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  line-height: 35px;
}

nav ul li ul li:hover {
  background-color: #a27900;
}

.icon {
  float: right;
}

.toggle p {
  font-weight: 600;
  padding: 5px 0;
  margin-left: 5px;
}

nav a:hover {
  color: #ffffff;
  background-color: #a27900;
}

nav ul ul {
  display: none;
  position: absolute;
  top: 75px;
  z-index: 1000;
}

nav ul li:hover > ul {
  display: inherit;
}

nav ul ul li {
  position: relative;
  display: list-item;
  float: none;
  width: 200px;
}

.logo-title-web {
  font-size: 25px;
  padding: 15px 25px;
}

.logo-title-web {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.1em solid #a27900; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 15s steps(50, end), blink-caret 2s step-end;
  animation-iteration-count: infinite;
  animation-delay: 3s;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 25%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #a27900;
  }
}

.sub-title {
  font-size: 15px;
}

@media all and (max-width: 992px) {
  nav {
    margin: 0;
  }

  .toggle + a,
  .nav {
    display: none;
  }

  .toggle {
    display: block;
    text-decoration: none;
    border: none;
    padding: 15px 20px;
    font-size: 20px;
    background-color: maroon;
    color: #ffffff;
  }

  .toggle:hover {
    background-color: #a27900;
  }

  .toggle i {
    float: right;
    font-size: 30px;
    margin-top: 5px;
  }

  #drop:checked + ul,
  #drop-2:checked + ul {
    display: block;
  }

  nav ul li {
    display: block;
    width: 100%;
  }

  nav ul ul .toggle,
  nav ul ul a {
    padding: 0 40px;
  }

  nav a:hover {
    background-color: #a27900;
  }

  nav ul li ul li .toggle,
  nav ul ul a {
    padding: 15px 20px;
    font-size: 15px;
    color: #ffffff;
    background-color: #ba8a28;
  }

  nav ul ul {
    float: none;
    position: static;
    color: #ffffff;
  }

  nav ul li:hover > ul,
  nav ul ul li:hover > ul {
    display: none;
  }

  nav ul ul li {
    display: block;
    width: 100%;
  }

  .logo-title-mobile {
    display: inline-block;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.1em solid #a27900; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 15s steps(50, end), blink-caret 2s step-end;
    animation-iteration-count: infinite;
    animation-delay: 3s;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 75%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #a27900;
    }
  }
}

@media (min-width: 768px) and (max-width: 820px) {
  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 35%;
    }
  }
}
</style>
