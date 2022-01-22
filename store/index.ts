export const state = () => ({
  authenticableUsers: [
    {
      id: 1,
      name: 'Root',
      role: 'root',
      username: 'root',
      password: 'password',
      email: 'root@nuxtmin.test',
      lastLogin: '2022-01-01T00:00:00.000Z',
      createdAt: '2022-01-01T00:00:00.000Z',
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'admin',
      username: 'admin',
      password: 'password',
      email: 'johndoe@nuxtmin.test',
      lastLogin: '2022-01-01T00:00:00.000Z',
      createdAt: '2022-01-01T00:00:00.000Z',
    }
  ],

  user: {
    id: null,
    name: null,
    role: null,
    username: null,
    email: null,
    lastLogin: null,
    createdAt: null,
  },
})

export const getters = {
  isAuthenticated: (state: any) => {
    return state.user.id !== null
  }
}

export const mutations = {
  setUser(state: any, payload: any) {
    state.user = payload
  }
}

export const actions = {
  login({ commit, state }: any, payload: any) {
    const user = state.authenticableUsers.find((user: any) => {
      return user.username === payload.username && user.password === payload.password
    })

    if (user) {
      commit('setUser', user)
      return Promise.resolve(user)
    }

    return Promise.reject(new Error('Invalid username or password'))
  }
}
