<template>
    <div class="w-full md:w-80 lg:w-64 pb-10 mb-10 lg:mb-0">
        <img :src="payload.image" class="object-none object-center w-full h-52 md:w-64 rounded-md" alt="logo">
        <p class="text-lg font-bold pt-3">{{payload.title}}</p>
        <p class="w-full lg:w-64 text-sm text-slate-700">{{payload.desc}}</p>
        <div class="relative">
            <div class="absolute -bottom-10 ">
                <div class="flex w-36 justify-between text-secondary cursor-pointer">
                    <p class="text-sm font-bold">Lihat Kurikulum</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name :"CardSelectBootcampComponent",
        props: {
            payload: {
                type: Object,
                required: true
            }
        }
    }
</script>