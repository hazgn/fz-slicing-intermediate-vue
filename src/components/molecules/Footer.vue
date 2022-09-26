<template>
    <footer class="p-5 lg:p-20 lg:pt-10 lg:pb-10 bg-white shadow-md shadow-black">

        <div class="lg:flex lg:selection:justify-between border-b-[1px] pb-5">
            <div class="pb-3 lg:pb-0">
                <img :src="require('@/assets/svg/fazztrack-logo.svg')" alt="logo" />
                <p class="lg:w-[80%] text-sm pt-3 text-slate-500">Fazztrack adalah program pelatihan yang berkomitmen untuk mencetak developer yang profesional dan memberikan kesempatan untuk berkarir di perusahaan ternama.</p>
            </div>

            <div class="flex justify-between w-full flex-wrap lg:flex-nowrap">
                <div class="">
                    <p class="text-base font-bold">Kelas</p>
                    <p class="mt-1 mb-1 text-sm text-slate-500">Fullstack Mobile</p>
                    <p class="mt-1 mb-1 text-sm text-slate-500">Fullstack Website</p>
                    <p class="mt-1 mb-1 text-sm text-slate-500">Backend Javaspring</p>
                    <p class="mt-1 mb-1 text-sm text-slate-500">Backend Golang</p>
                    <p class="mt-1 mb-1 text-sm text-slate-500">Mini Bootcamp</p>
                    <p class="mt-1 mb-1 text-sm text-slate-500">Video Belajar</p>
                </div>
                <div>
                    <p class="text-base font-bold">Dukungan</p>
                    <p class="mt-1 mb-1 text-sm text-slate-500">Cicil Setelah Kerja (ISA)</p>
                    <p class="mt-1 mb-1 text-sm text-slate-500">Career Ready</p>
                    <p class="mt-1 mb-1 text-sm text-slate-500">FAQ</p>
                    <p class="mt-1 mb-1 text-sm text-slate-500">Hire Graduates</p>
                </div>
                <div class="mt-3 lg:mt-0">
                    <p class="text-base font-bold">Tentang</p>
                    <p class="mt-1 mb-1 text-sm text-slate-500">Cerita Alumni</p>
                    <p class="mt-1 mb-1 text-sm text-slate-500">Sekilas Fazztrack</p>
                </div>
                <div class="pr-14 lg:pr-0 mt-3 lg:mt-0">
                    <p class="text-base font-bold">Sosial Media</p>
                    <div class="flex justify-start mt-1 mb-1">
                        <img :src="require('@/assets/img/instagram.png')" alt="logo" />
                        <p class="text-sm text-slate-500 pl-2">Instagram</p>
                    </div>
                    <div class="flex justify-start mt-1 mb-1">
                        <img :src="require('@/assets/img/facebook.png')" alt="logo" />
                        <p class="text-sm text-slate-500 pl-2">Facebook</p>
                    </div>
                    <div class="flex justify-start mt-1 mb-1">
                        <img :src="require('@/assets/img/youtube.png')" alt="logo" />
                        <p class="text-sm text-slate-500 pl-2">Youtube</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5 flex justify-between flex-wrap lg:flex-nowrap">
            <p class="text-sm text-slate-500"><strong>© 2022 Fazztrack.</strong> All Rights Reserved</p>
            <div class="flex justify-between lg:w-[28%]">
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-slate-500">
                        <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                    </svg>
                        <p class="text-sm text-slate-500">+6281132010888</p>
                    </div>
                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-slate-500  mr-1">
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                        </svg>
                        <p class="text-sm text-slate-500">hello@fazztrack.com</p>
                    </div>
            </div>
        </div>

    </footer>
</template>

<script>
    export default{
        name: "FooterComponent"
    }
</script>