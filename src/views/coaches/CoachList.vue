<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <RouterLink to="/register">Register as Coach</RouterLink>
    </div>
    <ul>
      <li v-for="coach in filterdCoaches" :key="coach.id"></li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    filterdCoaches() {
        console.log(this.$store.getters)
      return this.$store.getters['coaches/coachesList']
    }
  }
}
</script>
