<template>
  <section class="container">
    <div>
      <section>
        <div class="notification">
          Hi {{ user.displayName }}!
        </div>
        <Profile/>
      </section>
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {Profile} from '~/components';

  export default {
    middleware: 'authenticated',
    components: {
      Profile
    },
    computed: {
      ...mapGetters('user', ['user']),
    },
  };
</script>

<style>
</style>
