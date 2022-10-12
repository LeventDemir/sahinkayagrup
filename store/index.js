export const actions = {
    async nuxtServerInit({ commit, dispatch }, { req }) {
        if (req.headers.cookie) {
            const isItMoreThanOne = await req.headers.cookie.search(";")

            if (isItMoreThanOne > -1) {
                const cookies = await req.headers.cookie.split("; ")
                const tokenIndex = await cookies.findIndex(index => index.substr(0, 5) == 'token')

                if (tokenIndex > -1) {
                    const token = await cookies[tokenIndex].substr(6)
                    // set token to vuex
                    await commit('admin/setToken', token)
                }
            } else {
                const token = await req.headers.cookie.substr(6)
                // set token to vuex
                await commit('admin/setToken', token)
            }

            await dispatch('admin/isAuth')
        }

        await dispatch('reference/references')
    }
}