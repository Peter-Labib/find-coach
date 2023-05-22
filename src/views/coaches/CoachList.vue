<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <RouterLink to="/register">Register as Coach</RouterLink>
    </div>
    <ul v-if="hasCoaches">
      <CoachItem
        v-for="coach in filterdCoaches"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :areas="coach.areas"
        :description="coach.description"
        :rate="coach.hourlyRate"
      >
        {{ coach.firstName }}
      </CoachItem>
    </ul>
    <h3 v-else>has no coaches</h3>
  </section>
</template>

<script>
  import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
  components:{
    CoachItem
  },
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

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
