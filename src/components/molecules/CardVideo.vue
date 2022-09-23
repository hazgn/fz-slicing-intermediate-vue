<template>
    <div class="mt-10">
        <div class="w-full bg-white shadow-xl lg:h-[490px] rounded-md xl:w-96 lg:w-96 pb-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img :src="payload.cover" class="w-full object-cover h-52 rounded-t-md" alt="logo" />
            <div class="p-5">
                <p class="text-xl font-bold mb-3">{{payload.title}}</p>
                <p class="text-lg text-slate-700 mb-3">{{payload.description.substring(0, 70)}}...</p>
                <div class="flex justify-between pb-3 border-b-2">
                    <div class="flex">
                        <div v-for="(idx) in payload.rating" :key="idx" class="pr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-secondary">
                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <p class="text-slate-700">{{payload.level}}</p>
                </div>
                <div class="mt-3 flex justify-between">
                    <p class="text-slate-700">Harga Modul</p>
                    <p class="text-secondary font-bold">{{payload.price}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"CardVideoComponent",
        props:{
            payload: {
                type: Object,
                required:true
            }
        }
    }
</script>