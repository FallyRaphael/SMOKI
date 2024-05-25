<template>
    <v-app> 
        <navBar></navBar>   
        <v-main class="main-content">
            <Router-view></Router-view>
        </v-main>
        <app-footer> </app-footer>
    </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';


export default {
    components: {
        NavBar,
        AppFooter
    },
    data() {
        return {
            activePage: 0,
            useDarkNav: false,
        };
    },
}
</script>

<style>
.main-content {
  background-color: #f9f9f9; 
}

</style>