<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <RouterLink to="/register">Register as Coach</RouterLink>
    </div>
    <ul v-if="hasCoaches">
      <li
        v-for="coach in filterdCoaches"
        :key="coach.id"
      >
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>has no coaches</h3>
  </section>
</template>

<script>
export default {
  computed: {
    filterdCoaches() {
      return this.$store.getters['coaches/coachesList']
    },
    hasCoaches() {
      return this.$store.getters['coaches/coachesList'].length > 0
    }
  }
}
</script>
