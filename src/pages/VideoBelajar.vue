<template>
    <main>
        <Navbar />
        <div v-if="listVideos.isLoading" class="h-screen flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />
        </div>

        <section class="p-5 lg:p-10 lg:pl-20 bg-slate-200" v-else>
            <div>
                <input type="text" class="border-2 w-full p-3 rounded-md mt-3" placeholder="Mau belajar apa hari ini? Cari topik atau materimu disini..">
                <div class="relative left-[90%] md:left-[95%] bottom-9">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </section>

        <section class="pt-5 p-5 lg:p-20 lg:pt-1 bg-slate-200 -z-10 md:flex flex-wrap justify-between">
            <CardVideo v-for="(data, idx) in listVideos.data" :key="idx" :payload="data" />
        </section>
        <Footer />
    </main>
</template>

<script>
    import Navbar from '@/components/molecules/Navbar.vue';
    import { mapActions, mapGetters } from 'vuex';
    import Footer from '@/components/molecules/Footer.vue';
    import CardVideo from '@/components/molecules/CardVideo.vue';

    export default {
    name: "VideoBelajarPage",
    computed:{
        ...mapGetters({
            listVideos: "videoBelajar/getListVideos"
        })
    },
    methods:{
        ...mapActions({
            getListVideos: "videoBelajar/getListVideos"
        })
    },
    async mounted() {
        const token = JSON.parse(localStorage.getItem('token'))
        this.getListVideos(token)
    },
    components: {
    Navbar,
    Footer,
    CardVideo
}
}
</script>