<template>
  <div>
    <v-toolbar bg-indigo-darken-1>
      <div class="grid">
        <v-toolbar-title class="grow"><strong>SMOKI</strong></v-toolbar-title>
        <div class="grid2">
          <router-link :to="{name: 'Home'}" class="custom-router-link">Home</router-link>
          <router-link :to="{name: 'Events'}" class="custom-router-link">Events</router-link>
          <router-link :to="{name: 'Map'}" class="custom-router-link">Map</router-link>
          <router-link :to="{name: 'EventRegister'}" class="custom-router-link">Register Event</router-link>
          <router-link v-if="!isAuthenticated" :to="{name: 'Profile'}" class="custom-router-link">Profile</router-link>
          <router-link v-if="isAuthenticated" @click="logout" :to="{name: 'Logout'}" class="custom-router-link">Logout</router-link>
        </div>
        <v-spacer></v-spacer>
      </div>
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
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  margin-top: 10px;
  margin-left: 50px;

}

.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  margin-top: 2px;
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
