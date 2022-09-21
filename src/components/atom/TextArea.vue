<template>
        <input  class="border-2" :type="type" :name="name"  v-model="value" @keyup="submitInput">
</template>


<script>


export default {
    name : 'TextArea',
    data(){
        return{
            value: this.value
        }
    },
    methods : {
        submitInput(){
            const data = {
                name : this.name,
                value : this.values
            }
            this.$emit("onsubmits", data)
        }
    },
    props : ["name", "type"]

}

</script>