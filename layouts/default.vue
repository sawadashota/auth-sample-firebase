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
            <LoginButton v-else/>
          </div>
        </div>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {LogoutButton, LoginButton} from '../components';

  export default {
    components: {
      LogoutButton,
      LoginButton
    },
    computed: {
      ...mapGetters('user', ['isAuthenticated'])
    },
  };
</script>

<style>
</style>
