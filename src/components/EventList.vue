<template>
  <v-container>
    <v-row>
      <v-col v-for="event in events" :key="event.id" cols="12" sm="6" md="4">
        <v-card class="my-2">
          <v-img :src="event.imageurl" height="200px"></v-img> <!-- Event image -->
          <v-card-title>{{ event.event }}</v-card-title>
          <v-card-subtitle>{{ event.date }} at {{ event.time }}</v-card-subtitle>
          <v-card-text>
            {{ event.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="goToEvent(event.moreInfo)">
              More Info
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import events from '../assets/events.json';

export default {
  data() {
    return {
      events: events
    };
  },
  methods: {
    goToEvent(url) {
      window.location.href = url;
    }
  }
}
</script>
