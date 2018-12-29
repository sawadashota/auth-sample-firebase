<template>
  <a
    target="_blank"
    class="button"
    @click="googleLogin">Google Login</a>
</template>

<script>
  import firebase from '../plugins/firebase';

  export default {
    methods: {
      googleLogin: async function () {
        await firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      },
    }
  };
</script>

<style>
</style>
