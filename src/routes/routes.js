import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import MiniBootcamp from '@/pages/MiniBootcamp.vue'
import TentangFazztrack from '@/pages/TentangFazztrack.vue'
import VideoBelajar from '@/pages/VideoBelajar.vue'
import NotFound from '@/pages/NotFound.vue'

const auth = (to, from, next) => {
    const token = localStorage.getItem('token')
    if (!token) next('/login')
    next()
}

const noAuth = (to, from, next) => {
    const token = localStorage.getItem('token')
    if (token) next('/')
    next()
}

export default [
    {
        path: '/',
        component: Home,
        meta: {
            title: 'Bootcamp Coding Online | Ubah Hidupmu Bersama Fazztrack'
        }
    }, {
        path: '/register',
        component: Register,
        beforeEnter: noAuth,
        meta: {
            title: 'Daftar Akun | Fazztrack'
        },
    }, {
        path: '/login',
        component: Login,
        beforeEnter: noAuth,
        meta: {
            title: 'Fazztrack Login'
        }
    }, {
        path: '/minicamp',
        component: MiniBootcamp,
        beforeEnter: auth,
        meta: {
            title: 'Mini Bootcamp Fazztrack'
        }
    }, {
        path: '/tentang',
        component: TentangFazztrack,
        meta: {
            title: 'Tentang Fazztrack'
        }
    }, {
        path: '/modul-belajar',
        component: VideoBelajar,
        beforeEnter: auth,
        meta: {
            title: 'Modul Belajar Online Dari Fazztrack'
        }
    }, {
        path: '/:pathMatch(.*)*',
        component: NotFound,
        meta: {
            title: 'This page could not be found'
        }
    }
]