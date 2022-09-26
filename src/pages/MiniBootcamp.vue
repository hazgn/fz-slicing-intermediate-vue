<template>
    <main>
        <Navbar/>
        <p>Mini Bootcamp</p>
        <div v-for="(element, id) in minicamps.data" :key="id">
            <div>
                {{element}}         
            </div>
        </div>
    </main>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Navbar from "@/components/molecules/Navbar.vue";



    export default{
    name: "MiniBootcampPage",
    methods: {
        ...mapActions({
            getListCamp: "minicamp/miniCampGet",
        }),
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
    components: { Navbar }
}
</script>