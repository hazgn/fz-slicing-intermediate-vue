<template>
    <main>
        <Navbar/>
        <div className="px-28 pt-10 pb-10 bg-orange-100">
      <h1 className='text-3xl font-bold pl-5'>Belajar bersama expert dan creator terpecaya</h1>
        <ul className="flex justify-center font-semibold mt-10">
          <li className="mr-10 flex items-center">
            <img src="https://www.fazztrack.com/_nuxt/img/moat-supportive-orange.65a5c56.png" class="mr-2" alt="">
            Supportive Trainer
          </li>
          <li className="mr-10 flex items-center">
            <img src="https://www.fazztrack.com/_nuxt/img/moat-curriculum-orange.e8d1f10.png" class="mr-2" alt="">
            Kurikulum Sesuai Industri
          </li>
          <li className="mr-10 flex items-center">
            <img src="https://www.fazztrack.com/_nuxt/img/moat-curriculum-orange.e8d1f10.png" class="mr-2" alt="">
            Jaminan Disalurkan Kerja
          </li>
          <li className="mr-10 flex items-center">
            <img src="https://www.fazztrack.com/_nuxt/img/moat-curriculum-orange.e8d1f10.png" class="mr-2" alt="">
            Ulang Kelas Gratis
          </li>
        </ul>
      </div>
    
      <div className="px-28 pt-10 pb-10 flex justify-center bg-orange-100" >
      <Button @click="handlePost" label="Tambah kelas" class=" text-white font-bold w-52  bg-orange-600"/>
      </div>

      <div className='grid grid-cols-3 px-28 py-14 gap-5'>
        <div  v-for="(element, id) in minicamps.data" :key="id" className='p-5 border border-gray-400  rounded-lg'>
            <div className='flex'>
            <h1 v-if="element.location" className=' text-sm bg-blue-200 p-1 font-bold text-blue-800 rounded-md'>{{element.location}}</h1>
            <h1 v-if="element.isWork" className= ' text-sm ml-2 bg-orange-200 p-1 font-bold text-orange-800 rounded-md'>disalurkan kerja</h1>

        </div>
        <h1 className='text-xl font-semibold mt-5'>{{element.title}}, {{element.id}}</h1>
        <p className='mt-3'>{{element.description}}</p>
        <p className='text-sm mt-3'>{{element.startDate}} - {{element.endDate}}</p>
        <hr className='mt-5'/>
        <div className='flex mt-5'>
            <div className='flex justify-center rounded-md'>
                <img :src="element.trainerPicture" width="50" alt="" class="rounded-md">
            </div>
            <div className='text-md ml-4'>
                <h1 className='font-bold'>{{element.trainerName}}</h1>
                <h1>{{element.trainerTitle}}</h1>
            </div>
        </div>
        <hr className='mt-5'/>
        <div className='flex justify-between mt-3'>
            <h1 className='text-gray-500'>Harga Mini Bootcamp</h1>
            <h1 className='font-bold'>Rp {{element.price}}</h1>
        </div>
        <hr className='mt-5'/>
        <div className=' flex justify-center'>
        <h2 className="text-blue-500 font-bold flex items-center mt-5">Lihat Kurikulum</h2>
        </div>
    </div>
      </div>

          


    </main>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Navbar from "@/components/molecules/Navbar.vue";
import Button from "@/components/atom/Button.vue";



    export default{
    name: "MiniBootcampPage",
    methods: {
        ...mapActions({
            getListCamp: "minicamp/miniCampGet",
            postListcamp: "minicamp/miniCampPost"
        }),
        handlePost(){
          this.postListcamp().then(() => this.getListCamp()).catch((err) => err)
        }
    },
    computed: {
        ...mapState({}),
        ...mapGetters({
            minicamps: "minicamp/miniCampGet",
        }),
    },

    mounted() {
        this.getListCamp();
    },
    components: { Navbar, Button }
}
</script>