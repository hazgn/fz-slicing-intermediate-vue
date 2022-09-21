<template>
    <header class="sticky top-0 z-10 bg-white shadow-md p-[16px] lg:px-20 lg:pt-7 lg:pb-7">
        <div class="flex items-center justify-between">
            <router-link to="/" v-on:click="hamburgerToggler=false">
                <img :src="image" alt="logo" class="cursor-pointer"/>
            </router-link>

            <div class="flex items-center absolute right-5">
                <div class="lg:hidden" :class="{'hamburger-active' : hamburgerToggler}" v-on:click="hamburgerToggler=!hamburgerToggler">
                    <span class="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                    <span class="hamburger-line transition duration-300 ease-in-out"></span>
                    <span class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                </div>

                <nav :class="{'nav-active' : hamburgerToggler}" class="fixed overflow-auto bottom-0  bg-white lg:bg-opacity-0 transition-all -right-full shadow-md top-12 duration-700 w-full lg:w-full lg:static lg:-mr-16 xl:mr-20 lg:shadow-none  lg:overflow-visible ">
                    <ul class="lg:flex ">
                        <li class="list-nav" v-on:click="isClass=!isClass, isAbout=false, isSupport=false">
                            <p>Kelas</p>
                            <Arrow class="arrow-down transition duration-300" :class="{'-rotate-180 lg:-rotate-0' : isClass}" />
                        </li>
                        <div :class="{'list-nav-sub' : isClass}" class="hidden">
                            <ul class="p-5 text-slate-400 lg:border-r-[1px] lg:border-slate-300">
                                <p>Bootcamp</p>
                                <li class="mt-5 text-slate-700 cursor-pointer">Fullstack Mobile</li>
                                <li class="mt-5 text-slate-700 cursor-pointer">Fullstack Website</li>
                                <li class="mt-5 text-slate-700 cursor-pointer">Backend Javaspring</li>
                                <li class="mt-5 text-slate-700 cursor-pointer">Backend Golang</li>
                            </ul>
                            <ul class="p-5 text-slate-400 lg:border-r-[1px] lg:border-slate-300">
                                <p>MINI BOOTCAMP</p>
                                <li class="mt-5 text-slate-700 cursor-pointer">Digital Marketing</li>
                                <li class="mt-5 text-slate-700 cursor-pointer">QA Automation Engineer</li>
                                <li class="mt-5 text-slate-700 cursor-pointer">Kelas Persiapan Bootcamp</li>
                                <router-link to="/minicamp" v-on:click="isClass=false, isAbout=false, isSupport=false, hamburgerToggler=false">
                                    <li class="mt-5 text-slate-700 cursor-pointer">Lihat Semua</li>
                                </router-link>
                            </ul>
                            <ul class="p-5 text-slate-400">
                                <p>Video Belajar</p>
                                <router-link to="/modul-belajar">
                                    <li class="mt-5 text-slate-700 cursor-pointer">Lihat Semua</li>
                                </router-link>
                            </ul>
                        </div>
                        <li  class="list-nav" v-on:click="isSupport=!isSupport, isClass=false, isAbout=false">
                            <p>Dukungan</p>
                            <Arrow class="arrow-down transition duration-300" :class="{'-rotate-180 lg:-rotate-0' : isSupport}" />
                        </li>
                        <div :class="{'list-nav-sub lg:ml-40' : isSupport}" class="hidden">
                                <ul class="pl-5">
                                <li class="mt-5 text-slate-700 cursor-pointer">Cicilan Setelah Kerja (ISA)</li>
                                <li class="mt-5 text-slate-700 cursor-pointer">Career Ready</li>
                                <li class="mt-5 pb-5 lg:pb-0 text-slate-700 cursor-pointer">FAQ</li>
                            </ul>
                        </div>
                        <li class="list-nav" v-on:click="isAbout=!isAbout, isSupport=false, isClass=false">
                            <p>Tentang</p>
                            <Arrow class="arrow-down transition duration-300" :class="{'-rotate-180 lg:-rotate-0' : isAbout}" />
                        </li>
                        <div :class="{'list-nav-sub lg:ml-80' : isAbout}" class="hidden">
                            <ul class="p-5 text-slate-400 lg:border-r-[1px] lg:border-slate-300">Alumni
                                <li class="mt-5 text-slate-700 cursor-pointer">Cerita Alumni</li>
                            </ul>
                            <ul class="p-5 text-slate-400">Fazztrack
                                <router-link to="/tentang">
                                    <li class="mt-5 text-slate-700 cursor-pointer">Sekilas Fazztrack</li>
                                </router-link>
                            </ul>
                        </div>
                        <li class="list-nav">
                            <p class="lg:w-32">Hire Our Graduates</p>
                        </li>
                        <li>
                            <div class="flex flex-col mt-5 items-center lg:flex-row lg:mt-1 lg:relative lg:right-12 xl:right-auto lg:top-1">
                                <Button label="Masuk" styles="bg-white border-[1px] hover:bg-slate-100 lg:mr-5" @onSubmit="onLogin" />
                                <Button label="Daftar" styles="bg-[#2557a7] hover:bg-primary text-white mt-5 lg:mt-0" @onSubmit="onRegister" />
                            </div>
                        </li>
                    </ul>
                </nav>

            </div>
            
        </div>
    </header>
</template>

<script>
    import Arrow from '@/components/atom/Arrow.vue'
    import Button from '../atom/Button.vue'
    export default {
        name: "NavbarComponent",
        data(){
            return{
                image : require('@/assets/svg/fazztrack-logo.svg'),
                hamburgerToggler: false,
                isClass:false,
                isSupport:false,
                isAbout:false
            }
        },
        methods : {
            onRegister(){
                this.$router.push('/login')
            },
            onLogin(){
                this.$router.push('/register')
            }
        },
        components: {
    Arrow,
    Button,
}
    }
</script>