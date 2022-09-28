<template>
    <Navbar />
        <main>
            {{getVideoByIdData}}
            <router-link :to="`/modul-belajar/edit-or-delete/${this.$route.params.id}`">Edit</router-link>
        </main>
    <Footer />
</template>

<script>
    import Navbar from '@/components/molecules/Navbar.vue';
    import Footer from '@/components/molecules/Footer.vue';
    import {mapActions, mapGetters} from 'vuex';
    export default {
    name: "DetailVideoPage",
    components: { 
        Navbar,
        Footer
    },
    computed:{
        ...mapGetters({
            dataUser: "auth/LoginUsers",
            getVideoByIdData: 'videoBelajar/getVideoByIdData'
        })
    },
    mounted(){
        const token = this.dataUser.data.token
        this.getVideoById({id:this.$route.params.id, token: token})
    },
    methods:{
        ...mapActions({
            getVideoById : 'videoBelajar/getVideoById'
        })
    }
}
</script>