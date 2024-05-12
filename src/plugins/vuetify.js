import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    iconfont: 'fa' || 'md',
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})