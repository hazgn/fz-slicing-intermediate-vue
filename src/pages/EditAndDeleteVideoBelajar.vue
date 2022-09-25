<template>
    <Navbar />
        <main class="bg-slate-200 h-full p-5 lg:px-20 lg:py-10">
            <p class="text-center font-bold text-2xl">Edit And/Or Delete Video Fazztrack</p>
            <div class="flex flex-col">
                <label>ID : {{this.$route.params.id}}</label>
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
            title:'',
            description:'',
            cover: '',
            rating: 0,
            level: '',
            price: 0
        }
    },
    computed: {
        ...mapGetters({
            dataUser: "auth/LoginUsers"
        })
    },
    methods: {
        ...mapActions({
            deleteVideo : 'videoBelajar/deleteVideo'
        }),
        inputChange(data){
            if(data.name === 'title') this.title = data.value
            if(data.name === 'cover') this.cover = data.value
            if(data.name === 'rating') this.rating = parseInt(data.value)
            if(data.name === 'level') this.level = data.value
            if(data.name === 'price') this.price = parseInt(data.value)
        },
        deleteHandler(){
                this.deleteVideo({id:this.$route.params.id, token: this.dataUser.data.token})
                    .then((res) => {
                        console.log(res);
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