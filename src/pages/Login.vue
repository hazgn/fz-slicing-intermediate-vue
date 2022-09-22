<template>
    <main class="flex justify-center content-center">
        
        <div v-if="auth.isLoading" class="h-screen flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />
        </div>
        
        <div class="m-5 mt-10 p-5 border-2 lg:w-[50%] pt-10 pb-10" v-else>
            <div class="flex justify-center pb-5">
                <img :src="image" />
            </div>
            <p class="text-center text-2xl font-bold">Selamat Datang</p>
            <p class="text-xs text-center pt-1">Belum Punya Akun Fazztrack? <span class="text-secondary font-bold cursor-pointer" @click="this.$router.push('/register')">Daftar Disini</span></p>
            <label class="text-sm"><span class="text-red-700">*</span>Email</label>
            <TextArea type="text" name="email" class="w-full mb-3 px-3 py-2" @onsubmits="inputChange" />
            <label class="text-sm"><span class="text-red-700">*</span>Password</label>
            <TextArea type="password" name="password" class="w-full px-3 py-2" @onsubmits="inputChange" />
            
            <div v-if="auth.isError">
                <p class="pt-3 text-sm text-red-700">{{auth.errMsg}}</p>
            </div>
            
            <div class="mt-3 flex justify-between">
                <div class="flex">
                    <TextArea type="checkbox" class="mr-2" />
                    <p class="text-xs">ingat akun saya</p>
                </div>
                <p class="text-xs font-bold text-blue-800 cursor-pointer">Lupa Password</p>
            </div>
    
            <Button label="Masuk" styles="bg-secondary w-full text-white active:bg-primary h-12 font-bold mt-3" @onSubmit="loginHandler" />
            <p class="text-sm text-center pt-4">atau masuk menggunakan</p>
            <div class="border-2 p-2 rounded-md flex justify-center mt-4 active:bg-slate-400 cursor-pointer">
                <img src="https://img.icons8.com/color/344/google-logo.png" class="w-5 h-5" />
                <p class="pl-3">Google</p>
            </div>
        </div>

    </main>
</template>

<script>
    import TextArea from '@/components/atom/TextArea.vue';
    import Button from '@/components/atom/Button.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name:"LoginPage",
        data(){
            return {
                image: require('@/assets/svg/fazztrack-logo.svg'),
                email: '',
                password:'',
            }
        },
        computed:{
            ...mapGetters({
                auth:"auth/LoginUsers"
            })
        },
        methods: {
            ...mapActions({
                authAction: "auth/LoginUsers"
            }),
            loginHandler(){
                const body = {
                    email : this.email,
                    password : this.password
                }
                this.authAction(body)
            },
            inputChange(data){
                if(data.name === 'email') this.email = data.value
                if(data.name === 'password') this.password = data.value
            }
        },
        components: {
            TextArea,
            Button
        }
    }
</script>