import { createStore } from 'vuex'
import auth from './modules/auth'
import minicamp from './modules/minicamp'

export default createStore({
    modules: {
        auth,
        minicamp
    }
})