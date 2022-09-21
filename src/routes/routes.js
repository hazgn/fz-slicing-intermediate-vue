import Home from '@/pages/Home.vue'
import NotFound from '@/pages/NotFound.vue'

export default [
    {
        path: '/',
        component: Home,
        meta: {
            title: 'Bootcamp Coding Online | Ubah Hidupmu Bersama Fazztrack'
        }
    }, {
        path: '/:pathMatch(.*)*',
        component: NotFound,
        meta: {
            title: 'This page could not be found'
        }
    }
]