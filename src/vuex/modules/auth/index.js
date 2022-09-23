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
            axios.post(' ')
        },
        async RegisterUsers(_context, payload){
            try{
                const response = await axios.post(
                    "https://fazz-track-sample-api.vercel.app/register",
                    { email : payload.email, password : payload.password }    
                );
                console.log(response.data)
                return response.data;
            } catch (error){
                console.log(error);
            }
        },
    },
    getters: {

    }
}
