<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item is-clickable is-size-2 has-text-link" tag="h1">Şahinkaya
          Grup</nuxt-link>
        <span class="navbar-burger" ref="burgerButton" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link @click.native="close" :to="{ name: 'index' }"
            class="navbar-item is-clickable is-active has-text-link" tag="a">Ana
            Sayfa</nuxt-link>

          <nuxt-link @click.native="close" :to="{name: 'about-us'}" class="navbar-item is-clickable has-text-link"
            tag="a">Hakkımızda
          </nuxt-link>

          <a v-if="this.$route.name == 'index'" href="#references"
            class="navbar-item is-clickable is-active has-text-link">Referanslarımız</a>

          <nuxt-link v-else @click.native="close" :to="{ name: 'references', params: {page:'references'} }"
            class="navbar-item is-clickable is-active has-text-link" tag="a">
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
      const navbarMenu = document.getElementById("navbarMenuHeroA");
      const burgerButton = this.$refs.burgerButton;
      if (navbarMenu) navbarMenu.classList.toggle("is-active");
      if (burgerButton) burgerButton.classList.toggle("is-active");
    },
  }
};
</script>
