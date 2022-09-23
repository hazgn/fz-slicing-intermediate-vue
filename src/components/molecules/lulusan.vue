<template>
    <div>
        <div className="py-14 bg-gray-100 bg-city bg-no-repeat bg-bottom mt-14 px-28">
        <h1 className="text-center text-3xl font-bold">
          500+ lulusan bekerja di perusahaan ini
        </h1>
        <p className="text-center text-2xl mt-6">
          Fazztrack menjamin lulusan mendapat kesempatan membagun karir di
          perusahaan impian.
        </p>
        <div className="mt-7 grid grid-cols-8 gap-3">
            <div v-for="(element, index) in logo" :key="index">
              <img :src="element" alt="">
            </div>

        </div>
      </div>
    </div>
</template>


<script>
import { logoComp } from './logoData'


export default {
    name : 'lulusanComp',
    data(){
        return {
            logo : logoComp
        }
    }



}

</script>