import { createStore } from 'vuex'
<<<<<<< HEAD
<<<<<<< HEAD
import videoBelajar from './modules/videoBelajar'

export default createStore({
    modules: {
        videoBelajar
    }
=======
=======
import videoBelajar from './modules/videoBelajar'

>>>>>>> d36170d3f0c764a6a3263d26d89c71267019ef75
import auth from './modules/auth'
import minicamp from './modules/minicamp'

export default createStore({
    modules: {
        auth,
<<<<<<< HEAD
        minicamp
}
>>>>>>> 04725406998059c19e95911674ac192d90f987d5
=======
        minicamp,
        videoBelajar
    }
>>>>>>> d36170d3f0c764a6a3263d26d89c71267019ef75
})