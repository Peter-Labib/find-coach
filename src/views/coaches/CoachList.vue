<template>
  <section>
    <CoachFilter @change-filter="setFilters" />
  </section>
  <BaseCard>
    <section>
      <div class="controls">
        <BaseBtn mode="outline">Refresh</BaseBtn>
        <BaseBtn
          link
          to="/register"
          v-if="!isCoach"
          >Register as Coach</BaseBtn
        >
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
  </BaseCard>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue'
import CoachFilter from '../../components/coaches/CoachFilter.vue'
export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  computed: {
    filterdCoaches() {
      const coaches = this.$store.getters['coaches/coachesList']
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true
        }
        return false
      })
    },
    hasCoaches() {
      return this.$store.getters['coaches/coachesList'].length > 0
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach']
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
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
