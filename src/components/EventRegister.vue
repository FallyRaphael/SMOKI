<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>Register an Event</v-card-title>
          <v-card-text>
            <v-text-field label="Event Name" v-model="eventName"></v-text-field>
            <v-text-field label="Event Date" v-model="eventDate"></v-text-field>
            <v-text-field label="Event Time" v-model="eventTime"></v-text-field>
            <v-text-field label="Latitude" v-model="eventLat"></v-text-field>
            <v-text-field label="Longitude" v-model="eventLng"></v-text-field>
            <v-textarea label="Description" v-model="eventDescription"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="registerEvent">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      eventName: '',
      eventDate: '',
      eventTime: '',
      eventImage: null,
      eventLat: '',
      eventLng: '',
      eventDescription: ''
    };
  },
  methods: {
    registerEvent() {
      const geodata = {
        lat: parseFloat(this.eventLat),
        lng: parseFloat(this.eventLng)
      };
      axios.post('http://localhost:3000/register-event', {
        eventName: this.eventName,
        eventDate: this.eventDate,
        eventTime: this.eventTime,
        eventImage: "/viennacruising.jpg", // Handle this appropriately for file upload
        eventGeodata: geodata,
        eventDescription: this.eventDescription
      })
      // eslint-disable-next-line no-unused-vars
      .then(response => {
        alert('Event registered successfully!');
        this.resetForm();
      })
      .catch(error => {
        console.error('Error registering the event:', error);
        alert('Failed to register the event. Please try again.');
      });
    },
    resetForm() {
      this.eventName = '';
      this.eventDate = '';
      this.eventTime = '';
      this.eventImage = null;
      this.eventLat = '';
      this.eventLng = '';
      this.eventDescription = '';
    }
  }
}
</script>
