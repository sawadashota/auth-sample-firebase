<template>
  <a
    class="button"
    @click="googleLogout">Sign Out</a>
</template>

<script>
  import firebase from '../plugins/firebase';

  export default {
    methods: {
      googleLogout: async function() {
        await firebase.auth().signOut();
        this.$store.dispatch('user/clear');
        this.$router.push({path: '/signin'});
      },
    }
  };
</script>

<style>
</style>
