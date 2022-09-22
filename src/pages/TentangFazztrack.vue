<template>
    <main>
        <Navbar/>

        <!-- header -->
        <div class="p-10 flex">
            <div class="pl-6  flex flex-col gap-5">
                <h1 class="font-bold text-5xl leading-normal">
                    Our Mission Is To <br>
                    <span class="text-orange-600">Build Life-Changing Education</span>
                </h1>
                <div class="mt-5">
                    <Button label="Daftar Sekarang" class="bg-orange-600 text-white font-bold"/>
                </div>
            </div>
            <div class="pl-6 ">
                <img src="https://www.fazztrack.com/_nuxt/img/about-page-hero.3a699a8.png" alt="">
            </div>
        </div>

        <!-- career hacks -->
        <div class="my-14 p-10 flex">
            <div>
                <h1 class="pl-6 text-2xl text-gray-400 mr-10">
                    <span class="font-bold text-black"> The New Career Hacks </span><br>
                    Di Fazztrack kami percaya ada cara <br> yang lebih baik untuk sukses:
                </h1>
            </div>
            <div>
                <div class="flex pl-5">
                    <div class="mt-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Check.svg/2048px-Check.svg.png" alt="" width="20">
                    </div>
                    <h1 class="ml-5">Menggunakan skema Income Share Agreement (ISA) sehingga tidak ada biaya pendidikan <br> di depan</h1>
                </div>
                <div class="flex pl-5  mt-3">
                    <div class="mt-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Check.svg/2048px-Check.svg.png" alt="" width="20">
                    </div>
                    <h1 class="ml-5">Memberikan skill yang dibutuhkan sesuai standar industri.</h1>
                </div>
                <div class="flex pl-5  mt-3">
                    <div class="mt-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Check.svg/2048px-Check.svg.png" alt="" width="20">
                    </div>
                    <h1 class="ml-5">Menyalurkan lulusan Fazztrack ke perusahaan rekanan Fazztrack.</h1>
                </div>
            </div> 
        </div>

        <!-- lulusan -->
        <Lulusan/>


        <!-- HUBUNGI -->
        <div class="mt-5">
            <div class="flex my-36 flex-col items-center">
                <h1 class="text-3xl font-bold">Hubungi Fazztrack</h1>
                <div class="flex mt-10">
                    <img src="@/assets/satelit.png" alt="" width="300" class="mr-10">
                    <div class="ml-5">
                        <h1 class="font-bold text-2xl text-orange-600">Fazztrack Head Office</h1>
                        <p class="text-gray-500 mt-3">CIBIS Park, Jl. TB Simatupang No.2, RT.13/RW.5, Cilandak Tim., Kec.<br> Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta<br> 12560</p>
                        <h1 class="my-14 text-gray-500">Senin - Jumat (08.00 - 18.00)</h1>
                        <h1 class="font-bold text-2xl text-orange-600">Kontak Kami</h1>
                        <p class="text-gray-500 mt-3">+6282261564148</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- TUNGGU -->
        <div className="bg-orange-100 py-16">
        <h1 className="text-center text-3xl font-bold">Tunggu Apa Lagi? Gabung Bersama Kami!</h1>
        <div className="font-bold flex justify-center mt-7">
            <Button label="Daftar Sekarang" class="bg-orange-600 text-white font-bold"/>
        </div>
      </div>
        <Footer/>
    </main>
</template>

<script>
import Navbar from '@/components/molecules/Navbar.vue';
import Footer from '@/components/molecules/Footer.vue';
import Button from '@/components/atom/Button.vue';
import Lulusan from '@/components/molecules/lulusan.vue';
    export default {
    name: "TentangFazztrackPage",
    components: { Navbar, Footer, Button, Lulusan }
}
</script>