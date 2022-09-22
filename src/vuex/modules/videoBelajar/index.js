import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        listVideos: {
            data: [],
            isLoading: false,
            isError: false,
            errMsg: ''
        }
    }),
    mutations: {
        SET_LIST_VIDEOS_PENDING(state) {
            state.listVideos.isLoading = true
        },
        SET_LIST_VIDEOS_FULFILLED(state, payload) {
            state.listVideos.isLoading = false
            state.listVideos.data = payload.data.data
        },
        SET_LIST_VIDEOS_REJECTED(state) {
            state.listVideos.isError = true
            state.listVideos.errMsg = 'Server Error'
        }
    },
    actions: {
        async getListVideos(contex, payload) {
            try {
                contex.commit('SET_LIST_VIDEOS_PENDING')
                const response = await axios.get('https://fazz-track-sample-api.vercel.app/video', { headers: { 'token': payload } })
                contex.commit('SET_LIST_VIDEOS_FULFILLED', response)
            } catch (error) {
                contex.commit("SET_LIST_VIDEOS_REJECTED")
                return error
            }
        }
    },
    getters: {
        getListVideos(state) {
            return state.listVideos
        }
    }
}