<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>Register an Event</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="isFormValid">
              <v-text-field
                label="Event Name"
                v-model="eventName"
                :rules="[rules.required, rules.maxLength(50)]"
                required
              ></v-text-field>
              <v-text-field
                label="Event Date"
                v-model="eventDate"
                :rules="[rules.required, rules.dateFormat]"
                required
              ></v-text-field>
              <v-text-field
                label="Event Time"
                v-model="eventTime"
                :rules="[rules.required, rules.timeFormat]"
                required
              ></v-text-field>
              <v-text-field
                label="Latitude"
                v-model="eventLat"
                :rules="[rules.required, rules.number]"
                required
              ></v-text-field>
              <v-text-field
                label="Longitude"
                v-model="eventLng"
                :rules="[rules.required, rules.number]"
                required
              ></v-text-field>
              <v-textarea
                label="Description"
                v-model="eventDescription"
                :rules="[rules.required, rules.maxLength(200)]"
                required
              ></v-textarea>
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

export default {
  data() {
    return {
      eventName: '',
      eventDate: '',
      eventTime: '',
      eventImage: null,
      eventLat: '',
      eventLng: '',
      eventDescription: '',
      isFormValid: false,
      rules: {
        required: value => !!value || 'Required.',
        maxLength: max => value => value.length <= max || `Max ${max} characters.`,
        dateFormat: value => /^\d{4}-\d{2}-\d{2}$/.test(value) || 'Date must be in YYYY-MM-DD format.',
        timeFormat: value => /^\d{2}:\d{2}$/.test(value) || 'Time must be in hh:mm format.',
        number: value => !isNaN(parseFloat(value)) && isFinite(value) || 'Must be a number.'
      }
    };
  },
  methods: {
    registerEvent() {
      if (this.$refs.form.validate()) {
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
        .then(response => {
          alert('Event registered successfully!');
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
      this.eventImage = null;
      this.eventLat = '';
      this.eventLng = '';
      this.eventDescription = '';
      this.isFormValid = false;
    }
  }
}
</script>

<style scoped>
</style>
