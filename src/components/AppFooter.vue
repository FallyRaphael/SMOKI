<template>
  <div class="pa-4 text-center" v-for="(link, index) in links" :key="'dialog-' + index">
    <v-dialog v-model="link.dialog" max-width="600">
      <v-card>
        <v-card-title>{{ link.title }}</v-card-title>
        <v-card-text>
          <div v-if="link.title === 'About Us'">
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Phone</v-list-item-title>
                  <v-list-item-subtitle>+43 755 698912</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Email</v-list-item-title>
                  <v-list-item-subtitle>smoki@spengergasse.at</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Address</v-list-item-title>
                  <v-list-item-subtitle>Spengergasse 5, 1050 Wien</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>

          <div v-if="link.title === 'Team'">
            <v-list dense>
              <v-list-item v-for="member in link.members" :key="member.name">
                <v-list-item-content>
                  <v-list-item-title>{{ member.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ member.role }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
          <div v-if="link.title === 'Contact Us'">
            <p>Feel free to reach out to us!</p>
            <v-btn color="primary" @click="sendEmail">Send Email</v-btn>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close" @click="toggleDialog(index)">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <v-footer class="bg-indigo-lighten-1 footer-stick-to-bottom" v-footer :style="{ flex: 0.1 }">
    <v-row justify="center" no-gutters>
      <v-btn v-for="(link, index) in links" :key="link.title" class="mx-2" color="white" rounded="xl" variant="text"
        @click="toggleDialog(index)">
        {{ link.title }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>SMOKI</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
.footer-stick-to-bottom {
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    links: [
      { title: 'About Us', dialog: false, content: 'Here is some information about us: Phone: +43 755 698912, Email: smoki@spengergasse.at, Address: 1050 Spengergasse, Wien, Österreich.' },
      {
        title: 'Team', dialog: false, members: [
          { name: 'Raphael Fally', role: 'Project Leader'},
          { name: 'Marko Markovic', role: 'Project Member'},
          { name: 'Rafael Budinsky', role: 'Project Member'},
          { name: 'Ayca Öztürk', role: 'Project Member'}
        ]
      },
      { title: 'Contact Us', dialog: false }
    ]
  }),
  methods: {
    toggleDialog(index) {
      this.links[index].dialog = !this.links[index].dialog;
    },
    sendEmail() {
      const email = 'smoki@spengergasse.at';
      const subject = encodeURIComponent('Support'); 
      const emailBody = encodeURIComponent('Shalom Smoki team'); 
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${emailBody}`, '_blank');
    }

  }
}
</script>