<template>
    <v-app>
        <v-main>
            <navBar :pages="pages" :active-page="activePage" :nav-link-click="(index) => activePage = index">

            </navBar>
            <page-viewer :page="pages[activePage]"></page-viewer>
        </v-main>
        <app-footer> </app-footer>
    </v-app>
</template>

<script>
import PageViewer from './components/PageViewer.vue';
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';


export default {
    components: {
        PageViewer,
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