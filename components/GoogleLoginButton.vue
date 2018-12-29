<template>
  <a
    class="button"
    @click="googleLogin">Google Login</a>
</template>

<script>
  import firebase from '../plugins/firebase';

  export default {
    methods: {
      googleLogin: async function () {
        try {
          await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
          this.$router.push({path: '/'});
        } catch (e) {
          this.error = e.message;
        }
      },
    }
  };
</script>

<style>
</style>
