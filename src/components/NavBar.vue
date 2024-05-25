<template>
  <div>
    <v-toolbar>
      <v-toolbar-title class="grow"><strong>SMOKI</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="nav-container">
        <div class="nav-links">
          <router-link :to="{ name: 'Home' }" class="custom-router-link">Home</router-link>
          <router-link :to="{ name: 'Events' }" class="custom-router-link">Events</router-link>
          <router-link :to="{ name: 'Map' }" class="custom-router-link">Map</router-link>
          <router-link v-if="isAuthenticated" :to="{ name: 'EventRegister' }" class="custom-router-link">Register
            Event</router-link>
          <router-link v-if="!isAuthenticated" :to="{ name: 'Profile' }"
            class="custom-router-link">Profile</router-link>
          <router-link v-if="isAuthenticated" @click="logout" :to="{ name: 'Logout' }"
            class="custom-router-link">Logout</router-link>
        </div>
      </div>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>


<script>
// eslint-disable-next-line no-unused-vars
import { useStore } from 'vuex';

export default {
  data: () => ({
    fab: false,
  }),
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', { username: 'user' });
    },
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style scoped>
 .v-toolbar {
  background-color: white;
  width: 80% !important;
}

.nav-container {
  display: flex;
  justify-content: center;
  flex: 1;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.custom-router-link {
  text-decoration: none;
  color: black;
  transition: color 0.3s ease;
}

.custom-router-link:hover {
  text-decoration: none;
  color: #5C6BC0;
}

.router-link-active {
  font-weight: bold;
}
</style>