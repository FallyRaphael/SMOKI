<template>
  <div>
    <v-toolbar dark prominent color="primary">
      <div class="grid" style=" "> <!-- Added margin-left and width -->
        <v-toolbar-title class="grow"> <strong>SMOKI</strong></v-toolbar-title>
        <div class="grid2">
          <router-link to="/" class="custom-router-link">Home</router-link>
          <router-link to="/events" class="custom-router-link">Events</router-link>
          <router-link to="/map" class="custom-router-link">Map</router-link>
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  margin-left: 50px;

}

.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  margin-top: 3px;
}
/* Scoped style or global CSS file */
.custom-router-link {
  text-decoration: none;
  color: white; /* Default color */
  transition: color 0.3s ease; /* Smooth transition for color change */
}

.custom-router-link:hover {
  text-decoration: none;
  color: lightblue; /* Color changes to blue on hover */
}


.router-link-active { /* Example: makes active links red */
  font-weight: bold;
}

</style>
