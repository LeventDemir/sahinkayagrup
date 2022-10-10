<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <h1 class="navbar-item is-clickable is-size-2 has-text-link">Şahinkaya Grup</h1>
        <span class="navbar-burger" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item is-clickable is-active has-text-link">Ana Sayfa</div>
          <div class="navbar-item is-clickable has-text-link">Hakkımızda</div>
          <div class="navbar-item is-clickable has-text-link">Referanslarımız</div>
          <div class="navbar-item is-clickable has-text-link">İletişim</div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {

      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    });
  }
}
</script>