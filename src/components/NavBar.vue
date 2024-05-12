<template>
  <div>
    <v-toolbar dark prominent color="white">
      <div class="grid">
        <v-toolbar-title class="grow"><strong>SMOKI</strong></v-toolbar-title>
        <div class="grid2">
          <router-link :to="{name: 'Home'}" class="custom-router-link">Home</router-link>
          <router-link :to="{name: 'Events'}" class="custom-router-link">Events</router-link>
          <router-link :to="{name: 'Map'}" class="custom-router-link">Map</router-link>
          <router-link :to="{name: 'Profile'}" class="custom-router-link">Profile</router-link>
        </div>
        <v-spacer></v-spacer>
      </div>
    </v-toolbar>
  </div>
</template>


<script>
export default {
  data: () => ({
    fab: false,
  })
}

</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  margin-left: 50px;

}

.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  margin-top: 3px;
}

.custom-router-link {
  text-decoration: none;
  color: black;
  transition: color 0.3s ease;
}

.custom-router-link:hover {
  text-decoration: none;
  color: lightblue;
}


.router-link-active {
  font-weight: bold;
}
</style>
