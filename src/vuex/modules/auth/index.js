import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        authUser: {
            data: {
                users: {},
                token: JSON.parse(localStorage['token'] || null),
            },
            isLoading: false,
            isSuccess: false,
            isError: false,
            errMsg: ''
        }
    }),
    mutations: {
        SET_LOGIN_PENDING(state) {
            state.authUser.isLoading = true
        },
        SET_LOGIN_FULFILLED(state, payload) {
            state.authUser.isLoading = false
            state.authUser.isSuccess = true
            state.authUser.isError = false
            state.authUser.data.users = payload.data.user
            state.authUser.data.token = payload.data.token
        },
        SET_LOGIN_REJECTED(state, payload) {
            state.authUser.isLoading = false
            state.authUser.isSuccess = false
            state.authUser.isError = true
            state.authUser.errMsg = payload.data.message
        }
    },
    actions: {
        LoginUsers(contex, payload) {
            contex.commit("SET_LOGIN_PENDING")
            axios.post('https://fazz-track-sample-api.vercel.app/login', payload)
                .then((res) => {
                    contex.commit("SET_LOGIN_FULFILLED", res.data)
                    localStorage['token'] = JSON.stringify(this.state.auth.authUser.data.token)
                    window.location.reload()
                })
                .catch((err) => {
                    contex.commit("SET_LOGIN_REJECTED", err.response)
                })
        }
    },
    getters: {
        LoginUsers(state) {
            return state.authUser
        }
    }
}