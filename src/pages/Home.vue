<template>
    <main>
        <Navbar />
        <p>This Home</p>
        <Footer />
    </main>
</template>

<script>
    import Navbar from '@/components/molecules/Navbar.vue';
    import Footer from '@/components/molecules/Footer.vue';

    export default{
        name:'HomePage',
        components : {
            Navbar,
            Footer
        }
    }
</script>