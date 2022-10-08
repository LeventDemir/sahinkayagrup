<template>
  <section class="hero hero-bg is-primary is-large">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <!-- Navbar -->
      <Navbar />
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="is-size-1 has-text-black">Şahinkaya Grup</p>
        <p class="subtitle has-text-black is-size-4">İnşaat, Hafriyat, Emlak, İletişimi Ticret</p>
      </div>
    </div>
  </section>
</template>


<style scoped>
.hero-bg {
  background: url("../static/hero3.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>