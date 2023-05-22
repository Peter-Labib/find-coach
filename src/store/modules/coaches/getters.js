export default {
  coachesList(state) {
    return state.coachesList
  },
  isCoach(_, getters, _2, rootGatters) {
    const coaches = getters.coachesList
    const userId = rootGatters.userId
    return coaches.some((coach) => coach.id === userId)
  }
}
