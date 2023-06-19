<script>
import Home from './view/Home.vue'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
    Home,
    AppHeader,
    AppFooter
}
}
</script>

<template>
   <AppHeader></AppHeader>

    <router-view class="body"></router-view>

   <AppFooter></AppFooter>
</template>

<style lang="scss">

.body{
    background-color: #161616;
    color: white
}


</style>
