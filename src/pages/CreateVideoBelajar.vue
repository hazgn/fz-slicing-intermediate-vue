<template>
    <Navbar />
        <main class="bg-slate-200 h-full p-5 lg:px-20 lg:py-10">
            <p class="text-center font-bold text-2xl">Add Video Belajar Online Fazztrack</p>
                <!-- modal daisyUI start -->
                <div class="modal" :class="isModal && 'modal-open'">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg" :class="rating > 5 ? 'text-red-600' : 'text-green-600'">{{rating > 5 ? 'There an Error' : 'Successed'}}</h3>
                        <p class="py-4">{{rating > 5 ? 'Rating Max 5' : 'Success Add Video'}}</p>
                        <div class="modal-action">
                        <label for="my-modal" class="btn" @click="btnCloseModal">close</label>
                        </div>
                    </div>
                </div>
                <!-- modal daisyUi end -->
            <div class="flex flex-col">
                <label class="pt-5">Title</label>
                <TextArea class="px-3 py-1" @onsubmits="inputChange" name="title" />
                <label class="pt-5">description</label>
                <textarea name="description" v-model="this.description" cols="30" rows="10" class="px-3 py-1 h-32"></textarea>
                <label class="pt-5">Link Url Image</label>
                <TextArea class="px-3 py-1" @onsubmits="inputChange" name="cover" />
                <label class="pt-5">Rating</label>
                <TextArea type="number" class="px-3 py-1" @onsubmits="inputChange" name="rating" />
                <label class="pt-5">Level</label>
                <TextArea  class="px-3 py-1" name="level" />
                <label class="pt-5">Price</label>
                <TextArea type="number" class="px-3 py-1" @onsubmits="inputChange" name="price" />
            </div>
            <div class="pt-5 flex justify-center">
                <Button label="Add Video" styles="bg-primary font-bold text-white" @onSubmit="addHandler" />
            </div>
        </main>
    <Footer />
</template>

<script>
    import Navbar from '@/components/molecules/Navbar.vue';
    import Footer from '@/components/molecules/Footer.vue';
    import TextArea from '@/components/atom/TextArea.vue';
    import Button from '@/components/atom/Button.vue';

    import {mapActions, mapGetters} from 'vuex'

    export default {
    name: "CreateVideoBelajarPage",
    data(){
        return {
            title:'',
            description:'',
            cover: '',
            rating: 0,
            level: '',
            price: 0,
            isModal : false
        }
    },
    computed: {
        ...mapGetters({
            dataUser: "auth/LoginUsers"
        })
    },
    methods: {
        ...mapActions({
            cratePosting : 'videoBelajar/postVideo'
        }),
        inputChange(data){
            if(data.name === 'title') this.title = data.value
            if(data.name === 'cover') this.cover = data.value
            if(data.name === 'rating') this.rating = parseInt(data.value)
            if(data.name === 'level') this.level = data.value
            if(data.name === 'price') this.price = parseInt(data.value)
        },
        addHandler(){
        const token = this.dataUser.data.token
        const create = {
                body : {
                    title: this.title,
                    description : this.description,
                    cover: this.cover,
                    rating: this.rating,
                    level: this.level,
                    price: this.price
                },
                token : token
            }

            if(this.rating > 5){
                this.isModal = !this.isModal
            } else{
                this.cratePosting(create)
                .then((res) => {
                    if(res){
                        this.isModal = !this.isModal
                        setTimeout(()=> {
                            this.$router.replace('/modul-belajar')
                        }, 2000)
                    }
                }).catch((err) => {
                        console.log(err);
                })
            }
        },
        btnCloseModal(){
            this.isModal = false
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