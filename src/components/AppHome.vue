<template>
            <div class="header">
                <h1>Find Events in your Area!</h1>
            </div>
            <v-container>
                <v-carousel cycle height="400px" hide-delimiters>
                    <v-carousel-item v-for="event in featuredEvents" :key="event.id" :src="event.imageurl"
                        class="fill-height">
                        <v-row class="overlay" align="center" justify="center">
                            <v-card class="info-card">
                                <v-card-title>{{ event.event }}</v-card-title>
                                <v-card-text>{{ event.date }} at {{ event.time }}</v-card-text>
                                <v-card-actions>
                                    <v-btn color="yellow" dark @click="goToEvent(event.moreInfo)">
                                        Learn More
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-row>
                    </v-carousel-item>
                </v-carousel>
            </v-container>
</template>

    <style scoped>
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        margin: 100px;
        justify-content: center;
        align-items: center;
    }

    .header {
        margin-top: 40px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    .overlay {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 20px;
    }

    .info-card {
        color: #FFFFFF;
        background-color: rgba(0, 0, 0, 0.6);
    }

    </style>

    <script>
    //import SearchBar from './SearchBar.vue';
    import eventData from '../../../smoki-backend/events.json';

    export default {
        components: {
            // SearchBar
        },
        data() {
            return {
                featuredEvents: eventData
            }
        },
        methods: {
            goToEvent(url) {
                window.location.href = url;
            }
        },
    }

</script>
