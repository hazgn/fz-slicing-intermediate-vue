import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        authUser: {
            id: null,
            data: {
                users: {},
                token: JSON.parse(localStorage['web-access-token'] || null),
            },
            isLoading: false,
            isError: false,
            errMsg: ''
        }
    }),
    mutations: {
        SET_LOGIN_PENDING(state) {
            state.authUser.isLoading = true
        }
    },
    actions: {
        LoginUsers(contex) {
            contex.commit("SET_LOGIN_PENDING")
            axios.post('')
        }
    },
    getters: {

    }
}