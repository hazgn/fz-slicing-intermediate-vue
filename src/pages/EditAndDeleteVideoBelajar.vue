<template>
    <Navbar />
        <main v-if="getVideo.isLoading" class="h-screen flex justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />
        </main>
        <main class="bg-slate-200 h-full p-5 lg:px-20 lg:py-10" v-else>
            <p class="text-center font-bold text-2xl">Edit And/Or Delete Video Fazztrack</p>
                  <!-- modal daisyUI start -->
                  <div class="modal" :class="isModal && 'modal-open'">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg" :class="rating > 5 ? 'text-red-600' : 'text-green-600'">{{rating > 5 ? 'There an Error' : 'Successed'}}</h3>
                        <p class="py-4">{{rating > 5 ? 'Rating Max 5' : 'Success Edit Video'}}</p>
                        <div class="modal-action">
                        <label for="my-modal" class="btn" @click="btnCloseModal">close</label>
                        </div>
                    </div>
                </div>
                <!-- modal daisyUi end -->
            <div class="flex flex-col">
                <label>ID : {{this.$route.params.id}}</label>
                <label class="pt-5">Title</label>
                <TextArea class="px-3 py-1" @onsubmits="inputChange" name="title" :value="title" />
                <label class="pt-5">description</label>
                <textarea name="description" v-model="this.description" cols="30" rows="10" class="px-3 py-1 h-32"></textarea>
                <label class="pt-5">Link Url Image</label>
                <TextArea class="px-3 py-1" @onsubmits="inputChange" name="cover" :value="cover" />
                <label class="pt-5">Rating</label>
                <TextArea type="number" class="px-3 py-1" @onsubmits="inputChange" name="rating" :value="rating" />
                <label class="pt-5">Level</label>
                <TextArea  class="px-3 py-1" @onsubmits="inputChange" name="level" :value="level"  />
                <label class="pt-5">Price</label>
                <TextArea type="number" class="px-3 py-1" @onsubmits="inputChange" name="price" :value="price" />
            </div>
            <div class="pt-5 flex justify-center">
                <Button label="Delete Video" styles="mr-3 bg-red-500 font-bold text-white" @onSubmit="deleteHandler" />
                <Button label="Edit Video" styles="bg-primary font-bold text-white" @onSubmit="editHandler" />
            </div>
        </main>
    <Footer />
</template>

<script>
    import Navbar from '@/components/molecules/Navbar.vue';
    import Footer from '@/components/molecules/Footer.vue';
    import TextArea from '@/components/atom/TextArea.vue';
    import Button from '@/components/atom/Button.vue';

    import {mapActions, mapGetters} from 'vuex';

    export default {
    name: "EditAndDeleteVideoBelajarPage",
    data(){
        return{
            title: '',
            description:'',
            cover: '',
            rating: 0,
            level: '',
            price: 0,
            isModal :false
        }
    },
    computed: {
        ...mapGetters({
            dataUser: "auth/LoginUsers",
            getVideo: 'videoBelajar/getVideoById'
        })
    },
    mounted(){
        const token = this.dataUser.data.token
        this.getVideoById({id:this.$route.params.id, token: token})
        .then((res) => {
            this.title = res.data.data.title || ''
            this.description = res.data.data.description || ''
            this.cover = res.data.data.cover || ''
            this.rating = res.data.data.rating || 0
            this.level = res.data.data.level || ''
            this.price = res.data.data.price || 0
        })
    },
    methods: {
        ...mapActions({
            editVideo: 'videoBelajar/editVideo',
            deleteVideo : 'videoBelajar/deleteVideo',
            getVideoById : 'videoBelajar/getVideoById'
        }),
        inputChange(data){
            if(data.name === 'title') this.title = data.value
            if(data.name === 'cover') this.cover = data.value
            if(data.name === 'rating') this.rating = parseInt(data.value)
            if(data.name === 'level') this.level = data.value
            if(data.name === 'price') this.price = parseInt(data.value)
        },
        editHandler(){
            if(this.rating > 5){
                this.isModal = !this.isModal
            }else{
                const body = {
                title: this.title,
                    description : this.description,
                    cover: this.cover,
                    rating: this.rating,
                    level: this.level,
                    price: this.price
                }
                this.editVideo({id:this.$route.params.id, body, token: this.dataUser.data.token})
                .then(()=> {
                    this.isModal = !this.isModal
                    setTimeout(()=> {
                        this.$router.replace('/modul-belajar')
                    }, 2000)
                }).catch((err) => {
                    console.log(err);
                })
            }
        },
        deleteHandler(){
                this.deleteVideo({id:this.$route.params.id, token: this.dataUser.data.token})
                    .then(() => {
                        this.$router.replace('/modul-belajar')
                    }).catch((err) => {
                        console.log(err);
                    })
        }
    },
    components: {
        Navbar,
        Footer,
        TextArea,
        Button
    }
}
</script>