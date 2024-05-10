<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="(page, index) in pages" class="nav-item" :key="index">
            <nav-bar-link
              :page="page"
              :isActive="activePage == index"
              @click.prevent="navLinkClick(index)"></nav-bar-link>
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-primary" @click.prevent="changeTheme()">
            Toggle nav
          </button>
        </form>
      </div>
    </div>
  </nav>


</template>

<script>
import NavBarLink from './NavBarLink.vue'
export default {
  components: { NavBarLink },
  props: ['pages', 'activePage', 'navLinkClick'],
  methods: {
    changeTheme() {
      this.useDarkNav = !this.useDarkNav;
    }
  },
}

</script>