<template>
  <div class="column is-8 is-offset-2 has-text-centered">
    <figure class="image is-2by1 mb-6">
      <img :src="reference.photo" />
    </figure>

    <hr />

    <p>
      <textarea
        class="textarea has-fixed-size is-read"
        readonly
        :draggable="false"
        v-model="reference.description"
      />
    </p>

    <hr />

    <p class="mt-6 mb-4 pt-3">
      <a href="tel:+9005338850064">
        <span class="has-text-black">İletişim için arayın: &nbsp; &nbsp;</span>
        <span class="pr-2"><i class="fa-solid fa-phone"></i></span>
        <span class="has-text-info">+90 553 061 58 30</span>
      </a>
    </p>

    <p>
      <a
        href="//api.whatsapp.com/send?phone=+9005338850064"
        title="Share on whatsapp"
        target="_blank"
      >
        <span class="has-text-black"
          >İletişim için mesaj atın: &nbsp; &nbsp;</span
        >
        <span class="pr-2"><i class="fa-solid fa-phone"></i></span>
        <span class="has-text-info">+90 553 061 5830</span>
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
