<template>
    <main>
        <Navbar />
        <p>This Home</p>
    </main>
</template>

<script>
    import Navbar from '@/components/molecules/Navbar.vue';
    export default{
        name:'HomePage',
        components : {
            Navbar
        }
    }
</script>