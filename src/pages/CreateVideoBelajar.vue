<template>
    <Navbar />
        <main>
            <p>This Create</p>
        </main>
    <Footer />
</template>

<script>
import Navbar from '@/components/molecules/Navbar.vue';
import Footer from '@/components/molecules/Footer.vue';
    export default {
    name: "CreateVideoBelajarPage",
    components: {
        Navbar,
        Footer
    }
}
</script>