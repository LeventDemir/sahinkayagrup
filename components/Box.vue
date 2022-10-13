<template>
  <div class="level-item has-text-centered">
    <div class="box has-background-grey-lighter">
      <p>
        <span class="icon is-size-4 has-text-info">
          <i :class="icon"></i>
        </span>
      </p>
      <p class="is-size-5 has-text-black">{{ title }}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    title: String,
    icon: String,
  },
};
</script>
