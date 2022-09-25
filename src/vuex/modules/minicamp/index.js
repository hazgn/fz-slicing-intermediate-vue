import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        minicamp : {
            data: {

            },
            isLoading: false,
            isError: false,
            errMsg: ''
        }
    }),
    mutations: {
        SET_LIST_MINICAMP_PENDING(state) {
            state.minicamp.isLoading = true
        },
        SET_LIST_MINICAMP_FULFILLED(state, payload) {
            state.minicamp.isLoading = false;
            state.minicamp.data = payload;
        }
    },
    actions: {

        async miniCampGet(context){
            try{
                context.commit('SET_LIST_MINICAMP_PENDING')
                const response = await axios.get(
                    "https://fazz-track-sample-api.vercel.app/minicamp", {
                        headers : {
                            'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiY3JlYXRlZF9hdCI6IjIwMjItMDktMjJUMDk6MTI6NDQuNDc2NzQ1KzAwOjAwIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHpTdXk0ei8wQncxVTBpTU44OERJS3VoLk0xRmEvVnJ3dElkTXFrZFRCR1Fjc0dULldjb3VPIiwiaWF0IjoxNjYzODU1ODM4fQ.i9-xDNIGKGVof0Ia3A3LZnpDEBH3J5VAOGuCleIQqSg'
                        }
                    }
                );
                context.commit("SET_LIST_MINICAMP_FULFILLED", response.data.data);
                return response.data.data;
            } catch (error){
                console.log(error)
            }
        },
        async miniCampPost(context){
            try{
                context.commit('SET_LIST_MINICAMP_PENDING')
                const response = await axios.post(
                    "https://fazz-track-sample-api.vercel.app/minicamp", { 
                    title : "iOS App Development",
                    description : "Belajar membuat aplikasi iOS dengan bahasa pemrograman Swift 5.5, Xcode 13, iOS 15 SDK dan Framework UIKit.",
                    trainerName : "Hidayat Abisena",
                    trainerTitle : "IOS Instructure",
                    trainerPicture : "https://elearn-production.s3.ap-southeast-1.amazonaws.com/arkademy-image-profile/1656628807901/e0b72e27483cdbaea2da84f2b1c2783e",
                    batch : "1",
                    location : "online",
                    startDate : "2022-09-10",
                    endDate : "2022-11-08",
                    isWork : true,
                    price : 600000 
                }, {
                        headers : {
                            'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiY3JlYXRlZF9hdCI6IjIwMjItMDktMjJUMDk6MTI6NDQuNDc2NzQ1KzAwOjAwIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHpTdXk0ei8wQncxVTBpTU44OERJS3VoLk0xRmEvVnJ3dElkTXFrZFRCR1Fjc0dULldjb3VPIiwiaWF0IjoxNjYzODU1ODM4fQ.i9-xDNIGKGVof0Ia3A3LZnpDEBH3J5VAOGuCleIQqSg',
                        }
                    }
                );
 
                return response.data.data;
            } catch (error){
                console.log(error)
            }
        },
        
    },
    getters: {
        miniCampGet(state){
            return state.minicamp;
        }
    }
}