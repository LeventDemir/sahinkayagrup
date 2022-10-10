<template>
  <div class="mb-6 pb-6">
    <nav class="level is-mobile mb-6 pb-6">
      <Box title="İnşaat" icon="fa fa-person-digging" />
      <Box title="Hafriyat" icon="fa-solid fa-truck" />
      <Box title="Emlak" icon="fa fa-house" />
      <Box title="İletişim" icon="fa fa-headset" />
      <Box title="Ticaret" icon="fa fa-arrow-trend-up" />
    </nav>


    <div id="references" class="column mt-6 pt-6">
      <div class="columns is-centered is-multiline">
        <div v-for="i in 4" :key="i" class="column is-half">
          <Card />
        </div>
      </div>

      <div class="has-text-centered mt-6 pt-6">
        <nuxt-link :to="{ name: 'references' }" class="button is-link is-outlined is-rounded" tag="button">Daha Fazla</nuxt-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  layout: "home"
}
</script>