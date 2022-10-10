<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link :to="{ name:'index' }" class="navbar-item is-clickable is-size-2 has-text-link" tag="h1">Şahinkaya
          Grup</nuxt-link>
        <span class="navbar-burger" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link :to="{ name: 'index' }" class="navbar-item is-clickable is-active has-text-link" tag="div">Ana
            Sayfa</nuxt-link>

          <nuxt-link :to="{name: 'about-us'}" class="navbar-item is-clickable has-text-link" tag="div">Hakkımızda
          </nuxt-link>

          <nuxt-link @click.native="scrollDown()" :to="{ name: 'index', params: {page:'references'} }"
            class="navbar-item is-clickable is-active has-text-link" tag="div">
            Referanslarımız
          </nuxt-link>

          <!-- <a v-else href="#references" class="navbar-item is-clickable is-active has-text-link">Referanslarımız</a> -->

          <a href="#contacts" class="navbar-item is-clickable has-text-link">İletişim</a>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  mounted() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  },
  methods: {
    close() {
      document
        .getElementById("navbarBasicExample")
        .classList.toggle("is-active");
      this.$refs.burgerButton.classList.toggle("is-active");
    },
    scrollDown() {
      location.href = "#references"
    }
  }
};
</script>
