<template>
    <v-app>
        <v-main>
            <navBar></navBar>
            <div class="grid">
                <search-bar></search-bar>
            </div>
        </v-main>
        <app-footer> </app-footer>
    </v-app>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: auto;
    grid-gap: 10px;
    padding: 40px;
    margin-top: 100px;
    margin-left: 100px;
    margin-right: 100px;
}
</style>

<script>
import SearchBar from './components/SearchBar.vue';
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';


export default {
    components: {
        SearchBar,
        NavBar,
        AppFooter
    },
    data() {
        return {
            activePage: 0,
            useDarkNav: false,
            pages: [
                {
                    link: { text: "Home", url: "index.html" },
                    pageTitle: "Home Page",
                    content: "This is the home content",
                },
                {
                    link: { text: "About", url: "about.html" },
                    pageTitle: "About Page",
                    content: "This is the About content",
                },
                {
                    link: { text: "Contact", url: "contact.html" },
                    pageTitle: "Contact Page",
                    content: "This is the Contact content",
                },
            ],
        };
    },
}
</script>