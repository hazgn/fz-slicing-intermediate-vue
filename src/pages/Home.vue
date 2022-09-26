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
                        <img v-for="(data, idx) in listMitra" :key="idx" :src="data.image" alt="avatar" class="h-24 w-24 lg:h-auto lg:w-auto lg:p-3"  />
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
                                    <Button label="Daftar Sekarang" styles="bg-primary hover:bg-[#2557a7] text-white font-bold text-sm mt-5 p-4 md:p-4 lg:p-5" @onSubmit="this.$router.push('/register')" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-[#fef3ec] p-5 lg:p-20">
                    <div class="flex justify-center md:justify-start items-center">
                        <p class="text-2xl font-bold">Alumni</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-secondary">
                        <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                        </svg>
                        <p class="text-2xl font-bold">Fazztrack</p>
                    </div>
                    <p class="text-slate-700 text-center md:text-left">Testimoni alumni Fazztrack tentang bootcamp dan penyaluran kerja yang sudah mereka ikuti.</p>
                        <div class="md:flex justify-between flex-wrap">
                            <CardAlumni v-for="(data, idx) in listAlumni" :key="idx" :payload="data" />
                        </div>
                </section>

                <section class="p-5 lg:p-20">
                    <div class="md:flex items-center justify-between">
                        <div>
                            <p class="text-2xl font-bold text-center md:text-left">Cerita Alumni Bootcamp</p>
                            <p class="text-xl text-slate-700 text-center md:text-left">Cerita perjalanan heroik alumni bootcamp Fazztrack</p>
                        </div>
                        <Button label="Lihat Selengkapnya" styles="border-2 p-4 text-sm text-slate-800 font-bold hidden lg:inline" />
                    </div>
                    <div class="lg:flex justify-between">
                        <CardStoryAlumni v-for="(data, idx) in listStoryAlumni" :key="idx" :payload="data" />
                        <div class="flex justify-center">
                            <Button label="Lihat Selengkapnya" styles="border-2 p-4 text-sm text-slate-800 font-bold lg:hidden mt-10" />
                        </div>
                    </div>
                </section>

                <section class="p-5 lg:p-20">
                    <p class="text-center text-2xl font-bold">Pertanyaan Yang Sering Ditanyakan</p>
                    <p class="text-center text-xl text-slate-700">Bootcamp dilaksanakan berdasarkan kurikulum yang telah disusun untuk kamu siap bekerja.</p>
                    
                    <div class="border-2 p-5 rounded-md shadow-md mt-5 cursor-pointer transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10" v-on:click="isCondition=!isCondition, isHiring=false, isStages=false, isProsesCov=false, isTrain=false" :class="{'bg-primary' : isCondition}">
                        <div class="flex justify-between items-center">
                            <p class="font-bold" :class="{'text-white' : isCondition}">Syarat untuk mengikuti program pelatihan Fazztrack apa saja kak?</p>
                            <Arrow class="arrow-down transition-all duration-300" :class="{'-rotate-180 text-white' : isCondition}" />
                        </div>
                        <div v-if="isCondition" class="pt-5">
                            <ul class="text-white">
                            <li>- Pria maupun wanita dengan usia 17 - 28 tahun,</li>
                            <li>- Tidak terikat kontrak dengan perusahan manapun,</li>
                            <li>- Tidak dalam masa kuliah ataupun sekolah (kecuali semester 8),</li>
                            <li>- Siap bekerja di perusahaan rekanan Fazztrack.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="border-2 p-5 rounded-md shadow-md mt-5 cursor-pointer transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10" v-on:click="isStages=!isStages, isCondition=false, isHiring=false, isProsesCov=false, isTrain=false" :class="{'bg-primary' : isStages}">
                        <div class="flex justify-between items-center">
                            <p class="font-bold" :class="{'text-white' : isStages}">Bagaimana tahapan program pelatihan ini?</p>
                            <Arrow class="arrow-down transition-all duration-300" :class="{'-rotate-180 text-white' : isStages}" />
                        </div>
                        <div v-if="isStages" class="pt-5">
                            <ul class="text-white">
                                <li>Pendaftaran > Tes dan Interview secara online > Proses Pelatihan > Tes dan Interview kerja > Bekerja</li>
                            </ul>
                        </div>  
                    </div>

                    <div class="border-2 p-5 rounded-md shadow-md mt-5 cursor-pointer transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10" v-on:click="isHiring=!isHiring, isCondition=false, isStages=false, isProsesCov=false, isTrain=false" :class="{'bg-primary' : isHiring}">
                        <div class="flex justify-between items-center">
                                <p class="font-bold" :class="{'text-white' : isHiring}">Bagaimana proses penyaluran kerja di Fazztrack?</p>
                                <Arrow class="arrow-down transition-all duration-300" :class="{'-rotate-180 text-white' : isHiring}" />
                        </div>
                        <div v-if="isHiring" class="pt-5">
                            <ul class="text-white">
                                <li>Pada pekan akhir pelatihan, kamu akan diberi tugas untuk membuat CV. Kemudian CV tersebut akan disalurkan oleh Fazztrack ke perusahaan rekanan kami. Jika CV kamu terpilih, kami akan menjadwalkan tes maupun interview dengan perusahaan tersebut. Jangan khawatir jika kamu belum terpanggil interview karena Fazztrack akan selalu membantu kamu untuk disalurkan kerja ke perusahaan yang lain.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="border-2 p-5 rounded-md shadow-md mt-5 cursor-pointer transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10" v-on:click="isTrain=!isTrain, isCondition=false, isHiring=false, isStages=false, isProsesCov=false" :class="{'bg-primary' : isTrain}">
                        <div class="flex justify-between items-center">
                            <p class="font-bold" :class="{'text-white' : isTrain}">Sistem tesnya bagaimana kak?</p>
                            <Arrow class="arrow-down transition-all duration-300" :class="{'-rotate-180 text-white' : isTrain}" />
                        </div>
                        <div v-if="isTrain" class="pt-5">
                            <ul class="text-white">
                                <li>Nantinya akan dilaksanakan tes secara online di domisili masing-masing. Soal akan dikirim di grup discord jam 09.00 pada hari Senin, sesuai jadwal tes yang tertera di fazztrack.com/bootcamp</li>
                            </ul>
                        </div>
                    </div>

                    <div class="mt-20 flex justify-center">
                        <Button label="Lihat Selengkapnya" styles="p-3 border-2 text-sm font-bold text-slate-700 hover:bg-slate-200 rounded-md" />
                    </div>
                </section>

                <section class="bg-[#fef3ec] p-5 lg:p-20">
                    <p class="text-2xl text-center font-bold">Tunggu Apa Lagi? Gabung Bersama Kami!</p>
                    <div class="flex justify-center mt-10">
                        <Button label="Daftar Sekarang" styles="bg-secondary p-3 rounded-md text-white font-bold hover:bg-orange-500" @onSubmit="this.$router.push('/register')" />
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
    import CardAlumni from '@/components/molecules/CardAlumni.vue';
    import CardStoryAlumni from '@/components/molecules/CardStoryAlumni.vue';
    import Arrow from '@/components/atom/Arrow.vue';

    export default{
        name:'HomePage',
        data(){
            return{
                isCondition: false,
                isStages: false,
                isTrain:false,
                isHiring:false,
                isProsesCov:false,
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
                ],
                listAlumni : [
                {
                    name: "Rico Andrian",
                    image: "https://fazztrack.com/_nuxt/img/rico-andrian.5427f9c.png",
                    instagram: "@rpetz_",
                    works: "Fullstack Engineer di Rey.id",
                    desc: '"Mulai dari nol", pasti kita sering dengar kalimat itu. Nah itu yang saya rasakan disini. Masuk dengan tangki kosong lalu keluar dengan tangki yang terisi. Dengan mentor yang family friendly, pengajaran yang baik, dan teman - teman yang asik sangat mendukung proses belajar saya. Tak hanya teknikal namun softskill juga saya dapatkan. Terakhir, program ISA yang sangat membantu saya. So, let`s get it on.'
                }, {
                    name: "Irfan Junaidi",
                    image: "https://fazztrack.com/_nuxt/img/irfan-junaidi.e694b62.png",
                    instagram: "@irvan_junjun",
                    works: "Software Engineer di PT. Anak Muda Digital",
                    desc: "Selama pelatihan di bootcamp fazztrack ini, saya mendapatkan banyak manfaat. Dari skill teknikal dan juga soft skill, disana juga mendapatkan pengalaman yang sangat banyak, dari pengalaman project tim, hingga mengerjakan suatu project dengan jangka waktu yang tidak banyak tentunya. Selain itu, didalam pelatihan ini mendapatkan relasi baru dan tentunya ilmu yang sangat bermanfaat."
                }, {
                    name: "Rahadian Reza Rizaldy",
                    image: "https://fazztrack.com/_nuxt/img/rahadian-reza.bb61d01.png",
                    instagram: "@rahadiaanrr",
                    works: "Mobile Engineer di FlipID",
                    desc: "Saya sudah memulai belajar programming sejak lama tetapi setelah mengikuti bootcamp, saya belajar lebih banyak hal dimulai dari basic menggunakan javascript dan di lanjut membuat sebuah website hingga membuat sebuah aplikasi. Selama bootcamp saya mendapat mentor untuk mendampingi  melatih hard skill dan soft skill saya. Materi yg diberikan pun cukup jelas dan sesuai dengan industri teknologi yang dibutuhkan saat ini. Setelah selesai dari bootcamp saya menjadi seorang mobile engineer."
                }, {
                    name: "Akbar Ramadhan",
                    image: "https://fazztrack.com/_nuxt/img/akbar-ramadhan.b00dc0d.png",
                    instagram: "@akbrrmdhn",
                    works: "Frontend Developer di Asian Sigma Technology",
                    desc: "Long before I enrolled into FazzTrack, I thought I knew a lot about web development already. However, I realized that my knowledge on said field is still lacking. FazzTrack helped me improve both my hard skill on web and mobile development, and my soft skill on team management and how to cooperate with fellow programmers. Thanks to that, I've managed to land a job without being clueless on how to work in a company as a junior programmer. Truly recommended for any newcomers who need prior experience on programming."
                }
                ],
                listStoryAlumni : [
                {
                    title:"Lulusan Pesantren juga Bisa jadi DevOps Engineer",
                    image:"https://fazztrack.com/_nuxt/img/afsana.917e408.png",
                    desc:"Afsana lulusan pesantren dari Semarang bercita-cita sebagai Software Engineer sempat kesulitan membagi waktu antara mengaji, belajar akademik, dan belajar programming. Dengan kegigihanya Afsana mengikuti bootcamp Fazztrack sampai akhirnya dia menjadi Devops Engineer."
                }, {
                    title:"Rela Drop Out Demi Mengejar Cita-Cita jadi Programmer",
                    image:"https://fazztrack.com/_nuxt/img/shafa.6b57dc4.png",
                    desc:"Melihat adanya peluang lebih besar sebagai female Software Engineer, Shafa memilih dropout dan mengikuti pelatihan intensif dan mentoring di Fazztrack. Bekal ilmu yang didapat dari Fazztrack mengantarkannya menjadi Frontend Engineer."
                }, {
                    title:"Kata Siapa Fresh Graduate Susah Dapat Kerja? Ini Buktinya",
                    image:"https://fazztrack.com/_nuxt/img/tresna.fd6c125.png",
                    desc:"Tresna, fresh graduate yang menemukan jalan ninjanya melalui Fazztrack. Disaat fresher graduate lainnya mengalami kesulitan dalam mencari pekerjaan, Tresna mengambil bootcamp Devops Engineer. Sekarang Tresna menjadi Devops Engineer di Gramedia."
                }
                ]
            }
        },
        components : {
            Navbar,
            Footer,
            Button,
            CardSelectBootcamp,
            CardAlumni,
            CardStoryAlumni,
            Arrow
        }
    }
</script>