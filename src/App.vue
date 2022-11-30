<template>
  <main class="main container mx-auto">
    <header class="text-center">
      <section class="mb-4">
        <h1 class="mt-12">🎅Secret SantaLombrico Matchmaker 2022🎄</h1>
        <p class="italic"><strong>Mondiali</strong> Edition</p>
      </section>
      <button class="btn" @click="() => getMatches(true)">Genera coppie</button>
      <button class="btn" @click="resetMatches">Reset</button>
      <p class="mt-4">
        La generazione delle coppie tiene conto dei regali effettuati nelle ultime due edizioni (2021, 2020). Non tiene
        conto delle edizioni 2019 e 2018.
      </p>
    </header>

    <div class="card error-card" v-if="errorMsg.length">
      <strong>Non ho trovato una soluzione</strong>
      <p class="break-all" v-html="errorMsg" />
      <strong>Ritenta, sarai più fortunato!</strong>
    </div>

    <div class="card" v-if="!matches.length">
      <h2 class="card__title">Partecipanti</h2>
      <div class="dude-list" style="gap: 1rem">
        <DudeCard v-for="dude in activeGang" :key="dude.id" :name="dude.name" />
      </div>
    </div>
    <div class="card" v-else>
      <h2 class="card__title">Coppie</h2>
      <div class="matches-list">
        <template v-for="(match, i) in matches" :key="i">
          <MatchCard :match="match" />
        </template>
      </div>
    </div>
    <footer class="copyright">Made by <a href="https://github.com/sullyD64">SullyD64</a>.</footer>
  </main>
</template>

<script lang="ts">
import DudeCard from "@/components/DudeCard.vue"
import MatchCard from "@/components/MatchCard.vue"
import { gang } from "@/data"
import { Dude, Match } from "@/types"
import shuffle from "shuffle-array"
import { defineComponent, ref, Ref } from "vue"
import { capitalize, getNamesFromIDs, isActiveDude, matchToString } from "./utils"

export default defineComponent({
  components: {
    DudeCard,
    MatchCard
  },

  setup() {
    const matches = ref<Match[]>([])
    const errorMsg = ref("")

    const pick = (arr: Dude[]): Dude => {
      return arr[Math.floor(Math.random() * arr.length)]
    }

    const CUT = 2

    // get only active gang members
    const activeGang = gang
      .filter(d => d.active)
      .map(d => {
        d.prev = d.prev.slice(-CUT)
        return d
      })
      .map(d => {
        d.prev = d.prev.map(id => (isActiveDude(id) ? id : null))
        return d
      })

    const getMatches = (autoRetry?: boolean) => {
      console.clear()
      errorMsg.value = ""
      matches.value = []
      const chosenIDs: number[] = []
      try {
        // shuffle to ensure initial randomness
        // use a copy to maintain original order in first view
        shuffle([...activeGang]).forEach(current => {
          const availableChoices = activeGang
            // exclude current dude
            .filter(d => d.id !== current.id)
            // exclude already chosen dudes (current edition)
            .filter(d => !chosenIDs.includes(d.id))
            // exclude past matches for current dude (past editions)
            .filter(d => !current.prev.includes(d.id))

          const matchedStrings = matches.value.map(m => matchToString(m))
          const availableNames = availableChoices.map(c => c.name)
          const name = capitalize(current.name)

          console.group(name)
          console.log("matches:", matchedStrings)
          console.log("available:", availableNames)
          console.groupEnd()

          if (!availableChoices.length) {
            console.log(current.prev)
            throw new Error(`
              Nessuna scelta compatibile rimasta per <strong>${name}</strong>.<br />
              Ero arrivato a: ${matchedStrings}, <br />
              Rimasti: ${availableNames.length ? availableNames : "nessuno"} <br />
              Inoltre <strong>${name}</strong> è incompatibile con ${getNamesFromIDs(current.prev)}
            `)
          }

          const picked = pick(availableChoices)
          chosenIDs.push(picked.id)

          matches.value.push({ from: current, to: picked })
        })
      } catch ({ message }) {
        console.log(message)

        matches.value = []
        if (autoRetry) {
          getMatches(autoRetry)
          return
        }
        errorMsg.value = message as string
      }
    }

    const resetMatches = () => {
      matches.value = []
      errorMsg.value = ""
    }

    // resetMatches()
    // getMatches()

    return {
      activeGang,
      matches,
      errorMsg,
      getMatches,
      resetMatches
    }
  }
})
</script>

<style lang="postcss">
#app {
  @apply mt-10;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main > * + * {
  @apply mt-6;
}

.btn {
  @apply transition duration-300 ease-in-out focus:outline-none bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded;
}

.card {
  @apply border rounded p-8 flex flex-col items-center space-y-2;
}

.card__title {
  @apply mb-4 text-center;
}

.error-card {
  @apply bg-red-100 text-red-500 border-red-500;
}

.dude-list {
  @apply flex flex-wrap;
}

.matches-list {
  @apply flex flex-col items-center space-y-16;
}
</style>
