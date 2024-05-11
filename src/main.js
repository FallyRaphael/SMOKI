import { createApp } from "vue";
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import './styles.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

import "leaflet/dist/leaflet.css";

// Import the necessary part of Leaflet to handle the default icons
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import images directly using ES Module syntax
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Update Leaflet's default icon paths to point to the imported images
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetinaUrl,
    iconUrl: iconUrl,
    shadowUrl: shadowUrl
});

const myCustomLightTheme = {
    dark: false, // Set to false for a light theme
    colors: {
      background: '#FFFFFF', // White background for overall brightness
      surface: '#FAFAFA', // Slightly off-white surface for subtle contrast against pure white
      'surface-bright': '#FFFFFF', // Bright surfaces remain pure white
      'surface-light': '#F5F5F5', // Light grey for elevated surfaces or cards
      'surface-variant': '#E0E0E0', // Grey variant for secondary surfaces and backgrounds
      'on-surface-variant': '#424242', // Dark grey on lighter surface variants for readable contrast
      primary: '#3F51B5', // Indigo blue as the primary color
      'primary-darken-1': '#303F9F', // A slightly darker shade of indigo for primary hover states
      secondary: '#9E9E9E', // Grey for secondary elements, providing a neutral complementary color
      'secondary-darken-1': '#757575', // Darker grey for secondary elements when active or hovered
      error: '#D32F2F', // Standard red for errors
      info: '#1976D2', // Info color set to a clear blue
      success: '#4CAF50', // Green for success states
      warning: '#FFA000', // Amber for warnings, ensuring visibility
    },
    variables: {
      'border-color': '#BDBDBD', // Light grey borders for subtle definition
      'border-opacity': 0.12, // Opacity for border, providing a soft edge
      'high-emphasis-opacity': 0.87, // High emphasis for primary text
      'medium-emphasis-opacity': 0.60, // Medium emphasis for secondary text
      'disabled-opacity': 0.38, // Lower opacity for disabled elements
      'idle-opacity': 0.04, // Very faint background for idle UI elements
      'hover-opacity': 0.04, // Slight increase on hover for interaction feedback
      'focus-opacity': 0.12, // More visible for focus states
      'selected-opacity': 0.08, // Selected items have a slightly highlighted background
      'activated-opacity': 0.12, // Activated items have more emphasis
      'pressed-opacity': 0.12, // Visible feedback when elements are pressed
      'dragged-opacity': 0.08, // Slightly visible for draggable elements
      'theme-kbd': '#212529', // Dark for keyboard input elements
      'theme-on-kbd': '#FFFFFF', // White text on dark keyboard elements
      'theme-code': '#ECEFF1', // Very light grey for code blocks
      'theme-on-code': '#37474F', // Dark grey text on code blocks for readability
    }
  };
  

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        sets: {
            mdi: {
                iconfont: 'mdi',
            },
            fa: {
                iconfont: 'fa',
            },
        },
    },
    theme: {
        themes: {
            light: myCustomLightTheme,
        },
    },
  })

createApp(App).use(vuetify).use(router).mount('#app')