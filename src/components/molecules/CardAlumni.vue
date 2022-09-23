<template>
    <div class="bg-white w-full md:w-[360px] lg:w-[520px] p-5 rounded-md mt-5 md:mt-5">
        <p class="text-sm text-slate-700">{{payload.desc}}</p>
        <div class="pt-2 flex items-center">
            <img :src="payload.image" alt="profile" class="rounded-full h-10 w-10 mb-2">
            <div>
            </div>
                <div class="ml-3 mb-2">
                    <div>  
                    </div>
                    <div class="flex">
                        <p class="text-sm font-bold mr-1">{{payload.name}}</p>
                        <div class="flex text-slate-700">
                        <p class="pr-1 text-sm">(</p>
                            <img :src="require('@/assets/img/instagram.png')" alt="logo" class="h-5 w-5">
                        <p class="pl-1 text-sm">{{payload.instagram}} )</p>
                        </div>
                    </div>
                    <p class="text-sm text-slate-700">{{payload.work}}</p>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"CardAlumniComponent",
        props : {
            payload : {
                type: Object,
                required: true
            }
        }
    }
</script>