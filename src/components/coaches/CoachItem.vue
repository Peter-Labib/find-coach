<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>{{ rate }}/hour</h4>
    <div>
      <span
        v-for="area in areas"
        :key="area"
      >
        {{ area }}
      </span>
    </div>
    <div class="actions">
      <RouterLink :to="coachContactLink">Contact</RouterLink>
      <RouterLink :to="coachLink">View Details</RouterLink>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      reuired: true
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    rate: {
      type: Number
    },
    areas: {
      type: Array
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    coachContactLink() {
      return `${this.$route.path}/${this.id}/contact`
    },
    coachLink() {
      return `${this.$route.path}/${this.id}`
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
