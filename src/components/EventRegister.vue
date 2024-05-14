<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>Register an Event</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="isFormValid">
              <!-- Existing form fields -->
              <v-text-field label="Event Name" v-model="eventName" :rules="[rules.required, rules.maxLength(50)]" required></v-text-field>
              <v-text-field label="Event Date" v-model="eventDate" :rules="[rules.required, rules.dateFormat]" required></v-text-field>
              <v-text-field label="Event Time" v-model="eventTime" :rules="[rules.required, rules.timeFormat]" required></v-text-field>
              <v-text-field label="Ticket Price" v-model="ticketPrice" :rules="[rules.required, rules.number]" required></v-text-field>
              <v-text-field label="More Info Link" v-model="moreInfoLink" :rules="[rules.url]"></v-text-field>
              
              <!-- File input for image upload -->
              <v-file-input label="Event Image" v-model="eventImage" :rules="[rules.required]" required></v-file-input>
              
              <!-- Map and other fields -->
              <div id="map" style="height: 400px;">
                <l-map style="height: 100%;" :zoom="zoom" :center="mapCenter" @click="setEventLocation">
                  <l-tile-layer :url="tileLayerUrl"></l-tile-layer>
                  <l-marker :lat-lng="eventLocation"></l-marker>
                </l-map>
              </div>
              <v-textarea label="Description" v-model="eventDescription" :rules="[rules.required, rules.maxLength(200)]" required></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="registerEvent" :disabled="!isFormValid">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import router from '../router';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      eventName: '',
      eventDate: '',
      eventTime: '',
      ticketPrice: '',
      moreInfoLink: '',
      eventLat: '',
      eventLng: '',
      eventImage: null, // Add this line
      eventDescription: '',
      isFormValid: false,
      mapCenter: [48.2225, 16.4256], // Default center, can be changed
      zoom: 13,
      eventLocation: [48.2225, 16.4256], // Default location
      tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      rules: {
        required: value => !!value || 'Required.',
        maxLength: max => value => value.length <= max || `Max ${max} characters.`,
        dateFormat: value => /^\d{4}-\d{2}-\d{2}$/.test(value) || 'Date must be in YYYY-MM-DD format.',
        timeFormat: value => /^\d{2}:\d{2}$/.test(value) || 'Time must be in hh:mm format.',
        number: value => !isNaN(parseFloat(value)) && isFinite(value) || 'Must be a number.',
        url: value => !value || /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(value) || 'Must be a valid URL.'
      }
    };
  },
  methods: {
    registerEvent() {
      if (this.$refs.form.validate()) {
        const formData = new FormData();
        formData.append('eventName', this.eventName);
        formData.append('eventDate', this.eventDate);
        formData.append('eventTime', this.eventTime);
        formData.append('ticketPrice', this.ticketPrice);
        formData.append('moreInfoLink', this.moreInfoLink);
        formData.append('eventGeodata', JSON.stringify({ lat: this.eventLat, lng: this.eventLng }));
        formData.append('eventDescription', this.eventDescription);
        if (this.eventImage) {
          formData.append('eventImage', this.eventImage);
        }

        axios.post('http://localhost:3000/register-event', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          alert('Event registered successfully!');
          router.push('/events');
          this.resetForm();
        })
        .catch(error => {
          console.error('Error registering the event:', error);
          alert('Failed to register the event. Please try again.');
        });
      } else {
        alert('Please fill in the form correctly.');
      }
    },
    resetForm() {
      this.eventName = '';
      this.eventDate = '';
      this.eventTime = '';
      this.ticketPrice = '';
      this.moreInfoLink = '';
      this.eventImage = null;
      this.eventLat = '';
      this.eventLng = '';
      this.eventDescription = '';
      this.isFormValid = false;
    },
    setEventLocation(event) {
      const { lat, lng } = event.latlng;
      this.eventLat = lat.toFixed(6);
      this.eventLng = lng.toFixed(6);
      this.eventLocation = [lat, lng];
    }
  }
}
</script>

<style scoped>
#map {
  margin-top: 20px;
}
</style>
