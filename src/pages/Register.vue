<template>
    <main class="flex justify-center items-center py-10">
        <div class="border-2 p-14 rounded-sm">
            <div class="flex items-center flex-col ">
                <img :src="require('@/assets/svg/fazztrack-logo.svg')"  />
                <h3 class="text-lg font-medium mt-7">Daftar & Mulai Belajar</h3>
                <p  class="text-sm text-gray-500 mt-2">Sudah punya akun Fazztrack? <span  @click="LogiPage" class="cursor-pointer text-orange-400">Masuk disini</span></p>
            </div>
            <form class="mt-5" action=""  @submit.prevent="submitsHandle()">
                <div>
                    <h1><span class="text-red-600">* </span>Nama Lengkap</h1>
                    <TextArea name="name" class="border-gray-200 outline-none px-3 py-2 w-96 rounded-sm mt-1 text-sm" placeholder="Masukan nama lengkap..." @onsubmits="InputData" />
                </div>
                <div class="mt-5">
                    <h1><span class="text-red-600">* </span>Email</h1>
                    <TextArea  name="email" class="border-gray-200 outline-none px-3 py-2 w-96 rounded-sm mt-1 text-sm" placeholder="Masukan nama e-mail..." @onsubmits="InputData" />
                </div>
                <div class="mt-5">
                    <h1><span class="text-red-600">* </span>No. Handphone</h1>
                    <TextArea  name="hp" class="border-gray-200 outline-none px-3 py-2 w-96 rounded-sm mt-1 text-sm" placeholder="Masukan no. handphone..." @onsubmits="InputData" />
                </div>
                <div class="mt-5">
                    <h1><span class="text-red-600">* </span>Kata Sandi</h1>
                    <TextArea name="password" class="border-gray-200 outline-none px-3 py-2 w-96 rounded-sm mt-1 text-sm" placeholder="Masukan kata sandi..." @onsubmits="InputData" />
                </div>
                <div class="mt-5">
                    <h1><span class="text-red-600">* </span>Konfirmasi Kata Sandi</h1>
                    <TextArea name="confirm" class="border-gray-200 outline-none px-3 py-2 w-96 rounded-sm mt-1 text-sm" placeholder="Masukan ulang kata sandi..." @onsubmits="InputData" />
                </div>
                <div class="mt-5 flex items-center px-1">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="mr-2 " @click="setujuConfirm">
                    <label for="vehicle1">Saya menyetujui <span class="font-bold text-blue-900 cursor-pointer">Syarat dan Ketentuan</span></label><br>
                </div>
                <Button label="Daftar Fazztrack" class="w-full bg-orange-400 mt-5 text-white"/>
                <h1 v-if="wrong" class="text-red-600 text-center mt-5">Failed please confirm/same password</h1>
            </form>

        </div>
    </main>
</template>

<script>
import TextArea from '@/components/atom/TextArea.vue';
import Button from '@/components/atom/Button.vue';
    export default {
    name: "RegisterPage",
    components: { TextArea, Button },
    data(){
        return {
            name : '',
            email : '',
            nohp : '',
            password : '',
            confirm : '',
            wrong : false,
            setuju : false
        }
    },
    methods: {
        setujuConfirm(){
            this.setuju = !this.setuju
            console.log(this.setuju)
        },
        submitsHandle(){
            this.wrong = false
            const data = {
            name : this.name,
            email : this.email,
            nohp : this.nohp,
            password : this.password,
            confirm : this.confirm,
            }
            if(this.password == this.confirm && this.setuju == true){
                localStorage.setItem('user', JSON.stringify(data))
                this.$router.push('/login')
            } else {
                this.wrong = true
            }
        },
        LogiPage(){
            this.$router.push('/login')
        },
        InputData(data){
            const {name, value} = data
            if(name == 'name'){
                this.name = value
            } else if(name == 'email'){
                this.email = value
            } else if(name == 'hp'){
                this.nohp = value
            } else if(name == 'password'){
                this.password = value
            } else if(name == 'confirm'){
                this.confirm = value
            }
        }
    },
}
</script>