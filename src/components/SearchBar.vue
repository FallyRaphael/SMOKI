<template>
      <v-toolbar
        dense
        floating
        :style="{ borderRadius: '15px'}"
      >
        <v-text-field
          prepend-icon="mdi-magnify"
          hide-details
          single-line
          :style="{ paddingLeft: '10px'}"
        ></v-text-field>
  
        <v-btn icon>
          <v-icon>mdi-enter</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
  </template>