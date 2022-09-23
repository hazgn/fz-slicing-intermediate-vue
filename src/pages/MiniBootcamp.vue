<template>
    <main>
        <p>Mini Bootcamp</p>
        <div v-f></div>
        {{minicamps.data}}
    </main>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";



    export default{
        name:"MiniBootcampPage",
        methods : {
            ...mapActions({
            getListCamp: "minicamp/miniCampGet",
         }),
        },
        computed: {
        ...mapState({}),
        ...mapGetters({
        minicamps : "minicamp/miniCampGet",
        }),
        },
        mounted(){
            this.getListCamp()
        }
    }
</script>