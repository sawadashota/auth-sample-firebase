<template>
  <div>
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item"
          to="/">
          Sample For Authentication
        </nuxt-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <LogoutButton v-if="isAuthenticated"/>
          </div>
        </div>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {LogoutButton} from '../components';

  export default {
    components: {
      LogoutButton,
    },
    computed: {
      ...mapGetters('user', ['isAuthenticated'])
    },
  };
</script>

<style>
</style>
