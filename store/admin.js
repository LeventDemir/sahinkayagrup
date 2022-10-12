import cookie from 'js-cookie'


export const state = () => ({
    auth: null,
    token: null
})

export const getters = {
    getAuth(state) {
        return state.auth
    },
    getToken(state) {
        return state.token
    }
}

export const mutations = {
    setAuth(state, auth) {
        state.auth = auth
    },
    setToken(state, token) {
        state.token = token
    }
}

export const actions = {
    signIn({ commit }, data) {
        this.$axios.post('/admin/sign-in', data).then(response => {
            if (response.data.token) {
                cookie.set('token', response.data.token)

                commit('setAuth', true)
                commit('setToken', response.data.token)

                this.$router.push({ name: 'dashboard' })

                this.$toast.global.success('Giriş yapıldı')
            } else this.$toast.global.error('Kullanıcı adı veya şifreyi yanlış girdiniz')
        })
    },
    signOut({ getters, commit }) {
        this.$axios.post('/admin/sign-out', { token: getters.getToken }).then(response => {
            if (response.data.success) {
                cookie.remove('token')

                commit('setAuth', null)
                commit('setToken', null)

                this.$router.push({ name: 'sign-in' })
                
                this.$toast.global.success('Çıkış yapıldı')
            } else this.$toast.global.error('Bir hata oluştu')
        })
    },
    isAuth({ getters, commit }) {
        return this.$axios.get('/admin/auth', { params: { token: getters.getToken } })
            .then(response => commit('setAuth', response.data.auth || false))
    }
}