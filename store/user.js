export const state = () => ({
  sa: null,
  watchlist: [],
})

export const getters = {
  getWatchlist: (state) => state.watchlist,
  isInWatchlist: (state) => (movie) => {
    return state.watchlist.includes(movie)
  },
}

export const actions = {
  async addToWatchlist({ commit, state }, payload) {
    if (state.watchlist.includes(payload))
      throw new Error('Movie already in watchlist')

    try {
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      commit('ADD_WATCHLIST', payload)
    } catch (error) {
      console.error(error)
      throw new Error(error.message ? error.message : "Couldn't add movie!")
    }
  },
  async deleteFromWatchlist({ commit }, payload) {
    try {
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      commit('DELETE_FROM_WATCHLIST', payload)
    } catch (error) {
      console.error(error)
      throw new Error("Couldn't delete movie!")
    }
  },
}

export const mutations = {
  ADD_WATCHLIST(state, payload) {
    state.watchlist.push(payload)
  },
  DELETE_FROM_WATCHLIST(state, payload) {
    state.watchlist.splice(state.watchlist.indexOf(payload), 1)
  },

  SA(state, payload) {
    state.sa = payload
  },
}
