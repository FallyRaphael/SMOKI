<template>
    <link rel="stylesheet" href="//unpkg.com/leaflet/dist/leaflet.css" />

    <l-map :zoom="zoomLevel" :center="center" style="height: 500px; width: 100%;">
        <l-tile-layer :url="urlTemplate"></l-tile-layer>
        <l-marker v-for="event in events" :key="event.id" :lat-lng="{ lat: event.geodata.lat, lng: event.geodata.lng }"
            @click="showEventDetails(event)">
            <l-popup>
                <div>
                    <h3>{{ event.event }}</h3>
                    <p>{{ event.date }} at {{ event.time }}</p>
                    <p>{{ event.description }}</p>
                    <v-btn color="primary" @click="getDirections(event.geodata)">Get Directions</v-btn>
                </div>
            </l-popup>
        </l-marker>
    </l-map>

    <!-- <v-dialog v-model="dialog">
        <v-card>
            <v-card-title>{{ selectedEvent.event }}</v-card-title>
            <v-card-text>
                <p>{{ selectedEvent.date }} at {{ selectedEvent.time }}</p>
                <p>{{ selectedEvent.description }}</p>
                <a :href="selectedEvent.moreInfo" target="_blank">More Info</a>
            </v-card-text>
            <v-card-actions>
                <v-btn color="secondary" @click="dialog = false">Close</v-btn>
                <v-btn color="primary" @click="getDirections(selectedEvent.geodata)">Get Directions</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog> -->

</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import events from '../assets/events.json';

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup
    },
    data() {
        return {
            center: [48.2082, 16.3738], // Center of Vienna
            zoomLevel: 13,
            urlTemplate: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            events: events,
            dialog: false,
            selectedEvent: null
        };
    },
    methods: {
        showEventDetails(event) {
            this.selectedEvent = event;
            this.dialog = true;
        },
        getDirections(geodata) {
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${geodata.lat},${geodata.lng}`, '_blank');
        }
    }
}
</script>