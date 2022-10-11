<template>
  <div class="column">
    <div class="mb-6 ">
      <nav class="columns is-centered is-multiline is-mobile mb-6 pb-6">
        <Box class="column " title="İnşaat" icon="fa fa-person-digging" />
        <Box class="column " title="Tadilat" icon="fa fa-screwdriver-wrench" />
        <Box class="column " title="Hafriyat" icon="fa-solid fa-truck" />
        <Box class="column " title="Emlak" icon="fa fa-house" />
        <Box class="column " title="İletişim" icon="fa fa-headset" />
        <Box class="column " title="Ticaret" icon="fa fa-arrow-trend-up" />
      </nav>
    </div>


    <div id="references">
      <div class="columns is-centered is-multiline">
        <div v-for="i in 4" :key="i" class="column is-half">
          <Card />
        </div>
      </div>

      <div class="has-text-centered mt-6 pt-6">
        <nuxt-link :to="{ name: 'references' }" class="button is-link is-outlined is-rounded" tag="button">Daha Fazla
        </nuxt-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  layout: "home"
}
</script>