<template>
    <main>
        <Navbar />
            <div class="pt-5 md:pt-10 lg:pt-20">
                <section class="lg:flex lg:flex-col-reverse pl-5 pr-5 lg:pr-20 lg:pl-20">
                    <div class="flex justify-center relative lg:-top-60 lg:justify-end">
                        <img v-for="(data, idx) in listMainUser" :key="idx" :src="data.image" :class="'image-hero-'+idx" alt="avatar" />
                    </div>

                    <div class="text-center lg:text-left relative">
                        <p class="text-secondary text-4xl lg:text-5xl font-bold">Ubah Hidupmu</p>
                        <p class="text-4xl lg:text-5xl font-bold">Sekarang Juga</p>
                        <p class="text-center lg:text-left mt-5 lg:w-1/2 text-slate-500">Belajar menjadi software engineer secara online/remote selama 3 - 6 bulan sampai diterima kerja, tanpa bayar di depan (Income Share Agreement).</p>
                        <Button label="Daftar Sekarang" styles="bg-secondary hover:bg-orange-500 text-white font-bold text-sm mt-5 p-4 md:p-4 lg:p-4" @onSubmit="this.$router.push('/register')" />
                    </div>
                </section>

                <section class="mt-10 lg:-mt-40 pl-5 pr-5 lg:pr-20 lg:pl-20 mb-10">
                    <div class="flex justify-between w-full flex-wrap">
                        <div class="flex items-center mb-5 lg:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 bg-slate-400 p-1 rounded-full">
                            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                            </svg>
                            <p class="text-sm ml-3 font-bold text-slate-700 w-24 lg:w-auto">Supportive Trainer</p>
                        </div>
                        <div class="flex mb-5 items-center lg:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 bg-slate-400 p-1 rounded-full">
                            <path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clip-rule="evenodd" />
                            </svg>
                            <p class="text-sm ml-3 font-bold text-slate-700 w-28 lg:w-auto">Kurikulum Sesuai Industri</p>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 bg-slate-400 p-1 rounded-full">
                            <path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clip-rule="evenodd" />
                            <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                            </svg>
                            <p class="text-sm ml-3 font-bold text-slate-700 w-28 lg:w-auto">Jaminan Disalurkan Kerja</p>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 bg-slate-400 p-1 rounded-full">
                            <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd" />
                            </svg>
                            <p class="text-sm ml-3 font-bold text-slate-700 w-28 lg:w-auto">Ulang Kelas Gratis</p>
                        </div>
                    </div>
                </section>
                
                <section class="bg-slate-200 pb-10">
                    <div class="p-10">
                        <p class="text-center text-xl font-bold lg:text-2xl">500+ lulusan bekerja di perusahaan ini</p>
                        <p class="text-center text-xs lg:text-lg text-slate-700">Fazztrack menjamin lulusan mendapat kesempatan membagun karir di perusahaan impian.</p>
                    </div>

                    <div class="flex flex-wrap p-1 items-center justify-between lg:p-10">
                        <img v-for="(data, idx) in listMitra" :key="idx" :src="data.image" alt="avatar" />
                        <p class="text-2xl font-bold p-6">600+</p>
                    </div>
                </section>

                <section class="p-5 lg:p-20 lg:pb-5">
                    <p class="text-center text-xl font-bold lg:text-2xl mb-3">Pilihan Bootcamp Fazztrack</p>
                    <p class="text-center text-xs lg:text-lg text-slate-700 mb-6">Bootcamp dilaksanakan berdasarkan kurikulum yang telah disusun untuk kamu siap bekerja.</p>
                    <div class="md:flex md:justify-between md:flex-wrap">
                        <CardSelectBootcamp v-for="(data, idx) in listSelectCamp" :key="idx" :payload="data" />
                    </div>
                </section>

                <section class="p-5 lg:p-20 ">
                    <div class="bg-slate-200 p-10">
                        <div class="md:flex flex-row-reverse">
                            <img src="https://fazztrack.com/_nuxt/img/minicamp-illust.b01118b.svg" alt="screenshoot" />
                            <div>
                                <p class="font-bold text-center pt-4 md:pt-0 md:text-left md:text-xl lg:text-2xl">Tidak memiliki banyak waktu?</p>
                                <p class="text-center text-sm pt-4 text-slate-700 md:text-left md:text-xl md:pb-4 md:w-[90%]">Coba program terbaru Fazztrack Mini Bootcamp! Belajar dengan menyesuaikan waktumu dan bisa langsung disalurkan kerja.</p>
                                <div class="flex justify-center md:inline pt-4">
                                    <Button label="Daftar Sekarang" styles="bg-primary hover:bg-[#2557a7] text-white font-bold text-sm mt-5 p-4 md:p-4 lg:p-4" @onSubmit="this.$router.push('/minicamp')" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        <Footer />
    </main>
</template>

<script>
    import Navbar from '@/components/molecules/Navbar.vue';
    import Footer from '@/components/molecules/Footer.vue';
    import Button from '@/components/atom/Button.vue';
import CardSelectBootcamp from '@/components/molecules/CardSelectBootcamp.vue';

    export default{
        name:'HomePage',
        data(){
            return{
                listMainUser: [
                    {
                        image:"https://fazztrack.com/_nuxt/img/05-bluebird.d51563e.svg"
                    }, {
                        image:"https://fazztrack.com/_nuxt/img/03-bibit.620a965.svg"
                    }, {
                        image: "https://fazztrack.com/_nuxt/img/01-btpn.e89dd14.svg"
                    }
                ],
                listMitra: [
                    {
                        image: "https://fazztrack.com/_nuxt/img/tokopedia.e6def53.svg"
                    }, {
                        image : "https://fazztrack.com/_nuxt/img/mandiri.d9f1f48.png"
                    }, {
                        image: "https://fazztrack.com/_nuxt/img/bri.7d466d0.svg"
                    }, {
                        image: "https://fazztrack.com/_nuxt/img/jenius.a8270a4.svg"
                    }, {
                        image: "https://fazztrack.com/_nuxt/img/flip.851afcc.svg"
                    }, {
                        image: "https://fazztrack.com/_nuxt/img/jne.0a48135.svg"
                    }, {
                        image: "https://fazztrack.com/_nuxt/img/prudential.a23e2d6.svg"
                    }, {
                        image :"https://fazztrack.com/_nuxt/img/molatv.ea61655.svg"
                    }, {
                        image:"https://fazztrack.com/_nuxt/img/aia.7ccbb68.svg"
                    }, {
                        image:"https://fazztrack.com/_nuxt/img/pintu.eb4a956.svg"
                    }, {
                        image:"https://fazztrack.com/_nuxt/img/bibit.7c32a8b.svg"
                    }, {
                        image:"https://fazztrack.com/_nuxt/img/stockbit.9979b1a.svg"
                    }, {
                        image:"https://fazztrack.com/_nuxt/img/alodokter.4f00ccc.svg"
                    }, {
                        image:"https://fazztrack.com/_nuxt/img/modalrakyat.5ad39da.svg"
                    }, {
                        image:"https://fazztrack.com/_nuxt/img/bahaso.ad154cd.svg"
                    }, {
                        image:"https://fazztrack.com/_nuxt/img/privyid.1b7bbd0.svg"
                    }, {
                        image :"https://fazztrack.com/_nuxt/img/sirclo.7d776dd.svg"
                    }, {
                        image :"https://fazztrack.com/_nuxt/img/rey-id.abcb134.svg"
                    }, {
                        image : "https://fazztrack.com/_nuxt/img/mitrais.1776b80.svg"
                    }, {
                        image :"https://fazztrack.com/_nuxt/img/happy-5.459194c.svg"
                    }, {
                        image : "https://fazztrack.com/_nuxt/img/rata-id.d27e94f.svg"
                    }, {
                        image : "https://fazztrack.com/_nuxt/img/mandiri-inhealth.4e47cc6.svg"
                    }, {
                        image : "https://fazztrack.com/_nuxt/img/agros.326f1f3.svg"
                    }
                ],
                listSelectCamp : [
                    {
                        title:"Fullstack Mobile",
                        image:"https://fazztrack.com/_nuxt/img/Asset_FullMobile.82da6c4.png",
                        desc: "Mempelajari bagaimana membangun aplikasi mobile dengan Javascript dari tahap perancangan selama 3 bulan pembelajaran secara online."
                    }, {
                        title:"Fullstack Website",
                        image :"https://fazztrack.com/_nuxt/img/Web%20Fullstack%20Developer.29cedfe.png",
                        desc:"Mempelajari bagaimana membangun aplikasi website dari tahap perancangan sampai testing selama 3 bulan pembelajaran secara online."
                    }, {
                        title:"Backend Javaspring",
                        image:"https://fazztrack.com/_nuxt/img/backend-javaspring.2241d71.png",
                        desc:"Membangun aplikasi fullstack dengan React serta Spring Boot sebagai backend selama 3 bulan pembelajaran secara online."
                    }, {
                        title:"Backend Golang",
                        image:"https://fazztrack.com/_nuxt/img/DevOps-Engineer-new.394e12c.png",
                        desc:"Membangun aplikasi fullstack dengan Javascript dan Golang serta otomasi sistem untuk membantu proses development lebih cepat."
                    }
                ]
            }
        },
        components : {
            Navbar,
            Footer,
            Button,
            CardSelectBootcamp
        }
    }
</script>