import { createApp } from "vue";
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import './styles.css'
import store from './stores'

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
  })

createApp(App).use(vuetify).use(store).use(router).mount('#app')