export const state = () => ({
    topReferences: null,
    references: null
})

export const getters = {
    getTopReferences(state) {
        return state.topReferences
    },
    getReferences(state) {
        return state.references
    }
}

export const mutations = {
    setReferences(state, references) {
        state.references = references

        const topReferences = []

        references.map(reference => {
            if (reference.status) topReferences.push(reference)
        })

        state.topReferences = topReferences
    }
}

export const actions = {
    create({ rootGetters, dispatch }, reference) {
        this.$axios.post('/reference/create', { token: rootGetters['admin/getToken'], ...reference })
            .then(response => {
                if (response.data.success) {
                    this.$toast.global.success('Referans eklendi')

                    dispatch('references')

                    this.$router.push({ name: 'dashboard' })
                } else this.$toast.global.error('Bir hata oluştu')
            })
    },
    update({ rootGetters, dispatch }, reference) {
        this.$axios.post('/reference/update', { token: rootGetters['admin/getToken'], ...reference })
            .then(response => {
                if (response.data.success) {
                    this.$toast.global.success('Ürün güncellendi')

                    dispatch('references')

                    this.$router.push({ name: 'dashboard' })
                } else this.$toast.global.error('Bir hata oluştu')
            })
    },
    delete({ rootGetters, dispatch }, id) {
        this.$axios.post('/reference/delete', { token: rootGetters['admin/getToken'], id })
            .then(response => {
                if (response.data.success) {
                    this.$toast.global.success('Ürün silindi')

                    dispatch('references')
                } else this.$toast.global.error('Bir hata oluştu')
            })
    },
    references({ commit }) {
        return this.$axios.get('/reference/references').then(response => {
            if (response.data.references) commit('setReferences', response.data.references)
        })
    },
    reference({ }, id) {
        return this.$axios.get('/reference/reference', { params: { id } })
            .then(response => { if (response.data.reference) return response.data.reference })
    }
}