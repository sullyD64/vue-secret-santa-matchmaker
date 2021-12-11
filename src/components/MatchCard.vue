<template>
  <div class="match">
    <span class="spacer"></span>
    <DudeCard :name="match.from.name" />
    <span class="match-icon match-icon__gift" />
    <span class="match-icon match-icon__arrow" />
    <DudeCard :name="match.to.name" />
    <span class="spacer"></span>
    <span class="match-previous">
      (precedenti per {{ capitalize(match.from.name) }}: {{ getNamesFromIDs(match.from.prev) }})
    </span>
  </div>
</template>

<script lang="ts">
import { Match } from "@/types"
import { defineComponent } from "vue"
import { capitalize, getNamesFromIDs } from "@/utils"
import DudeCard from "@/components/DudeCard.vue"

export default defineComponent({
  components: {
    DudeCard
  },
  props: {
    match: {
      type: Object as () => Match,
      required: true
    }
  },
  setup() {
    return {
      capitalize,
      getNamesFromIDs
    }
  }
})
</script>

<style lang="postcss">
.match {
  @apply flex flex-wrap space-x-2;
}

.match-icon {
  @apply block w-8 h-8 sm:w-12 sm:h-12 mt-4 bg-purple-700;
}

.match-icon__arrow {
  mask-image: url("~@/assets/icons/arrow-right.svg");
}

.match-icon__gift {
  mask-image: url("~@/assets/icons/gift.svg");
}

.match-previous {
  @apply text-center;

  flex-basis: 100%;
}

.spacer {
  flex-grow: 1;
}
</style>
