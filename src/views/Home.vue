<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
}
</script>

<template>
    <div class="home">
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
                <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
            </a>
        </div>

        <HelloWorld msg="Vite + Vue" />
    </div>
</template>

<style scoped>
.home {
    max-width: 1000px;
    margin: 0 auto;
}
</style>