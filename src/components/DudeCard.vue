<template>
  <div class="dude-card">
    <img class="dude-card__image" :src="require(`@/assets/img/${name}.jpg`)" />
    <span class="dude-card__title">{{ name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="postcss">
.dude-card {
  @apply text-center flex flex-col w-max;
}

.dude-card__image {
  @apply w-12 h-12 sm:w-24 sm:h-24 rounded-full border-purple-400 border-4 object-cover;
}

.dude-card__title {
  @apply font-bold text-lg capitalize;
}
</style>
