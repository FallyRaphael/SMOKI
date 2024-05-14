<template>
  <v-container>
    <!-- Filter UI -->
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="search" label="Search events" outlined clearable></v-text-field>
      </v-col>
    </v-row>

    <!-- Events List -->
    <v-row>
      <v-col v-for="filteredEvent in filteredEvents" :key="filteredEvent.id" cols="12" sm="6" md="4">
        <v-card class="my-2">
          <v-img :src="filteredEvent.imageurl" height="200px"></v-img>
          <v-card-title>{{ filteredEvent.event }}</v-card-title>
          <v-card-subtitle>{{ filteredEvent.date }} at {{ filteredEvent.time }}</v-card-subtitle>
          <v-card-text>
            {{ filteredEvent.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="goToEvent(filteredEvent.moreInfo)">
              More Info
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import events from '../../../smoki-backend/events.json';

export default {
  data() {
    return {
      events: events,
      search: ''
    };
  },
  computed: {
    filteredEvents() {
      return this.events.filter(event => {
        return event.event.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    goToEvent(url) {
      window.location.href = url;
    }
  }
}
</script>
