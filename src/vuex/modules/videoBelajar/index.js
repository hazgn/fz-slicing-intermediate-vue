import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        listVideos: {
            data: [],
            isLoading: false,
            isSuccess: false,
            isError: false,
            errMsg: ''
        },
        videoById: {
            data: {},
            isLoading: false,
            isSuccess: false
        }
    }),
    mutations: {
        SET_LIST_VIDEOS_PENDING(state) {
            state.listVideos.isLoading = true
        },
        SET_LIST_VIDEOS_FULFILLED(state, payload) {
            state.listVideos.isLoading = false
            state.listVideos.isSuccess = true
            state.listVideos.data = payload.data.data
        },
        SET_LIST_VIDEOS_REJECTED(state) {
            state.listVideos.isError = true
            state.listVideos.errMsg = 'Server Error'
        },
        SET_VIDEO_BY_ID_PENDING(state) {
            state.videoById.isLoading = true
        },
        SET_VIDEO_BY_ID_FULFILLED(state, payload) {
            state.videoById.isLoading = false
            state.videoById.isSuccess = true
            state.videoById.data = payload.data.data
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
        },
        postVideo(contex, payload) {
            return axios.post('https://fazz-track-sample-api.vercel.app/video', payload.body, { headers: { 'token': payload.token } })
        },
        async getVideoById(contex, payload) {
            try {
                contex.commit('SET_VIDEO_BY_ID_PENDING')
                const response = await axios.get(`https://fazz-track-sample-api.vercel.app/video/${payload.id}`, { headers: { 'token': payload.token } })
                contex.commit('SET_VIDEO_BY_ID_FULFILLED', response)
                return response
            } catch (error) {
                console.log(error);
            }
        },
        editVideo(contex, payload) {
            return axios.put(`https://fazz-track-sample-api.vercel.app/video/${payload.id}`, payload.body, { headers: { 'token': payload.token } })
        },
        deleteVideo(contex, payload) {
            return axios.delete(`https://fazz-track-sample-api.vercel.app/video/${payload.id}`, { headers: { 'token': payload.token } })
        }
    },
    getters: {
        getListVideos(state) {
            return state.listVideos
        },
        getVideoById(state) {
            return state.videoById
        }
    }
}