<template>
    <Navbar />
        <main v-if="listVideos.isLoading" class="h-screen flex justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />
        </main>

        <main v-else-if="listVideos.isSuccess">
            <section class="carousel w-ful lg:h-60 bg-white" >
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://fazztrack.com/_nuxt/img/banner-01.11a875c.png" class="w-full lg:px-24 lg:py-5" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="border-2 py-3 bg-white flex justify-center items-center rounded-full w-12 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="#slide2" class="border-2 bg-white flex justify-center items-center rounded-full w-12 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div> 

                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://fazztrack.com/_nuxt/img/banner-02.5c17f00.png" class="w-full lg:px-24 lg:py-5" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="border-2 py-3 bg-white flex justify-center items-center rounded-full w-12 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="#slide3" class="border-2 bg-white flex justify-center items-center rounded-full w-12 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://fazztrack.com/_nuxt/img/banner-06.41fa84c.png" class="w-full lg:px-24 lg:py-5" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="border-2 py-3 bg-white flex justify-center items-center rounded-full w-12 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="#slide3" class="border-2 bg-white flex justify-center items-center rounded-full w-12 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://fazztrack.com/_nuxt/img/banner-06.41fa84c.png" class="w-full lg:px-24 lg:py-5" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="border-2 py-3 bg-white flex justify-center items-center rounded-full w-12 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="#slide1" class="border-2 bg-white flex justify-center items-center rounded-full w-12 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section class="p-5 bg-slate-200 lg:px-20">
                <div class="w-full">
                    <div class="flex content-center items-center bg-white border-2 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-slate-300">
                            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                        </svg>
                        <input type="text" class="w-full ml-3 text-xs py-2 px-3" placeholder="Mau belajar apa hari ini? Cari topik atau materimu disini..">
                    </div>
                </div>
            </section>

            <section class="flex justify-center bg-slate-200">
                <Button label="Add New Video" styles="bg-primary font-bold text-white active:bg-secondary" @onSubmit="this.$router.push('/modul-belajar/create')" />
            </section>

            <section class="pt-5 p-5 lg:px-20 lg:pt-1 bg-slate-200 -z-10 md:grid grid-cols-4">
                <CardVideo v-for="(data, idx) in listVideos.data" :key="idx" :payload="data" @click="this.$router.push(`modul-belajar/edit-or-delete/${data.id}`)" />
            </section>
        </main>

        <main v-else-if="listVideos.isError" class="h-screen flex justify-center">
            <p class="text-2xl font-bold">{{listVideos.errMsg}}</p>
        </main>
    <Footer />
</template>

<script>
    import Navbar from '@/components/molecules/Navbar.vue';
    import Button from '@/components/atom/Button.vue';
    import { mapActions, mapGetters } from 'vuex';
    import Footer from '@/components/molecules/Footer.vue';
    import CardVideo from '@/components/molecules/CardVideo.vue';

    export default {
    name: "VideoBelajarPage",
    computed:{
        ...mapGetters({
            listVideos: "videoBelajar/getListVideos",
            dataUser: "auth/LoginUsers"
        })
    },
    methods:{
        ...mapActions({
            getListVideos: "videoBelajar/getListVideos"
        })
    },
    mounted() {
        const token = this.dataUser.data.token
        this.getListVideos(token)
    },
    components: {
        Navbar,
        Footer,
        CardVideo,
        Button
    }
}
</script>