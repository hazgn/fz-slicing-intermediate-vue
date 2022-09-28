<template>
        <input  class="border-2" :content="content" :type="type" :name="name"  v-model="value" @keyup="submitInput">
</template>


<script>


export default {
    name : 'TextArea',
    data(){
        return{
            value: this.content
        }
    },
    methods : {
        submitInput(){
            const data = {
                name : this.name,
                value : this.value
            }
            this.$emit("onsubmits", data)
        }
    },
    props : ["name", "type", "content"]

}

</script>