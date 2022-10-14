<template>
  <div class="column is-8 is-offset-2 has-text-centered">
    <figure class="image is-2by1 mb-6">
      <img :src="reference.photo" />
    </figure>

    <hr />

    <p>
      <textarea class="textarea has-fixed-size is-read" readonly :draggable="false" v-model="reference.description" />
    </p>

    <hr />

    <p class="mt-6 mb-4 pt-3">
      <a href="tel:+905536850064">
        <span class="has-text-grey-dark">arayın:</span>
        <span class="has-text-info pr-2 pl-3"><i class="fa fa-phone"></i></span>
        <span class="has-text-info">0 553 685 00 64</span>
      </a>
    </p>

    <p>
      <a href="https://wa.me/+905338850064" title="Share on whatsapp" target="_blank">
        <span class="has-text-grey-dark">WhatsApp'tan mesaj atın:</span>
        <span class="has-text-info pr-2 pl-3"><i class="fa-brands fa-whatsapp"></i></span>
        <span class="has-text-info">0 553 685 00 64</span>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, store }) {
    return store.dispatch("reference/reference", params.id).then((response) => {
      return { reference: response };
    });
  },

  mounted() {
    const textarea = document.getElementsByTagName("textarea")[0];
    const height = textarea.scrollHeight;

    textarea.style.cssText = "height:" + height + "px";
  },
};
</script>
