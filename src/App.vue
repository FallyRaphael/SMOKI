<template>
  <div>
    <p>smoki</p>
  </div>
</template>

<style scoped>

</style>

<script>
import Pageviewer from './components/Pageviewer.vue';

  export default {
    components: {
      Pageviewer
    },
    data() {
      return {
        activePage: 0,
        pages: [
          {
            id: 1,
            pageTitle: 'Home',
            content: 'Welcome to the home page'
          },
          {
            id: 2,
            pageTitle: 'About',
            content: 'Learn more about us'
          },
          {
            id: 3,
            pageTitle: 'Contact',
            content: 'Get in touch with us'
          }
        ],
        currentPage: {}
      }
    },
    }
  }
</script>
