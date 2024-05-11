<template>
    <v-app>
        <v-main>
            <div class="grid">
                <search-bar></search-bar>
            </div>
        </v-main>
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
import SearchBar from './SearchBar.vue';

export default {
    components: {
        SearchBar
    }
}
</script>