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
        <span class="logo-title-mobile"
          ><strong style="font-size: 30px;">[</strong> fill in the blank
          <strong style="font-size: 30px;">]</strong></span
        >
        <i class="fa fa-bars" aria-hidden="true"></i>
      </label>

      <input type="checkbox" id="drop" />

      <ul class="nav text-capitalize">
        <li>
          <router-link :to="`/${$i18n.locale}/`">{{
            $t("headings.heading-1")
          }}</router-link>
        </li>

        <li>
          <label for="drop-2" class="toggle">
            <p>
              {{ $t("headings.heading-2") }} &nbsp;&nbsp;
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </p>
          </label>

          <router-link :to="`/${$i18n.locale}/`"
            ><p>
              {{ $t("headings.heading-2") }}&nbsp;&nbsp;
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </p>
          </router-link>

          <input type="checkbox" id="drop-2" />

          <ul>
            <li>
              <router-link :to="`/${$i18n.locale}/`" class="d-md-none sub-title"
                >{{ $t("headings.heading-2") }}
              </router-link>
            </li>

            <li>
              <router-link :to="`/${$i18n.locale}/`" class="sub-title">{{
                $t("gestalt-sub-headings.sub-heading-1")
              }}</router-link>
            </li>

            <li>
              <router-link :to="`/${$i18n.locale}/`" class="sub-title">{{
                $t("gestalt-sub-headings.sub-heading-2")
              }}</router-link>
            </li>

            <li>
              <router-link :to="`/${$i18n.locale}/`" class="sub-title">{{
                $t("gestalt-sub-headings.sub-heading-3")
              }}</router-link>
            </li>

            <li>
              <router-link :to="`/${$i18n.locale}/`" class="sub-title">{{
                $t("gestalt-sub-headings.sub-heading-4")
              }}</router-link>
            </li>

            <li>
              <router-link :to="`/${$i18n.locale}/`" class="sub-title">{{
                $t("gestalt-sub-headings.sub-heading-5")
              }}</router-link>
            </li>

            <li>
              <router-link :to="`/${$i18n.locale}/`" class="sub-title">{{
                $t("gestalt-sub-headings.sub-heading-7")
              }}</router-link>
            </li>
          </ul>
        </li>

        <li>
          <router-link :to="`/${$i18n.locale}/`">{{
            $t("headings.heading-3")
          }}</router-link>
        </li>

        <li>
          <router-link :to="`/${$i18n.locale}/`">{{
            $t("headings.heading-4")
          }}</router-link>
        </li>

        <li>
          <router-link :to="`/${$i18n.locale}/`">{{
            $t("headings.heading-5")
          }}</router-link>
        </li>

        <LanguageSwitcher></LanguageSwitcher>
      </ul>
    </nav>
  </div>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

export default {
  name: "Header",

  components: {
    LanguageSwitcher,
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
  background-color: #041b40;
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
  background-color: #041b40;
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
  background: #020d1e;
}

.icon {
  float: right;
}

.toggle p {
  font-size: 15px;
  font-weight: 600;
  padding: 5px 0;
  margin-left: 5px;
}

nav a:hover {
  color: #ffffff;
  background-color: #020d1e;
}

nav ul ul {
  display: none;
  position: absolute;
  top: 75px;
}

nav ul li:hover > ul {
  display: inherit;
}

nav ul ul li {
  position: relative;
  display: list-item;
  float: none;
  width: 220px;
}

.logo-title-web {
  font-size: 25px;
  padding: 15px 25px;
}

.logo-title-web {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.1em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 10s steps(50, end), blink-caret 2s step-end;
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
    border-color: orange;
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
    background-color: #041b40;
    color: #ffffff;
  }

  .toggle:hover {
    background-color: #020d1e;
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
    background-color: #020d1e;
  }

  nav ul li ul li .toggle,
  nav ul ul a {
    padding: 15px 20px;
    font-size: 15px;
    color: #ffffff;
    background-color: #073986;
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
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.1em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 10s steps(50, end), blink-caret 2s step-end;
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
      border-color: orange;
    }
  }
}
</style>
