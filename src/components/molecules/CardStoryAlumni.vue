<template>
    <div class="mt-10">
        <div class="w-full bg-white shadow-xl lg:h-[490px] rounded-md lg:w-80 pb-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <img :src="payload.image" class="w-full object-cover h-52 lg:w-80 rounded-t-md" alt="logo">
            <div class="p-5">
                <p class="text-lg font-bold pt-3 pb-2">{{payload.titke}}</p>
                <p class="w-full lg:w-64 text-sm text-slate-700">{{payload.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"CardStoryAlumniComponent",
        props:{
            payload : {
                type: Object,
                required: true
            }
        }
    }
</script>