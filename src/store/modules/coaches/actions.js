export default {
  registerCoach(context, payload) {
    const coachData = {
      id: context.rootGatters.userId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      areas: payload.areas,
      description: payload.description,
      hourlyRate: payload.rate
    }

    context.commit('registerCoach', coachData)
  }
}
