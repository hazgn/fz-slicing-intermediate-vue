<template>
    <button :class="`w-[80%] p-3 lg:p-2 lg:pr-5 rounded-lg lg:pl-5  ${styles}`" v-on:click="submit">{{label}}</button>
</template>

<script>
    export default {
        name:'ButtonComponent',
        methods: {
            submit(){
                this.$emit('onSubmit', true)
            }
        },
        props: {
            label : {
                type: String,
                required: true
            },
            styles: {
                type: String,
                required: false,
                default: ''
            }
        }
    }
</script>