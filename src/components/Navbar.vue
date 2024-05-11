<template>
  <div>
    <v-toolbar dark prominent color="primary">
      <div class="grid">
        <v-toolbar-title class="grow"><strong>SMOKI</strong></v-toolbar-title>
        <div class="grid2">
          <router-link :to="{name: 'Home'}" class="custom-router-link">Home</router-link>
          <router-link :to="{name: 'Events'}" class="custom-router-link">Events</router-link>
          <router-link :to="{name: 'Map'}" class="custom-router-link">Map</router-link>
          <router-link :to="{name: 'Home'}" class="custom-router-link">Profile</router-link>
        </div>
        <v-spacer></v-spacer> <!-- Flex item to push following items to the right -->





        <!-- <div class="grid4child">
          <v-speed-dial v-model="fab" transition="fade-transition">
            <template v-slot:activator="{ props: activatorProps }">
              <v-fab v-bind="activatorProps" size="large" icon="mdi-account"></v-fab>
            </template>
            <v-btn key="1" icon="mdi-account-plus"></v-btn>
            <v-btn key="2" icon="mdi-login"></v-btn>
          </v-speed-dial>
        </div> -->
      </div>
    </v-toolbar>

    <Router-view></Router-view>
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
  color: white;
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
